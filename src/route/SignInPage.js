import React, { Component } from "react";
import { Redirect } from "react-router";
import * as API from "../api/index";
import * as LIB from "../api/lib/index";
import Footer from "../components/Footer";
import SignInContainer from "../container/SignInContainer";

/**
 * 리다이렉션 방법은 2가지가 있습니다.
 * @code1 this.props.history.push("/");
 * @description
 * 1번 코드는 리액트 라우터에서 제공하는 몇 가지 props 중에서 history 라는 props를 사용해서 리다이렉트 시킵니다. 이 방법은 페이지 리로드 없이 화면을 바로 렌더링 해서 뿌려줍니다.
 * @code2 window.location.href = '/';
 * @description
 * 2번 코드는 기본적으로 Window 인터페이스에서 지원하는 Location 인터페이스를 사용하는 방법입니다. 이 방법은 페이지 리로드가 일어납니다.
 */

class SignInPage extends Component {
  signInClicked = (form) => {
    // 화면 리로딩없이 리다이렉트를 하려면 라우터의 prop을 넘겨줘야하는데
    // 어떻게 하는 것이 더 좋은 방법인지는 알아봐야겠다.
    // 일단은 window.location.href = "/" 방식으로 리다이렉트 해줘야겠다.
    API.Auth.signin(form); // 실제 로그인 서비스 로직
  };

  render() {
    return (
      <div>
        <React.Fragment>
          {LIB.Token.isTokenExist() ? (
            <Redirect to={"/"} />
          ) : (
            <SignInContainer signInClicked={this.signInClicked} />
          )}
          <Footer />
        </React.Fragment>
      </div>
    );
  }
}

export default SignInPage;
