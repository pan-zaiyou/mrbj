import React from "react";
import { ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material";
import Avatar from "@/components/@extended/Avatar";
import { QuestionOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const TutorialButton: React.FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/knowledge");
  };

  return (
    <ListItem disablePadding divider>
      <ListItemButton onClick={handleClick}>
        <ListItemAvatar>
          <Avatar alt="Basic" type="combined" color="success">
            <QuestionOutlined />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography variant={"body1"} noWrap>
              {t("dashboard.shortcut.tutorial.primary", { siteName: window.settings.title })}
            </Typography>
          }
          secondary={
            <Typography variant={"caption"} color={"secondary"} noWrap>
              {t("dashboard.shortcut.tutorial.secondary")}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};

export default TutorialButton;