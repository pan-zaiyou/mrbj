import React, { useState } from "react";
import lo from "lodash-es";

// Material-UI
import { Dialog, DialogContent, DialogTitle, InputAdornment } from "@mui/material";
import { useSnackbar } from "notistack";
import IconButton from "@/components/@extended/IconButton";
import { SendOutlined } from "@ant-design/icons";

// Third Party
import ReCaptcha from "react-google-recaptcha";
import { Trans, useTranslation } from "react-i18next";
import ReactGA from "react-ga4";

// Project Imports
import { useGetGuestConfigQuery, useSendEmailVerifyMutation } from "@/store/services/api";

// Component Definition
export interface SendMailButtonProps {
  email: string;
}

const SendMailWithCaptchaButton: React.FC<SendMailButtonProps> = ({ email }) => {
  const { data: guestConfig } = useGetGuestConfigQuery();
  const [sendEmailVerify, { isLoading }] = useSendEmailVerifyMutation();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const handleCaptchaVerify = (token: string | null) => {
    if (lo.isNull(token)) {
      enqueueSnackbar(t("auth.captcha.error_null_token"), { variant: "error" });
      return;
    }

    sendEmailVerify({ email, recaptcha_data: token })
      .unwrap()
      .then(() => {
        enqueueSnackbar(t("auth.captcha.success"), { variant: "success" });
        ReactGA.event({
          category: "auth",
          action: "send_email_verify",
          label: "send_email_verify",
          email,
          success: true,
        });
      })
      .catch((err) => {
        console.error(err);
        enqueueSnackbar(t("auth.captcha.error"), { variant: "error" });
        ReactGA.event({
          category: "auth",
          action: "send_email_verify",
          label: "send_email_verify",
          email,
          success: false,
          error: err.toString(),
        });
      })
      .finally(() => {
        setOpen(false);
      });
  };

  return (
    <>
      <InputAdornment position="end">
        <IconButton
          aria-label="send email code"
          onClick={() => setOpen(true)}
          edge="end"
          color="secondary"
          disabled={isLoading}
        >
          <SendOutlined />
        </IconButton>
      </InputAdornment>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          <Trans i18nKey={"auth.captcha.title"}>Captcha</Trans>
        </DialogTitle>
        <DialogContent>
          <ReCaptcha
            sitekey={guestConfig?.recaptcha_site_key!}
            onChange={handleCaptchaVerify}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

const SendMailButton: React.FC<SendMailButtonProps> = ({ email }) => {
  const [sendMail, { isLoading }] = useSendEmailVerifyMutation();
  const { data: siteConfig } = useGetGuestConfigQuery();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const handleSendEmailCode = () => {
    console.log("send email code");
    sendMail({ email })
      .unwrap()
      .then(() => {
        enqueueSnackbar(t("auth.captcha.success"), { variant: "success" });
      })
      .catch((err) => {
        console.error(err);
        enqueueSnackbar(t("auth.captcha.error"), { variant: "error" });
      });
  };

  return (
    <>
      {siteConfig?.is_recaptcha === 1 ? (
        <SendMailWithCaptchaButton email={email} />
      ) : (
        <InputAdornment position="end">
          <IconButton
            aria-label="send email code"
            onClick={handleSendEmailCode}
            edge="end"
            color="secondary"
            disabled={isLoading}
          >
            <SendOutlined />
          </IconButton>
        </InputAdornment>
      )}
    </>
  );
};

export default SendMailButton;
