import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Copyright from "../components/Copyright";
import SignUpFormView from "../view/SignUpFormView";

function SignUpContainer({ signUpClicked }) {
  return (
    <Container maxWidth="xs">
      <SignUpFormView signUpClicked={signUpClicked} />
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignUpContainer;
