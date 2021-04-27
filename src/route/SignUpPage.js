import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import SignUpContainer from "../container/SignUpContainer";
import * as API from "../api/index";
import * as LIB from "../api/lib/index";
import { Redirect } from "react-router";

/**
 * 리다이렉션 방법은 2가지가 있습니다.
 * @code1 this.props.history.push("/");
 * @description
 * 1번 코드는 리액트 라우터에서 제공하는 몇 가지 props 중에서 history 라는 props를 사용해서 리다이렉트 시킵니다. 이 방법은 페이지 리로드 없이 화면을 바로 렌더링 해서 뿌려줍니다.
 * @code2 window.location.href = '/';
 * @description
 * 2번 코드는 기본적으로 Window 인터페이스에서 지원하는 Location 인터페이스를 사용하는 방법입니다. 이 방법은 페이지 리로드가 일어납니다.
 */

class SignUpPage extends Component {
  signUpClicked = (form) => {
    API.Auth.signup(form);

    if (localStorage.getItem("authenticatedUser") !== null) {
      this.props.history.push("/"); // 메인으로 리다이렉션
    }
  };
  render() {
    return (
      <div>
        <React.Fragment>
          {LIB.Token.isTokenExist() ? (
            <Redirect to={"/"} />
          ) : (
            <>
              <NavigationBar />
              <SignUpContainer signUpClicked={this.signUpClicked} />
            </>
          )}
        </React.Fragment>
      </div>
    );
  }
}

export default SignUpPage;
