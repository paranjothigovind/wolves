import React, { Component } from 'react'
import Style from './MobileNumber.module.css'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import India from '../../assets/img/india.png'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import Input from '@material-ui/core/Input';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios'
import LoginPage from '../auth/Login'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import classnames from "classnames";
import { browserHistory } from 'react-router';
import { withRouter } from "react-router-dom";


class MobileNumber extends Component{


    // const [number, setNumber] = React.useState("");
    // const [OTP, setOTP] = React.useState("");
    // const [display, setDisplay] = React.useState("goLogin");
    // const [email, setEmail] = React.useState("register");
    constructor(props){
        super(props);
        this.state = {
            number: "",
            OTP: "",
            display: "goLogin",
            email: "",
            emailLogin: "",
            passwordLogin: "",
            errors: {}
        }
    }
    
    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }

      componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        // browserHistory.push('/dashboard');
        }
    
        if (nextProps.errors) {
          this.setState({
            errors: nextProps.errors
          });
        }
      }

    onChangeMobileNumber = (e) =>{
        console.log(e.target.value)
        this.setState({
            number: e
        })
    }
    handleChangeEmail = (e) =>{
        console.log(e.target.value)
        this.setState({
            email: encodeURI
        })
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
    
    


    onMobile = (e) => {
        axios.get('https://vts-1.herokuapp.com/login?phonenumber=91'+this.state.number+'&channel=sms')
        .then(response => {
          console.log(response.data.message)
          if (response.data.message === "SENT") {
            this.setState({
                display: "OTPLogin"
            })
          } 
        })
      }



    onOTPChange = () =>{
        axios.get('https://vts-1.herokuapp.com/verify?phonenumber=91'+this.state.number+'&code='+this.state.OTP)
        .then(response => {
            console.log(response.data.message)
            alert(response.data.message);
            if (response.data.message === "VERIFIED") {
                this.setState({
                    display: "register"
                })
            } 
          })
      }
    render(){
        const { errors } = this.state;
        return(
            
            <div className={Style.pageContainer}>
                <p className={Style.header}> Join VTS </p>
                {
                    this.state.display === "login"
                    &&
                    <div>
                        <p className={Style.subHeader}> <span style={{ fontWeight: 500, color:"#000000" }}>or </span> login to your account </p>
                        <TextField  
                            id="  outlined-standard-full-width" 
                            label="Enter Mobile No" 
                            variant="outlined" 
                            margin="normal" 
                            fullWidth 
                            multiline
                            style={{ marginTop:"30px", margin:"8", right:"10px" }}
                            onChange={ e => this.setState({ number: e }) }
                            name="number"
                            value={this.props.number}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" label="Hello">
                                    <img src={India} style={{ height:"20px" }} />
                                    <h6 style={{ paddingTop:"10px", paddingLeft:"10px" }}> +91 </h6>
                                    <ArrowForwardIcon className="arrow" onClick={ this.onMobile } />
                                </InputAdornment>
                                ),
                            }}
                        />
                        <h6 style={{ marginTop:"50px", lineHeight: "30px" }} > New to the VTS, </h6>
                        <button className="buttonSmall" style={{ marginTop: "0px" }} onClick={()=> this.setState({ display:"signup" }) } > Sign Up </button>
                    </div>
                }

                {
                    this.state.display === "OTPLogin"
                    &&
                    <div>
                        <TextField  
                            id="outlined-standard-full-width" 
                            label="Enter OTP" 
                            variant="outlined" 
                            margin="normal" 
                            multiline
                            fullWidth 
                            style={{ marginTop:"30px", margin:"8", right:"10px" }}
                            onChange={e => this.setState({ OTP: e.target.value })}
                        />
                        <button className="buttonSmall" onClick={ this.onOTPChange } > Next </button>
                    </div>
                }

{
                    this.state.display === "OTPRegister"
                    &&
                    <div>
                        <TextField  
                            id="outlined-standard-full-width" 
                            label="Enter OTP" 
                            variant="outlined" 
                            margin="normal" 
                            multiline
                            fullWidth 
                            style={{ marginTop:"30px", margin:"8", right:"10px" }}
                            onChange={e => this.setState({ OTP: e.target.value }) }
                        />
                        <button className="buttonSmall" onClick={this.onOTPChange } > Next </button>
                    </div>
                }
              

                {
                    this.state.display === "signup"
                    &&
                    <div>
                        <p className={Style.subHeader}> <span style={{ fontWeight: 500, color:"#000000" }}>or </span> Sign Up your account </p>
                        <TextField  
                            id="  outlined-standard-full-width" 
                            label="Enter Mobile No" 
                            variant="outlined" 
                            margin="normal" 
                            fullWidth 
                            multiline
                            style={{ marginTop:"30px", margin:"8", right:"10px" }}
                            onChange={e => this.setState({ number: e.target.value })}
                            name="number"
                            value={this.props.number}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" label="Hello">
                                    <img src={India} style={{ height:"20px" }} />
                                    <h6 style={{ paddingTop:"10px", paddingLeft:"10px" }}> +91 </h6>
                                    <ArrowForwardIcon className="arrow" onClick={ this.onMobile } />
                                </InputAdornment>
                                ),
                            }}
                        />
                         <h6 style={{ marginTop:"50px", lineHeight: "30px" }} > Already VTS User, </h6>
                        <button className="buttonSmall" style={{ marginTop: "0px" }} onClick={()=> this.setState({ display: "login" }) } > Login </button>
                </div>
                }

                {
                    this.state.display === "register"
                    &&
                    <div>
                         <TextField 
                            id="standard-basic" 
                            color="default"
                            label="Enter you Email Id"
                            multiline
                            style={{ marginTop:"30px", margin:"8", marginLeft:"10px", right:"10px", width:"300px" }}
                            onChange={this.props.propsEmail}
                        />
                         <FormControl style={{ marginTop:"20px" }} >
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={'password'}
                                onChange={this.props.propsPassword}
                                multiline
                                style={{ width:"300px" }}
                                endAdornment={
                                <InputAdornment position="end" multiline>
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    // onClick={handleClickShowPassword}
                                    // onMouseDown={handleMouseDownPassword}
                                    >
                                    {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                            </FormControl>
                            <FormControl style={{ marginTop:"20px" }} >
                            <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                type={'password'}
                                // value={props.values.ConfirmPassword}
                                onChange={this.props.propsConfirmPassword}
                                multiline
                                style={{ width:"300px" }}
                                endAdornment={
                                <InputAdornment position="end" multiline>
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    // onClick={handleClickShowPassword}
                                    // onMouseDown={handleMouseDownPassword}
                                    >
                                    {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                            </FormControl>

                            <button className="buttonSmall" style={{ marginTop: "30px" }}  onClick={e => this.props.setView()} > Next </button>
                    </div>
                }

                {
                    this.state.display === "goLogin"
                    &&
                    <div className="container" style={{ marginLeft:"-85px", marginTop:"30px" }}>
                    <div style={{ marginTop: "4rem" }} className="row">
                      <div className="col s8 offset-s2">
                        {/* <Link to="/" className="btn-flat waves-effect">
                          <i className="material-icons left">keyboard_backspace</i> Back to
                          home
                        </Link> */}
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                          <h4>
                            <b>Login</b> below
                          </h4>
                          {/* <p className="grey-text text-darken-1">
                            Don't have an account? <Link to="/register">Register</Link>
                          </p> */}
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                          <div className="input-field col s12">
                            <input
                              onChange={this.onChange}
                              value={this.state.email}
                              error={errors.email}
                              id="email"
                              type="email"
                              className={classnames("", {
                                invalid: errors.email || errors.emailnotfound
                              })}
                            />
                            <label htmlFor="email">Email</label>
                            <span className="red-text">
                              {errors.email}
                              {errors.emailnotfound}
                            </span>
                          </div>
                          <div className="input-field col s12">
                            <input
                              onChange={this.onChange}
                              value={this.state.password}
                              error={errors.password}
                              id="password"
                              type="password"
                              className={classnames("", {
                                invalid: errors.password || errors.passwordincorrect
                              })}
                            />
                            <label htmlFor="password">Password</label>
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
                }


            </div>
        );
    }
}
MobileNumber.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
// export default MobileNumber
export default connect(
    mapStateToProps,
    { loginUser }
  )(withRouter(MobileNumber));
