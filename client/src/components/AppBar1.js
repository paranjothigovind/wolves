import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Toolbar } from '@material-ui/core';
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
    fontSize: theme.typography.pxToRem(20),
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

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [mobileNum, setVMobileNum] = React.useState(true);
  const [otp, setOtp] = React.useState(false);
  const [studOrTutor, setStudOrTutor] = React.useState(false);
  const [joinAsTutor, setJoinAsTutor] = React.useState(false);
  const [EducationAsTutor, setEducationAsTutor] = React.useState(false);
  const [jobExperienceAsTutor, setJobExperienceAsTutor] = React.useState(false);
  const [completed, setCompleted] = React.useState(false);
  const [age, setAge] = React.useState('');

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

    const handleChangeAge = (event) => {
      setAge(event.target.value);
    };


  return (
    <div className={classes.root}>
        <AppBar color="default" position="fixed" style={{ background:"#ffffff", boxShadow:"none", height:"70px" }}>
            <Toolbar style={{ height:"70px" }}>
            <img src={logo} alt='' style={{ height:"50px", marginLeft:"50px" }} />
            <div className={classes.demo2}>
                <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
                <img></img>
                <StyledTab label="Our Tutors" />
                <StyledTab label="Book Sessions" />
                <StyledTab label="Contact us" />
                <button
                    style={{ 
                        borderRadius:"5px",
                        backgroundColor:"#226CD5",
                        width:"100px",
                        height:"40px",
                        borderColor:"transparent",
                        color:"white",
                        marginTop:"12px"
                    }} 
                    onClick={handleDrawerOpen} 
                >Login</button>
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
                classes={{
                paper: classes.drawerPaper,
                }}
            >
              <div style={{ marginLeft:"30px" }}>
               
                {
                    mobileNum ? 
                    
                    <div>
                       <img src={closeBtn} alt='' style={{ width:"15px", marginTop:"70px" }}  onClick={handleDrawerClose} />
                        <h2 style={{ fontWeight:"900", marginTop:"50px" }}> Join VTS </h2>
                        <h5> Or <span style={{ color:"#367ad9", fontWeight:"900" }}> login to your account </span> </h5>
                       <TextField id="  outlined-standard-full-width" label="Enter Mobile No" variant="outlined" margin="normal" fullWidth style={{ marginTop:"30px", margin:"8", right:"10px" }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start" label="Hello">
                                  <img src={India} style={{ height:"20px" }} />
                                  <h6 style={{ paddingTop:"10px", paddingLeft:"10px" }}> +91 </h6>
                                  <ArrowForwardIcon className="arrow" onClick={()=> setVMobileNum(false) || setOtp(true) || setStudOrTutor(false) || setJoinAsTutor(false) || setEducationAsTutor(false) || setJoinAsTutor(false) || setCompleted(false)  } />
                              </InputAdornment>
                              ),
                            }}
                
                        >
                        </TextField>
                <div className="row space-between">
                  <div className="col-6">
                  <button
                    style={{ 
                        borderRadius:"5px",
                        backgroundColor:"#226CD5",
                        width:"100px",
                        height:"40px",
                        borderColor:"transparent",
                        color:"white",
                        marginTop:"12px"
                    }} 
                    onClick={()=> setVMobileNum(false) || setOtp(true) || setStudOrTutor(false) || setJoinAsTutor(false) || setEducationAsTutor(false) || setJobExperienceAsTutor(false) || setCompleted(false)  }
                    
                >Login</button>
                  </div>
                  <div className="col-6">
                      <p style={{ marginTop:"10px", color:"#226CD5", fontWeight:"700" }} > Login With Email</p>
                  </div>
                </div>

                    </div>
                    
                    :null
                }


                {
                  otp ? 
                  
                 <div>  
                  
                   <img src={closeBtn} alt='' style={{ width:"15px", marginTop:"70px" }}  onClick={handleDrawerClose} />
                <h2 style={{ fontWeight:"900", marginTop:"50px" }}> Join VTS </h2>
                <h5> Or <span style={{ color:"#367ad9", fontWeight:"900" }}> login to your account </span> </h5>

                <TextField id="  outlined-standard-full-width" label="Please Enter OTP" variant="outlined" margin="normal" fullWidth style={{ marginTop:"30px", margin:"8", right:"10px" }}
                
                 
                />
                <div className="row space-between">
                  <div className="col-6">
                  <button
                    style={{ 
                        borderRadius:"5px",
                        backgroundColor:"#226CD5",
                        width:"100px",
                        height:"40px",
                        borderColor:"transparent",
                        color:"white",
                        marginTop:"12px"
                       
                    }} 
                    onClick={()=> setVMobileNum(false) || setOtp(false) || setStudOrTutor(true) }
                >Login</button>
                  </div>
                  <div className="col-6">
                      <p style={{ marginTop:"10px", color:"#226CD5", fontWeight:"700" }} > Login With Email</p>
                  </div>
                </div>
                   </div>
                  :null
                }

                {
                  studOrTutor ? 
                    <div> 
                        <img src={closeBtn} alt='' style={{ width:"15px", marginTop:"70px" }}  onClick={handleDrawerClose} />
                        <h6 style={{ fontWeight:"900", fontSize:"28px", marginTop:"30px" }}> Perfect! </h6>
                       <div className="row"> 
                        <div className="col-11">
                        <p style={{ fontWeight:"700", color:"#226CD5" }}> Let's Create your profile </p>
                        <button

                        className="buttonAppBar"
                       
                      >Join As Student</button>
                        </div>
                       </div>

                       <div className="row"> 
                        <div className="col-11">
            
                          <button
                            className="buttonAppBar"
                            onClick={()=> setVMobileNum(false) || setOtp(false) || setStudOrTutor(false) || setJoinAsTutor(true) || setEducationAsTutor(false) || setJobExperienceAsTutor(false) || setCompleted(false)  }
                          >Join As Tutor</button>
                        </div>
                       </div>



                    </div>
                  :null
                }


                {
                  joinAsTutor ? 
                  
                    <div> 
                        <img src={closeBtn} alt='' style={{ width:"15px", marginTop:"70px" }}  onClick={handleDrawerClose} />
                        <h6 style={{ fontWeight:"900", fontSize:"28px", marginTop:"30px" }}> Perfect! </h6>
                        <p style={{ fontWeight:"700", color:"#226CD5" }}> Let's Create your profile </p>
                        <p style={{ fontWeight:"700", color:"#9BAFBF" }}> Let's go ahead with your basic information </p>
                        <div className="row">
                          <div className="col-11"> 
                            <TextField id="  outlined-standard-full-width" label="Enter your Name" variant="outlined" margin="normal" fullWidth style={{ marginTop:"30px", left:"0%",  right:"10px" }} />
                            <TextField id="  outlined-standard-full-width" label="Enter your Email" variant="outlined" margin="normal" fullWidth style={{  margin:"0px", left:"0%", right:"10px" }} />
                            <FormControl variant="outlined" className={classes.formControl}>
                              <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={age}
                                fullWidth
                                onChange={handleChangeAge}
                                label="Select your gender"
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Male</MenuItem>
                                <MenuItem value={20}>Female</MenuItem>
                              </Select>
                            </FormControl>
                            <FormControl variant="outlined" className={classes.formControl}>
                              <InputLabel id="demo-simple-select-outlined-label">Date of Birth</InputLabel>
                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={age}
                                fullWidth
                                onChange={handleChangeAge}
                                label="Select your date of birth"
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Male</MenuItem>
                                <MenuItem value={20}>Female</MenuItem>
                              </Select>
                            </FormControl>
                            <button className="buttonSmall"
                             onClick={()=> setVMobileNum(false) || setOtp(false) || setStudOrTutor(false) || setJoinAsTutor(false) || setEducationAsTutor(true) || setJobExperienceAsTutor(false) || setCompleted(false)  }
                            > Next </button>
                          </div>
                        </div>
                    </div>
                  
                  :null
                }

                {
                  EducationAsTutor ? 
                  
                    <div> 
                        <img src={closeBtn} alt='' style={{ width:"15px", marginTop:"70px" }}  onClick={handleDrawerClose} />
                        <h6 style={{ fontWeight:"900", fontSize:"28px", marginTop:"30px" }}> Perfect! </h6>
                        <p style={{ fontWeight:"700", color:"#226CD5" }}> Let's Create your profile </p>
                        <p style={{ fontWeight:"700", color:"#9BAFBF" }}> Let's go ahead with your education </p>
                        <div className="row">
                          <div className="col-11"> 
                            <TextField id="  outlined-standard-full-width" label="Enter your college name" variant="outlined" margin="normal" fullWidth style={{ marginTop:"30px", left:"0%",  right:"10px" }} />
                            <FormControl variant="outlined" className={classes.formControl}>
                              <InputLabel id="demo-simple-select-outlined-label">Select your stream</InputLabel>
                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={age}
                                fullWidth
                                onChange={handleChangeAge}
                                label="Select your gender"
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                               
                              </Select>
                            </FormControl>
                            <FormControl variant="outlined" className={classes.formControl}>
                              <InputLabel id="demo-simple-select-outlined-label">Select your Degree</InputLabel>
                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={age}
                                fullWidth
                                onChange={handleChangeAge}
                                label="Select your date of birth"
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                              
                              </Select>
                            </FormControl>
                            <TextField id="outlined-standard-full-width" label="" variant="outlined" margin="normal" style={{ marginTop:"30px", left:"0px", right:"10px" }}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start" label="Hello">
                                      <AddCircleIcon />
                                      <div style={{ textAlign:"center", width:"100%" }}> <p style={{ paddingTop:"15px", textAlign:"center", marginLeft:"20px", color:"#9BAFBF" }}> Add More Education </p> </div>
                                  </InputAdornment>
                                  ),
                                }} />
                           
                           
                          </div>
                        </div>
                        <button className="buttonSmall"
                         onClick={()=> setVMobileNum(false) || setOtp(false) || setStudOrTutor(false) || setJoinAsTutor(false) || setEducationAsTutor(false) || setJobExperienceAsTutor(true) || setCompleted(false)  }
                        > Next </button>
                    </div>
                  
                  :null
                }

{
                  jobExperienceAsTutor ? 
                  
                    <div> 
                        <img src={closeBtn} alt='' style={{ width:"15px", marginTop:"70px" }}  onClick={handleDrawerClose} />
                        <h6 style={{ fontWeight:"900", fontSize:"28px", marginTop:"30px" }}> Perfect! </h6>
                        <p style={{ fontWeight:"700", color:"#226CD5" }}> Let's Create your profile </p>
                        <p style={{ fontWeight:"700", color:"#9BAFBF" }}> Let's go ahead with your job experience </p>
                        <div className="row">
                          <div className="col-11"> 
                          <TextField id="outlined-standard-full-width" label="" variant="outlined" margin="normal" style={{ marginTop:"30px", left:"0px", right:"10px" }}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start" label="Hello">
                                      <AddCircleIcon />
                                      <div style={{ textAlign:"center", width:"100%" }}> <p style={{ paddingTop:"15px", textAlign:"center", marginLeft:"20px", color:"#9BAFBF" }}> Add More Education </p> </div>
                                  </InputAdornment>
                                  ),
                                }} />
                           
                            <TextField id="  outlined-standard-full-width" label="Enter your organisation name" variant="outlined" margin="normal" fullWidth style={{  left:"0%",  right:"10px" }} />
                            <FormControl variant="outlined" className={classes.formControl} style={{ marginTop:"20px" }}>
                              <InputLabel id="demo-simple-select-outlined-label"> select your Position</InputLabel>
                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={age}
                                fullWidth
                                onChange={handleChangeAge}
                                label="Select your gender"
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                               
                              </Select>
                            </FormControl>
                            <FormControl variant="outlined" className={classes.formControl} style={{ marginTop:"30px" }} >
                              <InputLabel id="demo-simple-select-outlined-label">Select your duration</InputLabel>
                              <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={age}
                                fullWidth
                                onChange={handleChangeAge}
                                label="Select your date of birth"
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                              
                              </Select>
                            </FormControl>
                            
                            <FormControlLabel
                              style={{ marginTop:"5px" }}
                              control={
                                <Checkbox
                                  icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                  checkedIcon={<CheckBoxIcon fontSize="small" />}
                                  name="checkedI" color="#226CD5"
                                  style={{ marginLeft:"1px" }}
                                />
                              }
                              label="Currently working here"
                            />
                             <TextField id="  outlined-standard-full-width" label="Description (Optional)" variant="outlined" margin="normal" fullWidth style={{  left:"0%",  right:"10px" }} />
                             <TextField id="outlined-standard-full-width" label="" variant="outlined" margin="normal" fullWidth  style={{ marginTop:"20px", left:"0px", right:"10px" }}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start" label="Hello">
                                      <AddCircleIcon />
                                      <div style={{ textAlign:"center", width:"100%" }}> <p style={{ paddingTop:"15px", textAlign:"center", marginLeft:"20px", color:"#9BAFBF" }}> Add More Job </p> </div>
                                  </InputAdornment>
                                  ),
                                }} />
                          </div>
                        </div>
                        <button className="buttonSmall"
                         onClick={()=> setVMobileNum(false) || setOtp(false) || setStudOrTutor(false) || setJoinAsTutor(false) || setEducationAsTutor(false) || setJobExperienceAsTutor(false) || setCompleted(true)  }
                        > Next </button>
                    </div>
                  
                  :null
                }


                {
                  completed ? 
                  
                  <div> 
                    <img src={closeBtn} alt='' style={{ width:"15px", marginTop:"70px" }}  onClick={handleDrawerClose} />
                    <h6 style={{ fontWeight:"900", fontSize:"28px", marginTop:"30px" }}> Yuppiiee! </h6>
                    <p style={{ fontWeight:"700", color:"#9BAFBF" }}> Your profile is now completed. </p>
                    <button className="buttonSmall"> Let's Go! </button>


                  </div>
                  
                  :null
                }



                
                
              </div>
            </Drawer>

    </div>
  );
}