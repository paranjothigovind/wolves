import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import './assets/font/Poppins-Regular.ttf'
import 'bootstrap/dist/css/bootstrap.min.css';

import { setCurrentUser, logoutUser, setTutor } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import TutorRoute from './components/private-route/TutorRoute'
import Dashboard from "./components/dashboard/Dashboard";
import Home from './pages/Home/Home'
import StudentHome from './pages/Home/StudHome'
import TutorProfileExpand from './pages/TutorProfile/TutorProfileExpand'
import TutorDashboard from './Tutor/Dashboard/TutorDashboard';
import TutorHome from './Tutor/Home/TutorHome'
import TutorProfile from './pages/TutorProfile/TutorProfile'
import Test from './components/Login/Password'

import "./App.css";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {  

  render() {
    return (
      <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <div className="App">
          <a
					className="App-link"
				//	onClick={displayRazorpay}
					target="_blank"
					rel="noopener noreferrer"
				>
					Razor pay Donate $5(click here)
				</a>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/student/tutorexpand" component={TutorProfileExpand} />
              <PrivateRoute path="/student/classroom" component={TutorProfile} />
              <PrivateRoute path="/student/test" component={Test} />
            </Switch>
            <Switch>
              <TutorRoute exact path="/tutor/home" component={TutorHome} />
              <TutorRoute exact path="/tutor/dashboard" component={TutorDashboard} />
              <TutorRoute exact path="/tutor/file" component={Test} />
            </Switch>
          </div>
        </Router>
      </Provider>
      </ThemeProvider>
      // <Test />
    );
  }
}
export default App;
