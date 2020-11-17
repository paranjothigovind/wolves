import React, { Component } from 'react'
import clsx from 'clsx';
import Style from './MobileNumber.module.css'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import India from '../../assets/img/india.png'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core'
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
import { withRouter } from 'react-router-dom'
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import MUIPhonenumber from 'material-ui-phone-number';
import Timer from 'react-compound-timer'
import Password from './Password'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));


const MobileNumber = (props)=>{


    const [number, setNumber] = React.useState("");
    const [OTP, setOTP] = React.useState("");
    const [display, setDisplay] = React.useState("goLogin");
    const [email, setEmail] = React.useState("register");
    const [resendBtn, setResendBtn] = React.useState(false)
    const classes = useStyles();

    const onChangeMobileNumber = (e) =>{
        console.log(e.target.value)
        setNumber(e)
    }
    const handleChangeEmail = (e) =>{
        console.log(e.target.value)
        setEmail(e)
    }

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        confirmPassword: ''
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const onMobile = (e) => {
        axios.get('https://vts-1.herokuapp.com/login?phonenumber='+number+'&channel=sms')
        .then(response => {
          setDisplay("OTPRegister");
          console.log(response.data.message)
          // if (response.data.message === "SENT") {
          //   setDisplay("OTPRegister");
          // } 
        })
        setTimeout(()=> {
          setResendBtn(true)
        }, 60000)
      }

      const onMobileLogin = (e) => {
        axios.get('https://vts-1.herokuapp.com/login?phonenumber='+number+'&channel=sms')
        .then(response => {
          setDisplay("OTPLogin");
          console.log(response.data.message)
          // if (response.data.message === "SENT") {
          //   setDisplay("OTPLogin");
          // } 
        })
        setTimeout(()=> {
          setResendBtn(true)
        }, 60000)
      }


      const onOTPChange = () =>{
        axios.get('https://vts-1.herokuapp.com/verify?phonenumber='+number+'&code='+OTP)
        .then(response => {
            console.log(response.data.message)
            alert(response.data.message);
            if (response.data.message === "VERIFIED") {
              setDisplay("register");
            } 
          })
      }

      const onOTPChangeLogin = () =>{
        axios.get('https://vts-1.herokuapp.com/verify?phonenumber='+number+'&code='+OTP)
        .then(response => {
            console.log(response.data.message)
            alert(response.data.message);
            if (response.data.message === "VERIFIED") {
              setDisplay("goLogin");
            } 
          })
      }

      const sendResentOTP = () =>{
        axios.get('https://vts-1.herokuapp.com/login?phonenumber='+number+'&channel=sms')
        .then(response => {
          console.log(response.data.message)
        })
      }

      const handleOnChange= (value) => {
        var oldString = value;
        var newString = oldString.replace("+", "");
        var newString1 = newString.replace("(","");
        var newString2 = newString1.replace(")", "");
        var newString3 = newString2.replace("-", "")
        var removeExtraSpace = newString3.replace(/\s+/g,"")
        console.log(removeExtraSpace);
        setNumber(removeExtraSpace)
      }

      const handlePassword = (e) => {
        props.propsConfirmPassword(e)
      }

      const submitBtn = () => {
        props.setView()
      }

      
      
      
        return(
            <div className={Style.pageContainer}>
                <p className={Style.header}> Join VTS </p>
                {
                    display === "login"
                    &&
                    <div>
                        <p className={Style.subHeader}> <span style={{ fontWeight: 500, color:"#000000" }}>or </span> login to your account </p>
                        <ValidatorForm
                            // ref="form"
                            onSubmit={onMobileLogin}
                            onError={errors => console.log(errors)}
                        >
                          <MUIPhonenumber
                            defaultCountry={'us'} 
                            // value={number}
                            
                            InputProps={{ disableUnderline: true }}
                            onChange={handleOnChange}
                            />
                          <br/>
                          {/* <p style={{  fontSize:"14px", marginBottom: "-10px", marginTop: "5px" }}> *Enter your phone number with country code </p> */}
                          <button className="buttonSmall"  onClick={onMobileLogin}> Send OTP </button>
                          <h6 style={{ marginTop:"50px", lineHeight: "30px" }} > New to the VTS, </h6>
                          <button className="buttonSmall" style={{ marginTop: "0px" }} onClick={()=> setDisplay("signup") } > Sign Up </button>
                        </ValidatorForm>
                    </div>
                }

                {
                    display === "OTPLogin"
                    &&
                    <div>
                        <TextField  
                            id="outlined-standard-full-width" 
                            label=" &nbsp; Enter OTP" 
                            margin="normal"
                            fullWidth                             
                            style={{ marginTop:"30px", margin:"8", paddingLeft:"5px", right:"10px",paddingRight:"50px", textDecoration: "none" }}
                            onChange={e => setOTP(e.target.value)}
                            InputProps={{ disableUnderline: true }}
                        />
                    

                {
                          resendBtn 
                          ?
                          <div>
                            <div style={{ display: "flex" }}>
                            <p>Resend OTP in &nbsp; </p>
                            <Timer initialTime={60000} direction="backward">
                                {() => (
                                    <React.Fragment>
                                        <Timer.Seconds /> seconds
                                    </React.Fragment>
                                )}
                            </Timer>
                          </div> 
                          <button className="buttonSmall" onClick={sendResentOTP}> Resend</button>
                          </div>
                          :
                          <div style={{ display: "flex" }}>
                            <p>Resend OTP in &nbsp; </p>
                            <Timer initialTime={60000} direction="backward">
                                {() => (
                                    <React.Fragment>
                                        <Timer.Seconds /> seconds
                                    </React.Fragment>
                                )}
                            </Timer>
                          </div>
                        }

                       


                        {/* <div className="row">
                          <div className="col-4">
                            <p>Resend OTP in </p>
                          </div>
                          <div className="col-4">
                          <Timer initialTime={60000} direction="backward">
                              {() => (
                                  <React.Fragment>
                                      <Timer.Seconds /> seconds
                                  </React.Fragment>
                              )}
                          </Timer>
                          </div>
                          <div className="col-6"></div>
                        </div> */}
                        
                        {/* {
                          setTimeout(()=> {
                            <button className="buttonSmall" onClick={resentOTP}> Resend OTP </button>
                          },60000)
                        } */}

                     
                       
                        <button className="buttonSmall" onClick={ onOTPChangeLogin } > Next </button>
                    </div>
                }

{
                    display === "OTPRegister"
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
                            onChange={e => setOTP(e.target.value) }
                        />
                          {
                          resendBtn 
                          ?
                          <div>
                            <div style={{ display: "flex" }}>
                            <p>Resend OTP in &nbsp; </p>
                            <Timer initialTime={60000} direction="backward">
                                {() => (
                                    <React.Fragment>
                                        <Timer.Seconds /> seconds
                                    </React.Fragment>
                                )}
                            </Timer>
                          </div> 
                          <button className="buttonSmall" onClick={sendResentOTP}> Resend</button>
                          </div>
                          :
                          <div style={{ display: "flex" }}>
                            <p>Resend OTP in &nbsp; </p>
                            <Timer initialTime={60000} direction="backward">
                                {() => (
                                    <React.Fragment>
                                        <Timer.Seconds /> seconds
                                    </React.Fragment>
                                )}
                            </Timer>
                          </div>
                        }

                        <button className="buttonSmall" onClick={onOTPChange } > Next </button>
                    </div>
                }
              

                {
                    display === "signup"
                    &&
                    <div>
                        <p className={Style.subHeader}> <span style={{ fontWeight: 500, color:"#000000" }}>or </span> Sign Up your account </p>
                        <MUIPhonenumber
                            defaultCountry={'us'} 
                            // value={number}
                            
                            InputProps={{ disableUnderline: true }}
                            onChange={handleOnChange}
                            />
                          <br/>
                       {/* <p style={{  fontSize:"14px", marginBottom: "-10px", marginTop: "5px" }}> *Enter your phone number with country code </p> */}
                          <button className="buttonSmall"  onClick={onMobile}> Send OTP </button>
                         <h6 style={{ marginTop:"50px", lineHeight: "30px" }} > Already VTS User, </h6>
                        <button className="buttonSmall" style={{ marginTop: "0px" }} onClick={() => setDisplay("login") } > Login </button>
                </div>
                }

                {
                    display === "register"
                    &&
                    <div>
                          <h6 style={{ fontWeight: 900, }}>
                            or <span style={{ color: '#226CD5', cursor: 'pointer' }} onClick={()=> setDisplay("goLogin") } > login to your account  </span>  
                          </h6>
                       <ValidatorForm
                            useref="form"
                            onSubmit={e => props.setView()}
                            onError={errors => console.log(errors)}
                            >
                         {/* <p style={{ fontSize: "12px", opacity: "0.7", marginTop:"20px" }}> Enter your email id </p> */}
                         <TextValidator 
                            id="outlined-basic"
                            variant="outlined"
                            required
                            color="default"
                            label="Enter you Email Id"
                            InputProps={{ disableUnderline: true, }}
                            style={{ marginTop:"20px", margin:"8", marginLeft:"10px", right:"10px", width: "380px" }}
                            onChange={props.propsEmail}
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required']}
                        />
                        {/* <TextValidator
                            id="standard-basic" 
                            required
                            type="password"
                            color="default"
                            label="Password"
                            onChange={handleChange('password')}
                            value={values.password}
                            InputProps={{ disableUnderline: true, }}
                            style={{ marginTop:"0px", margin:"8", marginLeft:"10px", right:"10px", width:"300px" }}
                            validators={['minNumber:6', 'maxNumber:14', 'matchRegexp:^[0-9]$']}
                            errorMessages={['this field is required']}
                        /> */}
                         {/* <TextValidator
                            id="standard-basic" 
                            required
                            type="password"
                            color="default"
                            label="Enter your New Password"
                            InputProps={{ disableUnderline: true, }}
                            value={values.ConfirmPassword}
                            onChange={props.propsConfirmPassword}
                            style={{ marginTop:"0px", margin:"8", marginLeft:"10px", right:"10px", width:"350px" }}
                            // validators={['minNumber:6', 'maxNumber:14', 'matchRegexp:^[0-9]$']}
                            // errorMessages={['this field is required']}
                        /> */}
                        
                        <Password fetchPassword = {handlePassword} submitBtn ={submitBtn} />

                      {/* <button className="buttonSmall" type="submit" style={{ marginTop: "30px" }}   > Next </button> */}
                      </ValidatorForm>
                          {/* <h6 style={{ marginTop:"50px", lineHeight: "30px" }} > New to the VTS, </h6>
                          <button className="buttonSmall" style={{ marginTop: "0px" }} onClick={()=> setDisplay("goLogin") } > Login </button> */}
                    </div>
                }

                {
                    display === "goLogin"
                    &&
                    <div>
                         <h6 style={{ fontWeight: 900, }}>
                            or <span style={{ color: '#226CD5', cursor: 'pointer' }} onClick={()=> setDisplay("register") } > signup to your account  </span>  
                          </h6>
                        <div style={{ marginLeft:"-25px", marginTop:"-40px" }} >
                            <LoginPage />  
                        </div>
                        {/* <h6 style={{ marginTop:"50px", lineHeight: "30px" }} > New to the VTS, </h6>
                        <button className="buttonSmall" style={{ marginTop: "0px" }} onClick={()=> setDisplay("register") } > Sign Up </button> */}
                    </div>
                }

            </div>
        );
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
