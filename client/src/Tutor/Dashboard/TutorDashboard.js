import React, { useEffect, useState } from 'react'
import AppBar from '../../components/StudAppBar'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import '../../assets/css/common.css'
import Style from './TutorDashboard.module.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import pendingReq from '../../assets/img/pending_request.png'
import classBg from '../../assets/img/classBg.jpg'
import Footer from '../../components/Footer'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, setCurrentUser, setTutor } from "../../actions/authActions";
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      fontFamily: "'Poppins', sans-serif",
      marginLeft: 160
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    activityBtn:{
        borderRadius: 10,
        borderColor: 'transparent',
        boxShadow: "0px 3px 6px #00000029",
        width: 258,
        fontWeight:500,
        height: 56,
        fontSize:20,
        backgroundColor:'transparent',
        fontFamily: "'Poppins', sans-serif",
        "&:hover, &:focus":{
            background:'#226cd5',
            color:'#ffffff'
          }
    },
    btnContainer:{
        marginTop: 60
    },
    gridLeft:{
        textAlign:'left'
    },
    tableContainer:{
        marginLeft:"160px",
        marginRight:"160px",
        marginTop:"100px"
    },
    Card:{
        maxWidth: 400,
        boxShadow:'0px 3px 12px #00000029',
        padding: 15,
        borderRadius: 9,
        marginTop:20
    },
    CardTwo:{
        width: 301,
        height: 332,
        boxShadow:'0px 3px 12px #00000029',
        borderRadius: 9,
        marginTop: 30
    },
    cardheader:{
        font: "normal normal bold 16px Poppins",
        textAlign:'left'
    },
    CardLabel:{
        backgroundColor:'#eaeaea',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize:13
    },
    CardContent:{
        textAlign:'left',
        opacity: 0.5,
        marginTop: 10
    },
    tableContainer:{
        marginRight:"150px",
        marginTop:"30px"
    }
  }));

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  function createDataTwo(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Satyam Tiwari', '12:05:60 AM to 01:56:00 PM', '5 Months', 'Awesome Experience in the Class', 'Trigonometric Algebra learn from A to Z'),
    createData('Paranjothi', '12:05:60 AM to 01:56:00 PM', '5 Months', 'Awesome Experience in the Class', 'Trigonometric Algebra learn from A to Z'),
    createData('Vishal', '12:05:60 AM to 01:56:00 PM', '5 Months', 'Awesome Experience in the Class', 'Trigonometric Algebra learn from A to Z'),
  ];

  const rowsTwo = [
    createData('Satyam Tiwari', '24 Sept, 20 to 30 Oct, 20', '2 Months', '40,000', 'Trigonometric Algebra learn from A to Z'),
    createData('Paranjothi', '24 Sept, 20 to 30 Oct, 20', '2 Months', '40,000', 'Trigonometric Algebra learn from A to Z'),
    createData('Vishal', '24 Sept, 20 to 30 Oct, 20', '2 Months', '40,000', 'Trigonometric Algebra learn from A to Z'),
  ];



const TutorDashboard = (props) => {

    const classes = useStyles();

    const [display, setDisplay] = useState("activity");

    const [activity, setActivity] = useState("true");

    const [payment, setPayment] = useState("");

    const [calender, setCalender] = useState("");

    const [ tutorData, setTutorData ] = useState([]);
    const [ studentData, setStudentData ] = useState([]);
    const [ currentTutorID, setCurrentTutorID ] = useState("");
    const [ requestedStudent, setRequestedStudent ] = useState([]);



    useEffect(()=> {
        axios.get('https://vts-1.herokuapp.com/tutor')
            .then(res => {
                setTutorData(res.data)
            })

        axios.get('https://vts-1.herokuapp.com/student')
            .then(res => {
                setStudentData(res.data)
            })
    },[])

    useEffect(()=> {
        tutorData.map(data => {
            if( props.auth.user.email === data.email ){
                setCurrentTutorID(data._id)
                axios.get('https://vts-1.herokuapp.com/tutor/getRequestedStudent/'+ data._id)
                .then( res =>  {
                    setRequestedStudent(res.data)
                })    
            }
        })   
    })


    const accept = (e) => {
        const accepted ={
            bookedTutors: currentTutorID
        }
        axios.put('https://vts-1.herokuapp.com/student/bookedTutor/'+ e , accepted )
            .then( res => alert(res.data) )

        const bookedStudent = {
            bookedStudents: e
        }
        axios.put('https://vts-1.herokuapp.com/tutor/bookedStudent/' + currentTutorID , bookedStudent)
            .then( response => console.log(response.data))
            
        const declined = {
            requestedStudents: e
        }
        axios.put('https://vts-1.herokuapp.com/tutor/removeRequestedStudent/'+ currentTutorID, declined)
            .then(res => alert(res.data))
        
    }

    const decline = (e) => {
        const declined = {
            requestedStudents: e
        }
        axios.put('https://vts-1.herokuapp.com/tutor/removeRequestedStudent/'+ currentTutorID, declined)
            .then(res => alert(res.data))
    }


    return(
        <div>
        <div className={classes.root}>
            <AppBar />

            <div className="row">
                <div className="col-md-5">
                    <h1 className="welcomeHeader"> Welcome, Satyam ! </h1>
                </div>
            </div>

          

           <div className={classes.btnContainer}>

                <div className="row">
                    <div className=" col-lg-2 col-md-3 text-left">
                        <button active className={Style.activityBtn}  onClick={()=> setDisplay("activity") } >My Activity</button>
                    </div>
                    <div className="col-lg-2 col-md-3 text-left">
                        <button className={Style.activityBtn} onClick={()=> setDisplay("payment") } >Past Payment</button>
                    </div>
                    <div className="col-lg-2 col-md-3 text-left">
                        <button className={Style.activityBtn} onClick={()=> setDisplay("calender") }> Calender </button>
                    </div>
                </div>
           </div>

          
           {
               display === "activity" ? 
                    <div>
                        <div className="row">
                            <div className="col-2 text-left mt-5">
                                <h4> Pending Classes </h4>
                            </div>
                        </div>

                        {/* {
                            studentData.filter( filter => {
                                requestedStudent.map( req => {
                                    if( req === filter._id ){
                                        return req
                                    }
                                } )
                            } ).map((data, index) => {
                              return(
                                  <div>
                                      {data.name}
                                  </div>
                              )
                            })
                        }
             */}
                       {
                           requestedStudent.map( req => {
                               return(
                                   <div>
                                       {
                                           studentData.filter( filter => filter._id === req ).map( (data, index) => {
                                               return(
                                                <Card className={classes.Card} style={{ display: "flex" }} >
                                                    <div className="row">
                                                        <div className="col-3">
                                                            <img src={pendingReq} alt='' style={{ width:"70px" }} />
                                                        </div>
                                                        <div className="col-5" style={{ textAlign:"left", paddingRight:"0px" }}>
                                                            <p className={Style.pendingReqText} style={{ fontWeight:"800", fontSize:"16px" }} > {data.name} </p>
                                                            <p className={Style.pendingReqText}>Class: Trignometry</p>
                                                            <p className={Style.pendingReqText}>Time: 12:56 AM</p>
                                                            <p className={Style.pendingReqText}>Duration: 3 Months.</p>
                                                        </div>
                                                        <div className="col-3 text-left" style={{ paddingLeft:"0px" }}>
                                                            <button className={Style.pendingReqAcceptBtn} value={data._id}  onClick={e => accept(e.target.value)} > Accept </button>
                                                            <button className={Style.pendingReqRejectBtn} value={data._id} onClick={e => decline(e.target.value)} > Reject </button>
                                                        </div>
                                                    </div>
                                                </Card>
                                               )
                                           } )
                                       }
                                   </div>
                               )
                           } )
                       }

                      


                        <div className="row">
                            <div className="col-2 text-left mt-5">
                                <h4> Pending Requests </h4>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-4">
                                <Card className={classes.CardTwo} >
                                    <CardActionArea>
                                        <img src={classBg} alt='' style={{ height:"170px" }} />
                                        <CardContent>
                                            <h4 className={classes.cardheader} > Trigonometric Algebra: Learn from A to Z. </h4>
                                            <Grid container>
                                                <Grid item className={classes.CardLabel}> ENGLISH </Grid>
                                                <Grid  item className={classes.CardLabel} style={{ marginLeft:"30px" }}> FRENCH </Grid>
                                            </Grid>
                                            <div className={classes.CardContent}>
                                                <h6> Lesson 11: Saturday, 12:05:60 AM </h6>
                                                <h6> Arti Chhawari </h6>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-2 text-left mt-5">
                                <h4> Past Students </h4>
                            </div>
                        </div>

                        <div className={classes.tableContainer}>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead style={{ color:"#000000", borderRadius:"10px", borderRightColor:" solid #000000", boxShadow:"0px 3px 6px #00000029", marginBottom:"100px" }} >
                                        <TableRow className={classes.tableHead}>
                                            <TableCell>Student Name</TableCell>
                                            <TableCell align="left" style={{ paddingLeft:"60px" }}>Class Time</TableCell>
                                            <TableCell align="left">Duration</TableCell>
                                            <TableCell align="left"  style={{ paddingLeft:"70px" }}>FeedBack</TableCell>
                                            <TableCell align="left"  style={{ paddingLeft:"85px" }}>Tutor&nbsp;Course</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                    {rows.map((row) => (
                                        <TableRow style={{ borderRadius:"10px", boxShadow:"0px 3px 6px #00000029", borderSpacing:"100px 30px !important", borderCollapse:"separate !important", height:"80px" }} key={row.name}>
                                        <TableCell  component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="left">{row.calories}</TableCell>
                                        <TableCell align="left">{row.fat}</TableCell>
                                        <TableCell align="left">{row.carbs}</TableCell>
                                        <TableCell align="left">{row.protein}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
               :null
           }


           {
               display === 'payment' ? 
               
               <div> 
                    <div className={classes.btnContainer}>

                        <div className="row ml-30">
                            <div className=" col-lg-2 col-md-3 text-left">
                                <div className={Style.paymentBox}> 
                                    <p style={{ padding:"20px", fontSize:"20px" }}> Total Classes: <span style={{ fontWeight: "1000", fontSize:"20px" }}> <br/> 100 </span> </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 text-left">
                            <div className={Style.paymentBox}> 
                                    <p style={{ padding:"20px", fontSize:"20px" }}> Total Amount Earned: <span style={{ fontWeight: "1000", fontSize:"20px" }}> <br/> ₹ 5,40,000 </span> </p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 text-left">
                            <div className={Style.paymentBox}> 
                                    <p style={{ padding:"20px", fontSize:"20px" }}> Total Hours: <span style={{ fontWeight: "1000", fontSize:"20px" }}> <br/> 45,000 </span> </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-2 text-left mt-5">
                            <h4> Past Students </h4>
                        </div>
                    </div>

                    <div className={classes.tableContainer}>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead style={{ color:"#000000", borderRadius:"10px", borderRightColor:" solid #000000", boxShadow:"0px 3px 6px #00000029", marginBottom:"100px" }} >
                                        <TableRow className={classes.tableHead}>
                                            <TableCell style={{ fontSize:"18px" }} >Student Name</TableCell>
                                            <TableCell align="left" style={{ paddingLeft:"60px", fontSize:"18px" }}>Class Time</TableCell>
                                            <TableCell align="left" style={{ fontSize:"18px" }} >Duration</TableCell>
                                            <TableCell align="center"  style={{ paddingLeft:"20px",fontSize:"18px" }}>FeedBack</TableCell>
                                            <TableCell align="center"  style={{ paddingLeft:"15px",fontSize:"18px" }}>Tutor&nbsp;Course</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                    {rowsTwo.map((row) => (
                                        <TableRow style={{ borderRadius:"10px", boxShadow:"0px 3px 6px #00000029", borderSpacing:"100px 30px !important", borderCollapse:"separate !important", height:"80px" }} key={row.name}>
                                        <TableCell  component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="left" style={{ color:"#367ad9" }}>{row.calories}</TableCell>
                                        <TableCell align="left" >{row.fat}</TableCell>
                                        <TableCell align="center"><h6 style={{ fontWeight:"900px" }}>₹ {row.carbs}</h6></TableCell>
                                        <TableCell align="center">{row.protein}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>

               </div>
               
               :null
           }

           {
               display === 'calender' ? 
               
               <div style={{ marginRight:"160px", marginTop:"100px" }}>

                    {/* <button className="buttonSmall" style={{ width: "300px" }} onClick={event =>  window.location.href='https://meet.jit.si/DefiniteRuinsCatchMoreover'} > Start Class </button> */}
                    {/* <FullCalendar
                        plugins={[ dayGridPlugin ]}
                        initialView="dayGridMonth"
                        style={{ height:"300px" }}
                    /> */}
                    <iframe src="https://calendar.google.com/calendar/embed?src=praveendaniel107%40gmail.com&ctz=Asia%2FKolkata" style={{border: 0, width:"80vw", height: "70vh", frameBorder: 0, scrolling: "no"}}></iframe>
                </div>
               
               :null
           }

        </div>
        <Footer style={{ width:"100%" }} />
        </div>
    )
}

TutorDashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(TutorDashboard);