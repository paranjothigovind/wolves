import React from 'react'
import AppBar from '../../components/StudAppBar'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { CardContent, Typography } from '@material-ui/core';
import HWW1 from '../../assets/img/Home/HWW1.png'
import HWW2 from '../../assets/img/Home/HWW2.png'
import HWW3 from '../../assets/img/Home/HWW3.png'
import Card from '@material-ui/core/Card';
import '../../App.css'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Footer from '../../components/Footer'
import One from '../../assets/img/Home/1.png'
import Two from '../../assets/img/Home/2.png'
import joinImg from '../../assets/img/joinCard.PNG'
import tutor from '../../assets/img/Home/tutor.png'
import { Drawer } from '@material-ui/core';
import './Home.css'
// import join1 from '../../assets/img/Home/j1.png'
// import join2 from '../../assets/img/Home/j2.png'
// import join3 from '../../assets/img/Home/j3.png'
// import join4 from '../../assets/img/Home/j4.png'
// import join5 from '../../assets/img/Home/j5.png'
// import join6 from '../../assets/img/Home/j7.png'
// import join7 from '../../assets/img/Home/j8.png'
// import join8 from '../../assets/img/Home/j9.png'
// import join9 from '../../assets/img/Home/j10.png'
// import join10 from '../../assets/img/Home/j11.png'
// import join11 from '../../assets/img/Home/j12.png'
// import './assets/font/Poppins-Regular.ttf'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        fontFamily: "'Poppins', sans-serif"
    },
    content: {
      marginTop: theme.spacing(10),
      padding: theme.spacing(3),
      justifyContent: "space-between"
    },
    headerLeft:{
        marginTop: theme.spacing(20),
        justifyContent:"left",
    },
    AccordHeader:{
        fontFamily: "'Poppins', sans-serif",
        fontSize: theme.typography.pxToRem(25),
        fontWeight: theme.typography.fontWeightRegular,
        margin: "20px 0px 20px 0px"
    },
    fontFamily:{
        fontFamily: "'Poppins', sans-serif"
    },
    card:{
        width: 700,
        height: 250,
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        borderRadius: 10,
        marginLeft: theme.spacing(10)
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
      },
      drawerPaper: {
        width: drawerWidth,
        backgroundColor:'#000000'
      },
      drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
      },
  }));

const Home = () => {

    const classes = useStyles();
    const [open, setOpen] = React.useState("");
    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };
      

    return(
        <div>
        <div className={classes.root}> 
            <AppBar />
            
            <Grid container className={classes.content} justify="flex-start">
                <Grid item xs={1} sm={1}/>
                <Grid item xs={10} sm={4} justify="flex-start" className={classes.headerLeft}>
                   <h1 className="headerOne">Watch Daily</h1>
                   <h1 className="headerOne">Live Classes.</h1>
                   <h3 className="subHeader">Enjoy Live Classes With Us.</h3>
                   <div style={{ textAlign:"left", marginTop:"30px" }}>
                   <button className="button" >
                        Start Learning</button>
                   </div>
                </Grid>
                <Grid item xs={6}>
                        <img src={One} alt='' className="headerImg" />
                </Grid>
            </Grid>

            <Grid container className={classes.content}  >
                <Grid items xs={1} sm={1} />
                <Grid items xs={9} sm={4}>
                    <h2 className="header"> Who we are? </h2>
                    <h5 className="content"> What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has? </h5>
                    <div style={{ textAlign:"left", marginTop:"30px" }}>
                        <button className="button">
                                About Us</button>
                   </div>
                </Grid>
                <Grid item xs={10} sm={6} >
                    <img src={Two} alt=""  style={{ height:"300px" }} />
                </Grid>
            </Grid>


            <Grid container className={classes.content}>
                <Grid item xs={1} sm={1} />
                <Grid item xs={10} sm={5}>
                    <h2 className="header"> How we work </h2>
                    <h5 className="content"> What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took.</h5>
                </Grid>
                <Grid item sm={5} />
            </Grid>

            <Grid container>
                <Grid item sm={1} />
                <Grid item sm={3} className="responsiveForHWW" style={{ marginLeft:"100px" }} >
                    <div style={{ textAlign:"left" }}> <img src={HWW1} alt='' className="HHW1" /> </div> 
                    <h3 className="HWWSubHeader"> Daily live classes </h3>
                    <h6 className="HWWContent"> Chat with educators, live polls and get your doubts cleared-all while class is going on. </h6>
                </Grid>
                <Grid item sm={3}>
                    <div style={{ textAlign:"left" }}> <img src={HWW2} alt='' className="HHW1" /> </div>  
                    <h3 className="HWWSubHeader"> Practice And Learn </h3>
                    <h6 className="HWWContent"> Chat with educators, live polls and get your doubts cleared-all while class is going on. </h6>
                </Grid>
                <Grid item sm={3}>
                    <div style={{ textAlign:"left" }}> <img src={HWW3} alt='' className="HHW1" /> </div>  
                    <h3 className="HWWSubHeader"> Live anytime, anywhere </h3>
                    <h6 className="HWWContent"> Chat with educators, live polls and get your doubts cleared-all while class is going on. </h6>
                </Grid>
                <Grid item sm={1} />
            </Grid>

            <Grid container className={classes.content}>
                <Grid item xs={1} sm={1} />
                <Grid item xs={10} sm={6}>
                    <h2 className="header"> Join Our Community </h2>
                    <h5 className="content"> What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard . </h5>
                </Grid>
                <Grid item sm={4} />
            </Grid>

            <Grid container>
                <Grid item sm={1} />
                <Grid item sm={11} >
                    <div className="jcImgContainer">
                        <img src={joinImg} alt='' className="jcImg" />
                    </div>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item sm={1} />
                <Grid item>
                    <div style={{ textAlign:"left", marginLeft:"100px", marginTop:"50px" }}>
                        <button className="button">
                        Join Now</button>
                    </div>
                </Grid>
            </Grid>



            <Grid container className={classes.content}>
                <Grid item xs={1} sm={1} />
                <Grid item xs={10} sm={8}>
                    <h2 className="header"> Frequenty Asked Questions (FAQ) </h2>
                </Grid>
                <Grid item sm ={2} />
            </Grid>

            <Grid container>
                <Grid item xs={1} sm={1} />
                <Grid item xs={10} sm={10} >
                   <div className="accordContainer">
                   <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                        <Typography className={classes.AccordHeader}>Accordion 1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                        <Typography className={classes.AccordHeader}>Accordion 2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.fontFamily}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                   </div>
                </Grid>
                <Grid item sm={3} />
            </Grid>

            <Grid container className={classes.content}>
                <Grid item xs={1} sm={1} />
                <Grid item xs={10} sm={5}>
                    <h3  className="header mr" style={{ lineHeight:"33px" }}> Tutor of <br/> the Month </h3>
                    <h5 className="content mr" style={{ lineHeight:"33px" }}> What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum. </h5>
                </Grid>
                <Grid item xs={10} sm={6}>
                    <Card className="card" style={{  boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)", borderRadius:"9px" }}>
                            <Grid container>
                                <Grid item sm={6}>
                                    <h2 style={{ textAlign:"left", fontWeight:"700", marginTop:"60px", marginLeft:"50px" }} > Arti Chhawari </h2>
                                    <h6 style={{ textAlign:"left", opacity:"0.5", marginLeft:"50px", lineHeight:"30px" }}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex. </h6>
                                </Grid>
                                <Grid item sm={6}>
                                    <img src={tutor} alt="" style={{ height:"250px", }} />
                                </Grid>
                            </Grid>
                    </Card>
                </Grid>
            </Grid>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                paper: classes.drawerPaper,
                }}
            >
            </Drawer>
            
            
        </div>
            <Footer style={{ maxWidth:"100%" }} />
        </div>
    )
}

export default Home