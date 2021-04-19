import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Copyright from "../components/Copyright";
import SignUpFormView from "../view/SignUpFormView";

function SignUpContainer() {
  return (
    <Container maxWidth="xs">
      <SignUpFormView />
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignUpContainer;