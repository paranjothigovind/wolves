import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";



const TutorRoute = ({ component: Component, auth, user, ...rest }) => (

  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true && user === "TUTOR" ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

TutorRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.auth.user.userType
});

export default connect(mapStateToProps)(TutorRoute);
