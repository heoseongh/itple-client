import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Copyright from "../components/Copyright";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  href: {
    color: "#3f51b5",
    textDecoration: "none",
  },
}));

export default function SignInFormView({ onCreate, loginClicked }) {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /**
   * @description 폼 제출시 호출되는 메서드
   * @param {event} event
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // 회원가입시 화면 전환이 되지 않도록 이벤트 진행을 막는다.

    // SignUpPage 컴포넌트에 넘겨줄 폼 데이터
    const signInForm = {
      username: username,
      password: password,
    };

    // state 공백으로 초기화
    setUsername("");
    setPassword("");

    // 폼에 작성된 데이터를 SignUpPage로 넘겨준다.
    onCreate(signInForm);
    loginClicked(signInForm);
    
    alert("로그인되었습니다.");
  };

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        로그인
      </Typography>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="이메일"
          name="email"
          autoComplete="email"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="비밀번호"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="로그인유지"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          로그인
        </Button>
        <Grid container>
          <Grid item xs>
            <Link to={"/findPassword"} className={classes.href} variant="body2">
              비밀번호를 잊으셨나요?
            </Link>
          </Grid>
          <Grid item>
            <Link to={"/sign-up"} className={classes.href} variant="body2">
              아직 계정이 없으신가요? 가입하기
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </form>
    </div>
  );
}
