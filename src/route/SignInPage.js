import React, { Component } from "react";
import Footer from "../components/Footer";
import SignInContainer from "../container/SignInContainer";

class SignInPage extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <SignInContainer />
          <Footer />
        </React.Fragment>
      </div>
    );
  }
}

export default SignInPage;
