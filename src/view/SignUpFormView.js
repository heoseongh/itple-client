import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  href: {
    color: "#3f51b5",
    textDecoration: "none",
  },
}));

function SignUpFormView({ signUpClicked }) {
  const classes = useStyles();

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  /**
   * @description 폼 제출시 호출되는 메서드
   * @param {event} event
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // 회원가입시 화면 전환이 되지 않도록 이벤트 진행을 막는다.

    // SignInPage 컴포넌트에 넘겨줄 로그인 폼
    const signUpForm = {
      nickname: nickname,
      username: email,
      password: password,
    };

    // 폼에 작성된 데이터를 SignInPage 컴포넌트로 넘겨준다.
    signUpClicked(signUpForm);

    // 보통 폼 제출시 폼에 입력된 정보들을 초기화 한다. 따라서 state를 공백으로 초기화 해주면 된다.
    setNickname("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
  };

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        회원가입
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="nickname"
              label="닉네임"
              name="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              // autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="이메일"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
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
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="passwordConfirm"
              label="비밀번호확인"
              type="password"
              id="passwordConfirm"
              autoComplete="current-password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="이메일 활용 동의"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          가입하기
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link to={"/sign-in"} className={classes.href} variant="body2">
              이미 계정이 있으신가요? 로그인하기
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default SignUpFormView;
