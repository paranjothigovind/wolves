import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo2.png'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Nav, Navbar, NavItem, NavLink } from 'react-bootstrap'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import img1 from '../assets/img/1.jpg'
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { Link, useHistory } from 'react-router-dom'

import axios from 'axios'

import { CardHeader, CardFooter, CardBody,
  CardTitle, Row, Col , CardText } from 'reactstrap';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import modalImg from '../assets/img/modalImg.png'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import CardTutorProfile from '../components/CardTutorProfile'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { response } from 'express';

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


export default function Dashboard() {
  const classes = useStyles();
  const history = useHistory();
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
  
  const [arrayCount, setArrayCount] = React.useState(null);

  // const async getTutorData = () => {
  //   axios.get('http://localhost:8000/tutor')
  //   .then(response => {
  //     console.log(response.data);
  //     // setArray(response.data)
  //   })
  // }

  useEffect(() => {
    axios.get('http://localhost:8000/tutor')
    .then(response => {
      // console.log(response.data);
      setArray(response.data)
      setArrayCount(response.data.length)
    })
  })

  const renderColumns = numCols => {
    // Arrays to track the rows and columns
    let cols = [];
    let rows = [];
    // Iterate over some data
      array.map((data, index) => {
      // Add another column
      cols.push(
        <div key={index} style={{ marginBottom:"50px" }} className="justify-content-left" >
            <CardTutorProfile 
              name={data.name}
              classes={data.classes}
              students={data.students}
              rating={data.rating}
              fans={data.fans}
              review={data.review}
              />
        </div>
      );
      // If the row is full, start a new one with fresh columns
      // if (index % 5 === 0) {
      //   rows.push(<Row key={rows.length}>{cols}</Row>);
      //   cols = [];
      // }
    })
    // Add an unfinished final row
    if (cols.length) {
      rows.push(<Row key={rows.length} >{cols}</Row>);
    }
    // Return the rows
    return rows;
  };



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
                >Login</button>
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
            <Typography gutterBottom className="mt-5" style={{ textAlign:"left", marginLeft:"16px", fontWeight:"700" }} variant="h6">
                Filters
            </Typography>

            <Divider variant="middle" />

            <Typography gutterBottom className="mt-4" style={{ textAlign:"left", marginLeft:"20px" }} variant="subtitle1">
                Educational Levels
            </Typography>
            <FormControl margin="none">
                <FormGroup>
                  <FormControlLabel
                      control={<Checkbox color="primary" size="small" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px" }}>  Elementary School </span> }
                      style={{ marginBottom:"0px" }}
                      
                  />
                  <FormControlLabel
                      control={<Checkbox color="primary" size="small" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px" }}>  Middle School </span> }
                      style={{ marginBottom:"0px" }}
                  />
                  <FormControlLabel
                      control={<Checkbox color="primary" size="small" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px" }}>  High School </span> }
                      style={{ marginBottom:"0px" }}
                  />
                  <FormControlLabel
                      control={<Checkbox color="primary" size="small" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px" }}>  College </span> }
                      style={{ marginBottom:"0px" }}
                  />
                </FormGroup>
            </FormControl>

            <Divider variant="middle" />

            <Typography gutterBottom className="mt-4" style={{ textAlign:"left", marginLeft:"20px" }} variant="subtitle1">
                Availabiliy
            </Typography>

            <div style={{ overflow:'hidden' }} >
                <div className="row" style={{ marginLeft:"40px" }}> 
                  <FormControlLabel
                      control={<Checkbox size="small" color="primary" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px", textAlign:'center' }}>Sunday </span> }
                      style={{ marginBottom:"0px" }}
                  />
                </div>
                <div className="row" style={{ marginLeft:"40px" }}> 
                  <FormControlLabel
                      control={<Checkbox size="small" color="primary" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px", textAlign:'center' }}>Monday </span> }
                      style={{ marginBottom:"0px" }}
                  />
                </div>
                <div className="row" style={{ marginLeft:"40px" }}> 
                  <FormControlLabel
                      control={<Checkbox size="small" color="primary" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px", textAlign:'center' }}>Tuesday </span> }
                      style={{ marginBottom:"0px" }}
                  />
                </div>
                <div className="row" style={{ marginLeft:"40px" }}> 
                  <FormControlLabel
                      control={<Checkbox size="small" color="primary" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px", textAlign:'center' }}>Wednesday </span> }
                      style={{ marginBottom:"0px" }}
                  />
                </div> 
                <div className="row" style={{ marginLeft:"40px" }}> 
                  <FormControlLabel
                      control={<Checkbox size="small" color="primary" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px", textAlign:'center' }}>Thursday </span> }
                      style={{ marginBottom:"0px" }}
                  />
                </div>
                <div className="row" style={{ marginLeft:"40px" }}> 
                  <FormControlLabel
                      control={<Checkbox size="small" color="primary" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px", textAlign:'center' }}>Friday </span> }
                      style={{ marginBottom:"0px" }}
                  />
                </div>
                <div className="row" style={{ marginLeft:"40px" }}> 
                  <FormControlLabel
                      control={<Checkbox size="small" color="primary" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px", textAlign:'center' }}>Saturday </span> }
                      style={{ marginBottom:"0px" }}
                  />
                </div>

                <Divider variant="middle" />

                <Typography gutterBottom className="mt-4" style={{ textAlign:"left", marginLeft:"20px" }} variant="subtitle1">
                    Class (master)
                </Typography>

                <div style={{ overflow:'hidden' }} >
                <div className="row" style={{ marginLeft:"40px" }}> 
                  <FormControlLabel
                      control={<Checkbox size="small" color="primary" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px", textAlign:'center' }}>Pre Alegbra </span> }
                      style={{ marginBottom:"0px" }}
                  />
                </div>
                <div className="row" style={{ marginLeft:"40px" }}> 
                  <FormControlLabel
                      control={<Checkbox size="small" color="primary" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px", textAlign:'center' }}>Algebra </span> }
                      style={{ marginBottom:"0px" }}
                  />
                </div>
                <div className="row" style={{ marginLeft:"40px" }}> 
                  <FormControlLabel
                      control={<Checkbox size="small" color="primary" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px", textAlign:'center' }}>Basic Mathematics </span> }
                      style={{ marginBottom:"0px" }}
                  />
                </div>
                <div className="row" style={{ marginLeft:"40px" }}> 
                  <FormControlLabel
                      control={<Checkbox size="small" color="primary" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px", textAlign:'center' }}>Geometry </span> }
                      style={{ marginBottom:"0px" }}
                  />
                </div> 
                <div className="row" style={{ marginLeft:"40px" }}> 
                  <FormControlLabel
                      control={<Checkbox size="small" color="primary" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px", textAlign:'center' }}>Pre Calculus </span> }
                      style={{ marginBottom:"0px" }}
                  />
                </div>
                <div className="row" style={{ marginLeft:"40px" }}> 
                  <FormControlLabel
                      control={<Checkbox size="small" color="primary" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px", textAlign:'center' }}>Physics</span> }
                      style={{ marginBottom:"0px" }}
                  />
                </div>
                <div className="row" style={{ marginLeft:"40px" }}> 
                  <FormControlLabel
                      control={<Checkbox size="small" color="primary" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px", textAlign:'center' }}>Chemistry </span> }
                      style={{ marginBottom:"0px" }}
                  />
                </div>
                <div className="row" style={{ marginLeft:"40px" }}> 
                  <FormControlLabel
                      control={<Checkbox size="small" color="primary" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px", textAlign:'center' }}>Proof Reading </span> }
                      style={{ marginBottom:"0px" }}
                  />
                </div>
                <div className="row" style={{ marginLeft:"40px" }}> 
                  <FormControlLabel
                      control={<Checkbox size="small" color="primary" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px", textAlign:'center' }}>English </span> }
                      style={{ marginBottom:"0px" }}
                  />
                </div>
                <div className="row" style={{ marginLeft:"40px" }}> 
                  <FormControlLabel
                      control={<Checkbox size="small" color="primary" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px", textAlign:'center' }}>Spanish </span> }
                      style={{ marginBottom:"0px" }}
                  />
                </div>
                <div className="row" style={{ marginLeft:"40px" }}> 
                  <FormControlLabel
                      control={<Checkbox size="small" color="primary" name="checkedA" />}
                      label={ <span style={{ fontSize:"14px", textAlign:'center' }}>Proof Others </span> }
                      style={{ marginBottom:"0px" }}
                  />
                </div>

            </div>
            

            


          </div>

        </div>
      </Drawer>
      <main className={classes.content}>
          {/* <div className="row">
              <div className="col-4">
                <CardTutorProfile />
              </div>
              <div className="col-4 text-left">
                <CardTutorProfile />
              </div>
          </div> */}
          <div style={{ display:"flex" , marginRight:"200px" }}>
            {/* <div className="row">
              <div className="col-3 text-left">
                <CardTutorProfile />
              </div>
              <div className="col-3 text-right" style={{ marginLeft:"100px" }}>
                <CardTutorProfile />
              </div>
              <div className="col-3" style={{ marginLeft:"100px" }}>
                <CardTutorProfile />
              </div>
            </div>
          </div>
          <div style={{ display:"flex" , marginRight:"200px", marginTop:50 }}>
            <div className="row">
              <div className="col-3 text-left">
                <CardTutorProfile />
              </div>
              <div className="col-3 text-center" style={{ marginLeft:"100px" }}>
                <CardTutorProfile />
              </div>
              <div className="col-3" style={{ marginLeft:"100px" }}>
                <CardTutorProfile />
              </div>
            </div> */}


            {/* {
              array.map((name, index) =>{
               return(
                <div key={index}>
                  <CardTutorProfile name={name.name}  />
                </div>
               )
              })
            } */}

          </div>
          {renderColumns(arrayCount)}
      </main>
      <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
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
                    defaultValue="Tiwari"
                    className={classes.textField}
                    helperText=""
                    margin="dense"
                    variant="outlined"
                    style={{ fontFamily: "'Poppins', sans-serif" }} 
                  />
                </div>
              </div>
              <Typography className={classes.customModalText2} gutterBottom style={{ fontFamily: "'Poppins', sans-serif" }} >
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

              </Typography>
              <Typography>
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
                    defaultValue="Shrivant"
                    className={classes.textField}
                    helperText=""
                    margin="dense"
                    variant="outlined"
                    style={{ fontFamily: "'Poppins', sans-serif" }} 
                  />
                </div>
              </div>
              <Typography className={classes.customModalText2} gutterBottom style={{ fontFamily: "'Poppins', sans-serif", marginTop: 10 }} >
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

              </Typography>
              <Typography className={classes.customModalText2} style={{ fontFamily: "'Poppins', sans-serif" }} >
                
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
            Book Now
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </div>
    
    
  );
}
