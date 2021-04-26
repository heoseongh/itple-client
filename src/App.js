import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route } from "react-router-dom";
import ContestDetailPage from "./route/ContestDetailPage";
import ContestPage from "./route/ContestPage";
import SignUpPage from "./route/SignUpPage";
import SignInPage from "./route/SignInPage";
import ApiTestPage from "./route/ApiTestPage";
import { Component } from "react";
import { get } from "./api/token.api";

class App extends Component{
  
  state = {
    isLoggedIn: false
  }

  setLoggedInState = (value) => {
    this.setState({isLoggedIn : value});
  };


  // 초기 컴포넌트 렌더링시 토큰이 존재하면 로그인 상태로 처리(isLoggedIn:true)
  componentDidMount() {
    if(get() != null) this.setState({isLoggedIn: true});
  }

  render() {
    return (
      <BrowserRouter>
        <CssBaseline />
        {/* 리다이렉트를 위해서 로그인 상태 넘겨주기 */}
        <Route exact 
          path={"/"} 
          render={() => <ContestPage setLoggedInState={this.setLoggedInState} isLoggedIn={this.state.isLoggedIn}/>}
        />
        <Route exact path={"/detail/:id"} component={ContestDetailPage} />
        <Route exact 
          path={"/sign-in"} 
          render={() => <SignInPage setLoggedInState={this.setLoggedInState} isLoggedIn={this.state.isLoggedIn}/>}
        />
        <Route exact 
          path={"/sign-up"} 
          render={() => <SignUpPage setLoggedInState={this.setLoggedInState}/>}
        />
        <Route exact path={"/api"} component={ApiTestPage} />
      </BrowserRouter>
    );
  }
}

export default App;
