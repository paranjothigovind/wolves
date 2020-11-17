import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { TextField } from '@material-ui/core';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      if( this.props.auth.user.userType === "TUTOR" ){
          this.props.history.push("/tutor/home");
      }  
      if(this.props.auth.user.userType === "STUDENT"){
        this.props.history.push("/dashboard");
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      if(nextProps.auth.user.userType === "TUTOR"){
        this.props.history.push("/tutor/home");
      }
      if(nextProps.auth.user.userType === "STUDENT"){
        this.props.history.push("/dashboard");
      }
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            {/* <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link> */}
            <div className="col s12" style={{ paddingLeft: "11.250px", marginTop: '-10px' }}>
              {/* <h6 style={{ fontWeight: 900 }}>
                or <span style={{ color: '#226CD5', cursor: 'pointer' }}> signup to your account  </span>  
              </h6> */}
              {/* <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p> */}
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <TextField 
                   id="email" 
                  label="Email" 
                  variant="outlined" 
                  fullWidth
                  value={this.state.email}
                  error={errors.email}
                  onChange={this.onChange}
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                  style={{ marginTop: '20px', marginLeft: '-3px' }}
                />
                {/* <TextField
                  onChange={this.onChange}
                  id="outlined-standard-full-width" 
                  value={this.state.email}
                  variant="outline"
                  error={errors.email}
                  id="email"
                  type="email"
                  label="Email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                /> */}
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <TextField
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  label="Password" 
                  variant="outlined" 
                  fullWidth
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                  style={{ marginTop: '20px', marginLeft: '-3px' }}
                />
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  type="submit"
                  className="buttonSmall"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Login));
