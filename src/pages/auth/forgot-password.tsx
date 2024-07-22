import React from "react";
import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

// material-ui
import { Grid, Stack, Typography, Button } from "@mui/material";

// project import (示例路径，根据你的项目配置调整)
import AuthWrapper from "@/sections/auth/AuthWrapper";
import AuthForgotPassword from "@/sections/auth/auth-forms/AuthForgotPassword";
import useTitle from "@/hooks/useTitle";

// ================================|| FORGOT PASSWORD ||================================ //

const ForgotPassword: React.FC = () => {
  useTitle("forgot-password");

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: { xs: 1, sm: 1 } }} // 修复 mb 属性值
          >
            <Typography variant="h3">
              <Trans i18nKey="forgot_password.title">Forgot password</Trans>
            </Typography>
            <Button 
              component={Link} 
              to="/login" 
              variant="text" 
              sx={{ textDecoration: "none", color: "primary.main" }} // 确保颜色属性值正确
            >
              <Trans i18nKey="forgot_password.back_to_login">Back to login</Trans>
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthForgotPassword />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default ForgotPassword;
