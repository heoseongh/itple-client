import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter, Route } from "react-router-dom";
import ContestDetailPage from "./route/ContestDetailPage";
import ContestPage from "./route/ContestPage";
import SignUpPage from "./route/SignUpPage";
import SignInPage from "./route/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Route exact path={"/"} component={ContestPage} />
      <Route exact path={"/detail/:id"} component={ContestDetailPage} />
      <Route exact path={"/sign-in"} component={SignInPage} />
      <Route exact path={"/sign-up"} component={SignUpPage} />
    </BrowserRouter>
  );
}

export default App;
