import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import FacultyRoute from "./components/private-route/FacultyRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Faculty from './pages/Faculty'
import Student from './pages/Student'
import StudentProfile from './pages/StudentProfile'

import "./App.css";
import AddCourse from "./pages/AddCourse";

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
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Switch>
              <PrivateRoute exact path="/student" component={Student} />
              <PrivateRoute exact path="/studentprofile" component={StudentProfile} />
            </Switch>
            <Switch>
              <FacultyRoute exact path="/faculty" component={Faculty} />
              <FacultyRoute exact path="/faculty/addcourse" component={AddCourse} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
