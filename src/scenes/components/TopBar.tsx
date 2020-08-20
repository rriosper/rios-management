import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar as MaterialAppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const AppBar = () => {
  const classes = useStyles();
  const { t } = useTranslation("common");
  return (
    <MaterialAppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {t("appBar.title")}
        </Typography>
        <Button color="inherit">{t("appBar.login")}</Button>
      </Toolbar>
    </MaterialAppBar>
  );
};

export default AppBar;
