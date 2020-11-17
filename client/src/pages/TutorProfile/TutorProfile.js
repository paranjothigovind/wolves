import React, { useEffect, useState } from 'react'
import AppBar from '../../components/StudAppBar'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import '../../assets/css/common.css'
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
import Style from  '../../Tutor/Dashboard/TutorDashboard.module.css'
import play from '../../assets/img/play.png'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Axios from 'axios'
import Carousel from 'react-elastic-carousel'


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
        marginTop:"200px"
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

    const { user } = props.auth;

    const classes = useStyles();

    const [studentArray, setStudentArray] = useState([]);

    const [upcomingSession, setUpcomingSession] = useState([]);

    const [currentUserData, setCurrentUserData] = useState([]);

    useEffect(()=> {
        Axios.get('https://vts-1.herokuapp.com/student')
            .then(res => setStudentArray(res.data))
    })

    useEffect(()=> {
        studentArray.map(data => {
            if( props.auth.user.email === data.email ){
                Axios.get('https://vts-1.herokuapp.com/student/upcomingSession/'+ data._id )
                    .then( response => setUpcomingSession(response.data) )
            }
        })
    })

    // useEffect(()=> {
    //     Axios.get('http://localhost:5000/student/upcomingSession/')
    // })



    return(
        <div>
        <div className={classes.root}>
            <AppBar />

            <div className="row" style={{ marginTop:"100px" }}>
                <div className="col-md-5 text-left">
                    <h1 className="welcomeHeader" style={{ fontWeight:"900" }}> Welcome,  {user.name.split(" ")[0]} </h1>
                </div>
            </div>

           
            <div className="row">
                <div className="col-2 text-left mt-5">
                    <h4 style={{ fontWeight:"900" }}> Upcoming Class </h4>
                </div>
            </div>

            <Carousel itemsToShow={4} showArrows={false} itemPadding={[50, 50]} style={{ height: "400px", marginBottom: "100px", transform: "translateX(-50px)" }} enableSwipe >
                {
                    upcomingSession.map((data, index) => {
                        return(
                           
                          
                            <Card className={classes.CardTwo} >
                                <CardActionArea>
                                    <img src={classBg} alt='' style={{ height:"170px" }} />
                                    <CardContent>
                                        <h4 className={classes.cardheader} > Trigonometric Algebra: Learn from A to Z. </h4>
                                        {/* <Grid container>
                                            <Grid item className={classes.CardLabel}> ENGLISH </Grid>
                                            <Grid  item className={classes.CardLabel} style={{ marginLeft:"30px" }}> FRENCH </Grid>
                                        </Grid> */}
                                        <div className={classes.CardContent}>
                                            <h6> Lesson 11: Saturday, 12:05:60 AM </h6>
                                            <h6> {data.date} </h6>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                            
                        )
                    })
                }
            </Carousel>

            <div className="row">
                <div className="col-2 text-left mt-5">
                    <h4 style={{ fontWeight:"900" }}> Past Sessions </h4>
                </div>
                <div className="col-4 text-right">

                </div>
            </div>
          

                        


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
