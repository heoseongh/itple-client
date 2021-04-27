import React from "react";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import * as LIB from "../api/lib/index";
import SideMenu from "./SideMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  href: {
    color: "inherit",
    textDecoration: "none",
  },
}));

function NavigationBar() {
  const classes = useStyles();

  const signout = () => {
    LIB.Token.clear();
    alert("정상적으로 로그아웃 되었습니다.");
    window.location.href = "/";
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to={"/"} className={classes.href}>
              Itple
            </Link>
          </Typography>
          {LIB.Token.isTokenExist() ? (
            <>
            {localStorage.getItem('nickname')}님 안녕하세요!
            <SideMenu signout={signout}/>
            </>
          ) : (
            <div>
              <Button color="inherit">
                <Link to={"/sign-in"} className={classes.href}>
                  Login
                </Link>
              </Button>
              <Button color="inherit">
                <Link to={"/sign-up"} className={classes.href}>
                  Signup
                </Link>
              </Button>
            </div>
          )}
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationBar;
