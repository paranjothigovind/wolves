import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/logo2.png'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Row, Col} from 'reactstrap';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import modalImg from '../../assets/img/modalImg.png'
import TextField from '@material-ui/core/TextField';
import CardTutorProfile from './CardTutorProfile'
import DashboardFilter from './DashboardFilter'
import store from '../../store'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, setTutor } from "../../actions/authActions";
import Qs from 'qs'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontFamily: "'Poppins', sans-serif"
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:'#ffffff'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    fontFamily: "'Poppins', sans-serif"
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
    fontFamily: "'Poppins', sans-serif",
    overflow:""
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(12)
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo2: {
    backgroundColor: 'transparent',
    float:"right",
    marginLeft: 'auto',
    height:"70px"
  },
  rootModal: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    width: "265px",
    height: "20%",
  },
  customModalText1: {
    width: "153px",
    margin:"auto",
    marginBottom:10,
    height: "28px",
    textAlign:"center",
    font: "normal normal bold 20px/30px Poppins",
    letterSpacing: '0px',
    color: '#3C4852',
    textTransform: 'capitalize',
    opacity: '1'
  },
  customModalText2: {
    width: "222px",
    height: "21px",
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontWeight:'medium',
    fontSize:'15px',
    font: 'normal normal medium 15px/23px Poppins',
    letterSpacing: '0px',
    color: '#3C4852',
    textTransform: 'capitalize',
    opacity: '1',
  } ,
  customTextFieldText: {
    width: "118px",
    height: "25px",
    opacity: '1',
  },
  customButton: {
    margin:"auto",
    width: "487px",
    height: "50px",
    background: "#226CD5 0% 0% no-repeat padding-box",
    borderRadius: "5px",
    opacity: "1",
  }

}));

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    '& > span': {
      maxWidth: 40,
      height: 10,
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
    opacity:0.7,
    fontSize: theme.typography.pxToRem(20),
    marginRight: theme.spacing(10),
    marginTop: theme.spacing(2),
    '&:focus': {
      opacity: 1,
      outline: 'none'
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
  media: {

  }
}))(MuiDialogActions);

// console.log(store.getState().tutor)

  //razor pay
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }
  
  const __DEV__ = document.domain === 'localhost'
  //


 function Dashboard( props) {

  const classes = useStyles();
  // const history = useHistory();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-10-05T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  const handleClickOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  const [array, setArray] = React.useState([]);
  const [studentArray, setStudentArray] = React.useState([]);
  const [imageArray, setImageArray] = React.useState([]);
  
  const [arrayCount, setArrayCount] = React.useState(null);
    
  const [currentStudent, setCurrentStudent] = React.useState([]);
  const [currentStudentID, setCurrentStudentID] = React.useState("");
  const [currentTutor, setCurrentTutor] = React.useState("");


  useEffect(() => {
    setTutorData();
    setStudentData();
  },[null])

  const setTutorData = (e) =>{
    axios.get('https://vts-1.herokuapp.com/tutor/filter?tutoringLevel='+selected+'&availability[]=&courseOffering=' )
    .then(response => {
      // console.log(response.data);
      setArray(response.data)
      setArrayCount(response.data.length)
    })
  }

  const setStudentData =() =>{
    axios.get('https://vts-1.herokuapp.com/student')
    .then( res => {
      setStudentArray(res.data)
      // console.log(res.data)
    } )
  }

  useEffect(()=> {
    studentArray.map(data => {
      if( props.auth.user.email === data.email ){
        setCurrentStudent(data)
        setCurrentStudentID(data._id)
      }
    })
    // console.log(currentStudentID)
  })

 

  const renderColumns = numCols => {
    let cols = [];
    let rows = [];
      array.map((data, index) => {
      cols.push(
        <div key={index} style={{ marginBottom:"50px" }} className="justify-content-left" >
            <CardTutorProfile 
              key={index}
              name={data.name}
              classes={data.classes}
              students={data.students}
              rating={data.rating}
              fans={data.fans}
              review={data.review}
              index={data._id}
              currentIndex={handleClickView}
              bookSession={handleBookSession}
              profilepic={data.imgData}
              currentStudentID = {currentStudentID}
              payNow = {displayRazorpay}
              />
        </div>
      );
    })

    if (cols.length) {
      rows.push(<Row key={rows.length} >{cols}</Row>);
    }
    return rows;
  };

  const onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser();
  };


  const handleClickView = (e) =>{
    store.dispatch(setTutor(e))
    console.log(e)
  }

  const handleBookSession = (e) =>{
    {
      array.map(data => {
        if( e === data._id ){
          setCurrentTutor(data)
        }
      })
    }
    setOpenModal(true)
    store.dispatch(setTutor(e))
    console.log(currentTutor.name)
  }



  

async function displayRazorpay(e) {
  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

  if (!res) {
    alert('Razorpay SDK failed to load. Are you online?')
    return
  }

  const data = await fetch('https://vts-1.herokuapp.com/razorpay', { method: 'POST' }).then((t) =>
    t.json()
  )

  {
    array.map(data => {
      if( e === data._id ){
        setCurrentTutor(data)
      }
    })
  }
  store.dispatch(setTutor(e))

  console.log(data)

  const options = {
    key: __DEV__ ? 'rzp_test_uGoq5ABJztRAhk' : 'PRODUCTION_KEY',
    currency: data.currency,
    amount: data.amount.toString(),
    order_id: data.id,
    name: 'Donation',
    description: 'Thank you for nothing. Please give us some money',
    image: 'https://vts-1.herokuapp.com/logo.svg',
    handler: function (response) {
      // alert(response.razorpay_payment_id)
      // alert(response.razorpay_order_id)
      // alert(response.razorpay_signature)

      const payment = {
        bookedTutors: e
      }

     axios.put('https://vts-1.herokuapp.com/student/bookedTutor/'+currentStudentID, payment )
      .then(res => console.log("Success"))
    },
    prefill: {
      name : props.auth.user.name ,
      email: props.auth.user.email,
      phone_number: '9899999999'
    }
  }
  const paymentObject = new window.Razorpay(options)
  paymentObject.open()
}
//

const [selected, setSelected] = React.useState("");

  const handleChecked = (e) =>{
    axios.get('https://vts-1.herokuapp.com/tutor/filter?tutoringLevel='+e+'&availability[]=&courseOffering=' )
    .then(response => {
      // console.log(response.data);
      setArray(response.data)
      setArrayCount(response.data.length)
    })
  }
  


  // const requestSession = () =>{
  //   const request = {
  //     tutorId: props.auth.tutor,
  //     class : "Science",
  //     duration : 10
  //   }
  //   axios.put('http://localhost:5000/student/transaction/'+ currentStudent._id , request)
  //     .then( res => alert(res.data) )
  // }


  const requestSession = () => {
    const studentID = {
      requestedStudents: currentStudentID
    }
    axios.put('https://vts-1.herokuapp.com/tutor/addRequestedStudent/'+ props.auth.tutor, studentID )
      .then( res => alert(res.data) )
  }


  const [ availability, setAvailability ] = React.useState([])

  const handleAvailability = (e) => {
    console.log(e)
    setAvailability(e)
    if( e != "" ){
      axios.get('https://vts-1.herokuapp.com/tutor/filter?tutoringLevel=&courseOffering=', {
        params: {
          availability: e
        },
        paramsSerializer: params => {
          return Qs.stringify(params)
        }
      })
      .then(response => {
        // console.log(response.data);
        setArray(response.data)
        setArrayCount(response.data.length)
      })
    }
    if( e.length === 0){
      axios.get('https://vts-1.herokuapp.com/tutor/filter?tutoringLevel=&availability[]=&courseOffering=' )
      .then(response => {
        // console.log(response.data);
        setArray(response.data)
        setArrayCount(response.data.length)
      })
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline /> 
      <AppBar color="default" position="fixed" className={classes.appBar} style={{ background:"#ffffff", boxShadow:"none", height:"70px" }}>
      <Toolbar style={{ height:"70px" }}>
      <img src={logo} alt='' style={{ height:"50px", marginLeft:"50px" }} />
            <div className={classes.demo2}>
                <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
                <img></img>
                <StyledTab label="Our Tutors" />
                <StyledTab label="Book Sessions" onClick={()=>setOpenModal(true)} />
                <Link to={'/student/classroom'} style={{ textDecoration:'none' }}> <StyledTab label=" My Classroom" /> </Link>
                <Link to={'#'} style={{ textDecoration:'none' }} > <StyledTab label="Contact us" /> </Link>
                <button
                    style={{ 
                        borderRadius:"5px",
                        backgroundColor:"#226CD5",
                        width:"100px",
                        height:"40px",
                        borderColor:"transparent",
                        color:"white",
                        marginTop:"20px"
                    }} 
                    onClick={onLogoutClick}
                >Logout</button>
                </StyledTabs>
                <Typography className={classes.padding} />
            </div>
            </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer} style={{ fontFamily: "'Poppins', sans-serif" }} >
            <DashboardFilter selected={handleChecked} sendAvailability={ handleAvailability } />
        </div>
      </Drawer>
      <main className={classes.content} >
          {renderColumns(arrayCount)}
      </main>

      <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={openModal} style={{ minWidth:"200px" }} >
        <DialogTitle id="customized-dialog-title" style={{padding:0}} onClose={handleClose}>
        <img src={modalImg} style={{width:"100%",height:"100%"}} alt='' />
        </DialogTitle>
        <DialogContent dividers>
          <Typography className={classes.customModalText1} style={{ fontFamily: "'Poppins', sans-serif" }} >Book a Session</Typography>
          <Row>
            <Col only={['sm', 'lg']}>
              <div className={classes.rootModal}>
                <div>
                  <TextField className={classes.customTextFieldText}
                    label="Student Name"
                    id="outlined-margin-dense"
                    defaultValue={props.auth.user.name}
                    multiline
                    className={classes.textField}
                    helperText=""
                    margin="dense"
                    variant="outlined"
                    style={{ fontFamily: "'Poppins', sans-serif" }} 
                  />
                </div>
              </div>
              {/* <Typography className={classes.customModalText2} gutterBottom style={{ fontFamily: "'Poppins', sans-serif" }} >
                Select Dates For Your Classes
              </Typography>
              <Typography>
                <Row>
                  <Col>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid container justify="space-around" style={{ fontFamily: "'Poppins', sans-serif" }} >
                        <KeyboardDatePicker
                          disableToolbar
                          variant="inline"
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="From"
                          label="From"
                          multiline
                          value={selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                      </Grid>
                    </MuiPickersUtilsProvider>                 
                  </Col>
                  <Col>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid container justify="space-around" style={{ fontFamily: "'Poppins', sans-serif" }} >
                        <KeyboardDatePicker
                          disableToolbar
                          variant="inline"
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="From"
                          label="To"
                          multiline
                          value={selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                      </Grid>
                    </MuiPickersUtilsProvider>   
                  
                  </Col>
                </Row>

              </Typography> */}
              <Typography style={{ marginTop: "30px" }} >
                <Row>
                  <Col md={3}>
                    <Typography className={classes.rootModal} style={{ fontFamily: "'Poppins', sans-serif" }} >
                        <span>
                          <TextField style={{width:120}}
                            label="Duration"
                            id="outlined-margin-dense"
                            defaultValue="hh:mm"
                            className={classes.textField}
                            helperText=""
                            multiline
                            margin="dense"
                            variant="outlined"
                          />
                        </span>
                    </Typography>                 
                  </Col>
                  <Col md={3}>
                  <Typography style={{marginLeft:80,fontFamily: "'Poppins', sans-serif", fontWeight:700 }} >
                      Price: RS.75,000/-
                  </Typography>
                  
                  </Col>
                </Row>

              </Typography>
            </Col>
            <Col>
              <div className={classes.rootModal}>
                <div>
                  <TextField
                    label="Tutor Name"
                    id="outlined-margin-dense"
                    defaultValue={currentTutor.name}
                    className={classes.textField}
                    helperText=""
                    multiline
                    margin="dense"
                    variant="outlined"
                    style={{ fontFamily: "'Poppins', sans-serif" }} 
                  />
                </div>
              </div>
              {/* <Typography className={classes.customModalText2} gutterBottom style={{ fontFamily: "'Poppins', sans-serif", marginTop: 10 }} >
                Class Information
              </Typography>
              <Typography style={{  }}>
                <Row>
                  <Col only={['sm', 'lg']}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid container justify="space-around" style={{ fontFamily: "'Poppins', sans-serif" }} >
                        <KeyboardDatePicker
                          disableToolbar
                          variant="inline"
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="From"
                          label="From"
                          multiline
                          value={selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                      </Grid>
                    </MuiPickersUtilsProvider>                 
                  </Col>
                  <Col>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid container justify="space-around" style={{ fontFamily: "'Poppins', sans-serif" }} >
                        <KeyboardDatePicker
                          disableToolbar
                          variant="inline"
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="From"
                          label="To"
                          multiline
                          value={selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                      </Grid>
                    </MuiPickersUtilsProvider>   
                  
                  </Col>
                </Row>

              </Typography> */}
              <Typography className={classes.customModalText2} style={{ fontFamily: "'Poppins', sans-serif", marginTop:"30px" }} >
                
                  Share on instagram and facebook to get discount
              </Typography>
            </Col>
          </Row>
          {/* <Typography className={classes.customModalText2}>
            Select Dates For Your Classes
          </Typography> */}
        </DialogContent>
        <DialogActions>
        <Button className={classes.customButton} variant="contained" onClick={handleClose} color="primary" style={{ marginTop:"20px", marginBottom:"20px",fontFamily: "'Poppins', sans-serif", fontSize:16 }} disableElevation>
          <a
					className="App-link"
          // onClick={displayRazorpay}
          onClick={requestSession}
					target="_blank"
          rel="noopener noreferrer"
				  >
          Request Session</a>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>


  
    
    
  );
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);