import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import AppTheme from "./Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Headers from "./ui/appbar";
import SignInSide from "./ui/login";
import SignUp from "./ui/signup";
import Album from "./ui/home";
import AuthState from "./contexts/auth/authState";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  return (
    <AuthState>
      <ThemeProvider theme={AppTheme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Album} />
            <Route exact path="/login" component={SignInSide} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </AuthState>
  );
};

export default App;
