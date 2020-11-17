import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { useHistory } from 'react-router-dom'
import img1 from '../../assets/img/1.jpg'
import '../../assets/css/common.css'
import Grid from '@material-ui/core/Grid';
import AppBar from '../../components/StudAppBar'
import play from '../../assets/img/play.png'
import classBg from '../../assets/img/classBg.jpg'
import Style from  '../../Tutor/Dashboard/TutorDashboard.module.css'
import Footer from '../../components/Footer'
import CardTutorProfile from '../../components/dashboard/CardTutorProfile'
import axios from 'axios'
import Dashboard from '../../components/dashboard/Dashboard'
import store from '../../store'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, setTutor } from "../../actions/authActions";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:"130px",
    fontFamily: "'Poppins', sans-serif",
  },
  content:{
    justify:'center'
  },
  Card: {
    maxWidth: '1800px',
    boxShadow:"0px 3px 12px #0000001A",
    borderRadius: 12,
    justifyContent:"center",
    fontFamily: "'Poppins', sans-serif",
    padding:"20px"
  },
  CardMedia: {
    height: 100,
    borderRadius: 10
  },
  CardNumber:{
    fontWeight: 900,
    fontSize: 15
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
content:{
  marginLeft:160
}

}));





function TutorExpand(props) {
  const classes = useStyles();
//   const history = useHistory();
  
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-10-05T21:11:54'));
  const [currentTutorId, setCurrentTutorId] = React.useState('');
  const [tutorData, setTutorData] = React.useState([]);
  const [currentTutorData, setCurrentTutorData] = React.useState([]);

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
      axios.get('https://vts-1.herokuapp.com/tutor')
      .then(res => 
            setTutorData(res.data)
            // console.log(res.data)
       )
       setCurrentTutorId(props.location.pathname.slice(21,45))
  },[])


  return (
    <div className={classes.root}>
      <AppBar />
       
       <Grid container justify="center" >
          
          {
              tutorData.map(data => 
                   (
                       currentTutorId === data._id
                       &&
                       <Card className={classes.Card} style={{ width:"80%" }}>
                       <div className="row">
                           <div className="col-10">
                             <CardActionArea>
                               <CardActions>
                                   <img
                                       className={classes.CardMedia}
                                       src={img1}
                                   />
                                   <CardContent style={{ textAlign:'left' }}>
                                       <h3 style={{ fontWeight:"900" }}> {data.name} </h3>
                                       <h6 style={{ opacity:'0.5' }}> {data.description} </h6>
                                   </CardContent>
                               </CardActions>
                             </CardActionArea>
                             <CardActions style={{ height:"60px", paddingLeft:"0px", marginTop:"30px" }}>
                               <div className="row" style={{ padding:"10px" }}>
                                   <div className="col" style={{ marginLeft:"20px", textAlign:'left' }}>
                                     <h5 style={{ fontWeight:"900" }}> 3K </h5>
                                     <p style={{ opacity:"0.3", fontWeight:"600" }}> Classes </p>
                                   </div>
                                   <div className="col" style={{ marginLeft:"20px", textAlign:'left'  }}>
                                     <h5 style={{ fontWeight:"900" }}> 18K </h5>
                                     <p style={{ opacity:"0.3", fontWeight:"600" }}> Students</p>
                                   </div>
                                   <div className="col" style={{ marginLeft:"20px", textAlign:'left'  }}>
                                     <h5 style={{ fontWeight:"900" }}> 3.5 </h5>
                                     <p style={{ opacity:"0.3", fontWeight:"600" }}> Ratings </p>
                                   </div>
                                   <div className="col" style={{ marginLeft:"20px", textAlign:'left'  }}>
                                     <h5 style={{ fontWeight:"900" }}> 10K </h5>
                                     <p style={{ opacity:"0.3", fontWeight:"600" }}> Reviews </p>
                                   </div>
                                   <div className="col" style={{ marginLeft:"20px", textAlign:'left'  }}>
                                     <h5 style={{ fontWeight:"900" }}> 1,000 </h5>
                                     <p style={{ opacity:"0.3", fontWeight:"600" }}> Fans </p>
                                   </div>
                               </div>
                             </CardActions>
                           </div>
                           <div className="col-2 text-right" style={{ display:'flex', flexDirection:'column',  }}>
                               <button className="buttonCard buttonActive" style={{ marginTop:"40px" }} > Be a fan </button>
                               <button className="buttonCard" style={{ marginTop:"40px"}} > Availablity </button>
                               <button className="buttonCard" style={{ marginTop:"40px" }} > Book session </button>
                           </div>
                       </div>
                      
                   </Card>
                   )
                )
          }
            
       </Grid>

                       <div className={classes.content}>
                       <div className="row" style={{ marginTop:"50px" }}>
                            <div className="col-2 text-left mt-5">
                                <h4 style={{ fontWeight:"900" }}> Upcoming Class   {props.tutorID} </h4>
                            </div>
                        </div>

                       <div style={{ display:"flex" }}>
                       {/* <img src={play} alt='' style={{ position:"absolute", width:"70px", right:"25%", top:"70%" }} />  */}
                            <div className="row mr-5">
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
                            <div className="row mr-5">
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
                            <div className="row mr-5">
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
                            <div className="row mr-5" >
                                <div className="col-4" style={{ opacity:"0.5" }}>
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
                            <div style={{ position:"absolute", right:0, backgroundColor:'#ffffff', width:700, height:500, textAlign:'left' }}>
                               <div style={{ marginLeft:100, fontWeight:500 }}>
                               <h4 style={{ fontWeight:700 }}> Educational Background </h4>
                                <p style={{ marginTop: 30 }}>Working Full time at Times India</p>
                                <p>M.Tech from IIT, Kharagpur</p>
                                <p>VTS Tutor Since <span style={{ fontWeight:800 }} > 12 September, 2019 </span></p>
                                <p>8,59,890 live minutes taught in last 30 days</p>
                               </div>
                               <h5 style={{ position:"relative", transform:'translate(-70px,-230px)', color:'#226CD5' }}>See all</h5>
                            </div>
                            
                       </div>

                        <div className="row">
                            <div className="col-2 text-left mt-5">
                                <h4 style={{ fontWeight:"900" }} > Past Sessions </h4>
                            </div>
                        </div>

                        <div style={{ display:"flex" }}>
                            
                            <div className="row mr-5">
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
                            <div className="row mr-5">
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
                            <div className="row mr-5">
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
                            <div className="row mr-5" >
                                <div className="col-4" style={{ opacity:"0.5" }}>
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
                                <img src={play} alt='' style={{ position:"relative", height:"70px", marginTop:'auto',marginBottom:'auto', opacity:"1" }} /> 
                            </div>
                       </div>
    </div>
    <Footer />
    </div>
    
    
  );
}

TutorExpand.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(TutorExpand);