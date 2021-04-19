import { Typography } from "@material-ui/core";
import React from "react";
import Copyright from "./Copyright";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#fff",
    padding: 48,
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Itple
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Platform for easy entry into IT-Contest
      </Typography>
      <Copyright />
    </footer>
  );
}

export default Footer;