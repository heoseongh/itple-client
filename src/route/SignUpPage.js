import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import SignUpContainer from "../container/SignUpContainer";
import AuthenticationService from "../api/AuthenticationService"

class SignUpPage extends Component {
  // 회원가입시 받을 state
  state = {
    username: '',
    password: '',
  }

  // 사용자 폼 입력시 변경사항 업데이트시키는 메서드
  handleCreate = ({username, password}) => {
    this.setState(current => ({
      username: username,
      password: password,
    }));
  }

  loginClicked = () => {
    console.log(this.state.password);
    console.log(this.state.username);
    AuthenticationService
        .executeJwtAuthenticationService(this.state.username, this.state.password)
        .then((response) => {
        AuthenticationService.registerSuccessfulLoginForJwt(this.state.username,response.data.token)
        this.props.history.push(`/welcome/${this.state.username}`)
    }).catch( () =>{
        this.setState({showSuccessMessage:false})
        this.setState({hasLoginFailed:true})
    })
}
  render() {
    return (
      <div>
        <React.Fragment>
          <NavigationBar />
          <SignUpContainer onCreate={this.handleCreate}/>
        </React.Fragment>
      </div>
    );
  }
}

export default SignUpPage;
