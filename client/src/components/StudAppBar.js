import React, { useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Style from './StudAppBar.module.css'
import Typography from '@material-ui/core/Typography';
import { Icon, Toolbar } from '@material-ui/core';
import logo from '../assets/img/logo2.png'
import { Drawer } from '@material-ui/core';
import closeBtn from '../assets/img/close.png'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import India from '../assets/img/india.png'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './AppBar.css'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { Link } from 'react-router-dom'
import yupie from '../assets/img/yupie.PNG'
import MobileNumber from './Login/MobileNumber'
import OTPPage from './Login/OTP'
import StudentOrTutor from './Login/StudentOrTutor'
import StudentBasicInfo from './Login/StudentBasicInfo'
import StudentEducationalInfo from './Login/StudentEducationalInfo'
import StudentBankInfo from './Login/StudentBankInfo'
import Complete from './Login/Complete'
import axios from 'axios'
import { getSectionClassNames } from '@fullcalendar/core';
import { HeadsetMic } from '@material-ui/icons';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser, logoutUser, setUserType } from "../actions/authActions";
import CloseIcon from '@material-ui/icons/Close';

import TutorBasicInfo from './Login/TutorBasicInfo'
import TutorEducationalInfo from './Login/TutorEducationalInfo'

const drawerWidth = 440;
const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    height:"70px",
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: 'transparent',
      outline: 'none'
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    fontFamily: "'Poppins', sans-serif",
    color: '#000000',
    fontWeight: "900px",
    fontSize: theme.typography.pxToRem(19),
    marginRight: theme.spacing(10),
    marginTop: '10px',
    '&:focus': {
      opacity: 1,
      outline: 'none'
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 3,
    fontFamily: "'Poppins', sans-serif",
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo2: {
    backgroundColor: '#ffffff',
    float:"right",
    marginLeft: 'auto',
    height:"70px"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    fontFamily: "'Poppins', sans-serif",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#ffffff'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  formControl: {
    minWidth: "100%",
    marginTop:"10px"
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

}));

 const CustomizedTabs = (props) => {
  const classes = useStyles();

  //New States
  const [ mainView, setMainView] = React.useState("");



  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
      setOpen(true);
    };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const [ studentData, setStudentData ] = React.useState({
    email: '',
    gender: '',
    DOB:''
  });

  
  const [number, setNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [OTP, setOTP] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [DOB, setDOB] = React.useState("");
  const [parentDOB, setParentDOB] = React.useState("");
  const [schoolName, setSchoolName] = React.useState("");
  const [grade, setGrade] = React.useState("");
  const [stream, setStream] = React.useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardCVV, setCardCVV] = React.useState("");
  const [nameOnCard, setNameOnCard] = React.useState("");
  const [bank, setBank] = React.useState("");

  const [tutorName, setTutorName] = React.useState("");
  const [tutorEmail, setTutorEmail] = React.useState("");
  const [tutorGender, setTutorGender] = React.useState("");
  const [tutorDOB, setTutorDOB] = React.useState("");
  const [collegeName, setCollegeName] = React.useState("");
  const [tutorDegree, setTutorDegree] = React.useState("");
  const [tutorStream, setTutorStream] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [working, setWorking] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [course, setCourse] = React.useState("");
  const [courseDuration, setCourseDuration] = React.useState("");
  const [level, setLevel] = React.useState("");
  const [userType, setUserType] = React.useState("");
  const [profilePic, setProfilePic] = React.useState("");
  const [availiability, setAvailiability] = React.useState([]);
  

  
  const getNumber = (e) =>{
    setNumber(e.target.value)
  }

  const getOTP = (e) =>{
    setOTP(e.target.value)
  }

  const getEmail = (e)=>{
    setEmail(e.target.value)
    console.log(e.target.value)
  }

  const getPassword = (e)=>{
    setPassword(e)
    console.log(e.target.value)
  }

  const getConfirmPassword = (e)=>{
    setConfirmPassword(e)
    console.log(e)
  }

  // const sendDataToUser = () =>{
  //   const data ={
  //     name: "qwert",
  //     email: email,
  //     password: password,
  //     password2: confirmPassword,
  //     userType: "STUDENT"
  //   }
  //   axios.post('http://localhost:5000/api/users/register', data)
  //     .then(res => console.log(res.data))
  // }

  


  const onMobileChange = () => {
    setMainView("StudentOrTutor")
    // console.log(number);
    // const mobNumber = number
    // axios.get('http://localhost:5000/login?phonenumber=91'+mobNumber+'&channel=sms')
    // .then(response => {
    //   console.log(response.data.message)
    //   if (response.data.message === "SENT") {
    //     setMainView("OneTimePassword");
    //   } 
    // })
  }


  const onOTPChange = () =>{
    setMainView("StudentOrTutor")
    axios.get('https://vts-1.herokuapp.com/verify?phonenumber=91'+number+'&code='+OTP)
    .then(response => {
        console.log(response.data.message)
        alert(response.data.message);
        if (response.data.message === "VERIFIED") {
          setMainView("StudentOrTutor");
        } 
      })
  }

  const onStudentRegister = () =>{
    setMainView("StudentRegister")
    setUserType("STUDENT")
  }

  const onTutorRegister = () =>{
    setMainView("TutorRegister")
    setUserType("TUTOR")
  }

  const onStudentEducationalInfo = () =>{
    setMainView("StudentEducationalInfo")
  }

  const onStudentBankInfo = () =>{
    setMainView("StudentBankInfo")
  }

  const onComplete = () =>{
    setMainView("Complete")

  }
  const onChangeTutorEducation = () =>{
    setMainView("TutorEducationalInfo")

  }

  const onChangeTutorBankInfo = () =>{
    setMainView("TutorBankInfo")
  }

  const onChangeTutorComplete = () =>{
    setMainView("TutorComplete")
  }


  const handleChangeName = (e) =>{
    setName(e)
  }

  const handleChangeEmail = (e) =>{
    setEmail(e)
  }

  const handleChangeGender = (e) =>{
    if(e === 10 ){
      setGender("Male");
    }else{
      setGender("Female")
    }
  }

  const handleChangeDOB = (e) =>{
    setDOB(e)
    console.log(e)
  }

  const handleChangeParentDOB = (e) =>{
    setParentDOB(e)
    console.log(e)
  }

  const handleChangeSchoolName = (e) =>{
    setSchoolName(e)
    console.log(e)
  }

  const handleChangeGrade = (e) =>{
    setGrade(e)
    console.log(e)
  }

  const handleChangeStream = (e) =>{
    setStream(e)
    console.log(e)
  }

  const handleChangeCardNumber = (e) =>{
    setCardNumber(e)
    console.log(e)
  }

  const handleChangeCardCVV = (e) =>{
    setCardCVV(e)
    console.log(e)
  }

  const handleChangeNameOnCard = (e) =>{
    setNameOnCard(e)
    console.log(e)
  }

  const handleChangeBank = (e) =>{
    setBank(e)
    console.log(e)
  }
  

  const handleTutorName = (e) =>{
    setTutorName(e)
  }

  const handleChangeTutorEmail = (e) =>{
    setTutorEmail(e)
  }

  const handleChangeTutorGender = (e) =>{
    if(e === 10 ){
      setTutorGender("Male");
    }else{
      setTutorGender("Female")
    }
  }

  const handleChangeTutorDOB = (e) =>{
    setTutorDOB(e)
    console.log(e)
  }

  const handleCollegeName = (e) =>{
    setCollegeName(e)
    console.log(e)
  }

  const handleTutorDegree = (e) =>{
    setTutorDegree(e)
    console.log(e)
  }
  const handleTutorStream = (e) =>{
    setTutorStream(e)
    console.log(e)
  }
  const handlePosition = (e) =>{
    setPosition(e)
    console.log(e)
  }

  const handleDuration = (e) =>{
    setDuration(e)
    console.log(e)
  }

  const handleWorking = (e) =>{
    setWorking(e)
    console.log(e)
  }

  const handleDescription = (e) =>{
    setDescription(e)
    console.log(e)
  }

  const handleCourse = (e) =>{
    setCourse(e)
    console.log(e)
  }
  const handleCourseDuration = (e) =>{
    setCourseDuration(e)
    console.log(e)
  }

  const handleLevel = (e) =>{
    setLevel(e)
    console.log(e)
  }

  const handleProfilePic = (e) =>{
    setProfilePic(e)
    console.log(e)
  }

  const handleAvailability = (e) =>{
    setAvailiability(e)
    console.log(e)
  }


  const sendDataToDB = () => {
    const data = {
      phoneNumber: "8682893336",
      name: name,
      email: email, 
      gender: gender,
      DOB: DOB,
      parentDOB: parentDOB,
      schoolName: schoolName,
      stream: stream,
      grade: grade,
      bankName: bank,
      cardNumber: cardNumber,
      CVV: cardCVV,
      NameOnCard: nameOnCard

    }

    const userData = {
      email: email,
      name: name,
      password: confirmPassword,
      password2: confirmPassword,
      userType: userType
    }

    axios.post('https://vts-1.herokuapp.com/student', data)
      .then(res => console.log(res.data));

    axios.post('https://vts-1.herokuapp.com/api/users/register', userData)
      .then(res => console.log(res.data) )
  }

  const sendTutorDataToDB =()=>{
    const data = {
      name: tutorName,
      email: tutorEmail,
      gender: tutorGender,
      dob: tutorDOB,
      collegeName: collegeName,
      stream: tutorStream,
      degree: tutorDegree,
      position: position,
      duration: duration,
      currentlyWorking: working,
      description: description,
      courseOffering: course,
      courseDuration: courseDuration,
      tutoringLevel: level,
      bankName: bank,
      cardNumber: cardNumber,
      CVV : cardCVV,
      NameOfCard: nameOnCard,
      imgData : profilePic,
      availiability: availiability
    }
    console.log(data)
    const userData = {
      email: email,
      name: tutorName,
      password: confirmPassword,
      password2: confirmPassword,
      userType: userType
    }
    console.log(userData)
    axios.post('https://vts-1.herokuapp.com/tutor', data)
    .then(res => console.log(res.data) )

    axios.post('https://vts-1.herokuapp.com/api/users/register', userData)
    .then(res => console.log(res.data) )
  }


  const onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser();
  };



  

  return (
    <div className={classes.root}>
        <AppBar color="default" position="fixed" style={{ background:'#ffffff', boxShadow:'none', height:70 }}>
            <Toolbar className={Style.toolBar}>

              {/* {
                props.auth.user.userType === "STUDENT"
                ?
                <Link to={"/"}>  <img src={logo} alt='' className={Style.logoImg} /> </Link>
                :
                <Link to={"/tutor/home"}>  <img src={logo} alt='' className={Style.logoImg} /> </Link>
              } */}

              <div className={classes.demo2}>
                  <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
                    
                      <Link to={'#'} style={{ textDecoration:'none' }}>
                          <StyledTab label="Book Sessions" /> 
                      </Link> 

                    {
                      props.auth.user.userType === "STUDENT" 
                      ?
                      <Link to={'/dashboard'} style={{ textDecoration:'none' }}>
                          <StyledTab label="Our Tutors" /> 
                      </Link>   
                      :
                      null
                    }

                      <Link to={'#'} style={{ textDecoration:'none' }}>
                          <StyledTab label="Book Sessions" /> 
                      </Link> 

                      {
                        props.auth.user.userType === "TUTOR" ?
                          <Link to={'/tutor/dashboard'} style={{ textDecoration:'none' }}>
                              <StyledTab label="My Dashboard" /> 
                          </Link>
                          :
                          <Link to={'/student/classroom'} style={{ textDecoration:'none' }}>
                              <StyledTab label="My Classroom" /> 
                          </Link>
                      }


                      <Link to={'#'} style={{ textDecoration:'none' }}>
                          <StyledTab label="Contact us" />
                      </Link>
                      {/* <button className={Style.loginBtn} onClick={handleDrawerOpen}>
                          Login
                      </button> */}

                      {
                         props.auth.isAuthenticated === true ? 
                         <button  className={Style.loginBtn} onClick={onLogoutClick} > Logout </button>
                         :
                         <button className={Style.loginBtn} onClick={handleDrawerOpen}> Login </button>
                      }
                  </StyledTabs>
                  <Typography className={classes.padding} />
              </div>
            </Toolbar>
        </AppBar>


        <Drawer
          className={classes.drawer}
          variant="temporary"
          anchor="right"
          open={open}
          classes={{ paper: classes.drawerPaper,}} >
              <div className={Style.drawerContainer}>
                  
                  <CloseIcon fontSize="small" onClick={handleDrawerClose} style={{ marginTop: "-150px", cursor: "pointer" }} />

                  {
                    mainView === "" &&
                      <MobileNumber setView={onMobileChange} propsNumber={getNumber} propsEmail={getEmail} propsPassword={getPassword} propsConfirmPassword={getConfirmPassword} /> 
                  } 

                  {
                    mainView === "OneTimePassword" && 
                      <OTPPage setView={onOTPChange} propsOTP={getOTP} />
                  }
                  {
                    mainView === "StudentOrTutor" && 
                      <StudentOrTutor setStudentView={onStudentRegister} setTutorView={onTutorRegister} />
                  }
                  {
                    mainView === "StudentRegister" &&
                      <StudentBasicInfo setView={onStudentEducationalInfo} fetchName={handleChangeName} fetchEmail={handleChangeEmail} fetchGender={handleChangeGender} fetchDOB={handleChangeDOB} fetchParentDOB={handleChangeParentDOB} />
                  } 

                  {
                    mainView === "StudentEducationalInfo" &&
                      <StudentEducationalInfo setView={onStudentBankInfo} fetchSchoolName={handleChangeSchoolName} fetchGrade={handleChangeGrade} fetchStream={handleChangeStream} />
                  }

                  {
                    mainView === "StudentBankInfo" &&
                      <StudentBankInfo setView={onComplete} fetchCardNumber={handleChangeCardNumber} fetchCardCVV={handleChangeCardCVV} fetchNameOnCard={handleChangeNameOnCard} fetchBank={handleChangeBank} />
                  }

                  {
                    mainView === "Complete" &&
                      <Complete pushToDB={sendDataToDB} />
                  }

                  {
                    mainView === "TutorRegister"
                    &&
                    <TutorBasicInfo setView={onChangeTutorEducation} fetchName={handleTutorName} fetchEmail={handleChangeTutorEmail} fetchGender={handleChangeTutorGender} fetchDOB={handleChangeTutorDOB} fetchProfilePic={handleProfilePic} />
                  }

                  {
                    mainView === "TutorEducationalInfo" 
                    &&
                        <TutorEducationalInfo 
                            setView={ onChangeTutorBankInfo } 
                            fetchSchoolName={handleCollegeName} 
                            fetchGrade={handleTutorDegree} 
                            fetchStream={handleTutorStream} 
                            fetchPosition={handlePosition} 
                            fetchDuration={handleDuration} 
                            fetchWorking={handleWorking} 
                            fetchDescription={handleDescription} 
                            fetchCourse={handleCourse}
                            fetchCourseDuration={handleCourseDuration}
                            fetchLevel={handleLevel}
                            fetchAvailability={handleAvailability}
                    />
                  }
                
                 {
                    mainView === "TutorBankInfo" &&
                      <StudentBankInfo setView={onChangeTutorComplete} fetchCardNumber={handleChangeCardNumber} fetchCardCVV={handleChangeCardCVV} fetchNameOnCard={handleChangeNameOnCard} fetchBank={handleChangeBank} />
                  }
                  {
                    mainView === "TutorComplete" &&
                      <Complete pushToDB={sendTutorDataToDB} />
                  }

                


               
              </div>
        </Drawer>

    </div>
  );
}

CustomizedTabs.propTypes = {
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
  { loginUser, logoutUser }
)(CustomizedTabs);