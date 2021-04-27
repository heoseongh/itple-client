import axios from "axios";
import AuthenticationService from "./AuthenticationService";

/**
 * @discription
 * @method executeJwtAuthenticationService JWT인증서버로부터 토큰을 받아오고
 * @method registerSuccessfulLoginForJwt 아이디와 받아온 토큰을 로컬스토리지에 저장한다.
 */
export const signin = ({ username, password }) => {
  AuthenticationService.executeJwtAuthenticationService(username, password)
    .then((response) => {
      AuthenticationService.registerSuccessfulLoginForJwt(
        username,
        response.data.token
      );
      // response에 토큰이 존재하면 로그인 성공 알림창을 띄우고 메인으로 리다이렉트 시킨다.
      if (response.data.token) {
        alert("로그인되었습니다.");
        window.location.href = "/"; // 메인으로 리다이렉션
      }
    })
    .catch((error) => {
      if (error.response.status === 400) {
        alert("양식에 맞게 입력해주세요.");
      } else if (error.response.status === 401) {
        alert("등록되지 않은 사용자입니다.");
      } else if (error.response.status === 500) {
        alert("이미 등록된 사용자입니다.");
      }
    });
};

export const signup = ({ nickname, username, password }) => {
  axios
    .post("/api/signup", {
      nickname: nickname,
      username: username,
      password: password,
    })
    .then((response) => {
      localStorage.setItem("authenticatedUser", response.data.username);
      AuthenticationService.executeJwtAuthenticationService(
        username,
        password
      ).then((response) => {
        AuthenticationService.registerSuccessfulLoginForJwt(
          username,
          response.data.token
        );
        // response에 토큰이 존재하면 로그인 성공 알림창을 띄우고 메인으로 리다이렉트 시킨다.
        if (response.data.token) {
          alert(`${nickname}님 잇플 멤버가 되신 것을 축하드립니다!`);
          window.location.href = "/"; // 메인으로 리다이렉션
        }
      });
    })
    .catch((error) => {
      if (error.response.status === 400) {
        alert("양식에 맞게 입력해주세요.");
      } else if (error.response.status === 500) {
        alert("이미 등록된 사용자입니다.");
      }
    });
};
