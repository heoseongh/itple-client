import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import SignUpContainer from "../container/SignUpContainer";

class SignUpPage extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <NavigationBar />
          <SignUpContainer />
        </React.Fragment>
      </div>
    );
  }
}

export default SignUpPage;
