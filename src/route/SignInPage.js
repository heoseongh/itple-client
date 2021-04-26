import React, { Component } from "react";
import { Redirect } from "react-router";
import AuthenticationService from "../api/AuthenticationService";
import Footer from "../components/Footer";
import SignInContainer from "../container/SignInContainer";

class SignInPage extends Component {
  // 로그인시 받을 state
  state = {
    username: "",
    password: "",
    showSuccessMessage: true,
    hasLoginFailed: false,
  };

  // 사용자 폼 입력시 변경사항 업데이트시키는 메서드
  handleCreate = ({ username, password }) => {
    this.setState((current) => ({
      username: username,
      password: password,
    }));
  };

  loginClicked = ({ username, password }) => {
    AuthenticationService.executeJwtAuthenticationService(
      // this.state.username,
      username,
      // this.state.password
      password
    )
      .then((response) => {
        AuthenticationService.registerSuccessfulLoginForJwt(
          // this.state.username,
          username,
          response.data.token
        );
        this.props.setLoggedInState(true); // 로그인이 완료되면 app.js 의 state{isLoggedIn:true}로 변경한다.
        // this.props.history.push("/"); // 메인으로 리다이렉션
      })
      .catch(() => {
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      });
  };

  render() {
    return (
      <div>
        <React.Fragment>
          {this.props.isLoggedIn ? (
            <Redirect to={"/"}></Redirect>
          ) : (
            <SignInContainer
              onCreate={this.handleCreate}
              loginClicked={this.loginClicked}
            />
          )}
          <Footer />
        </React.Fragment>
      </div>
    );
  }
}

export default SignInPage;
