import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logo from '../assets/img/logo2.png'
import social from '../assets/img/Footer/social.png'

const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    footer:{
      marginBottom: '0px',
      fontFamily: "'Poppins', sans-serif",
    }
  });


const Footer  = () => {

    const classes = useStyles();

    return(
        <div className={classes.footer}>
            <footer className="jumbotron" style={{ marginBottom:"0px", marginTop:"60px" }}>
                <Grid container>
                  <Grid item sm={6}>
                    <div className="row">
                      <div className="col-4 text-right">
                          {/* <img src={logo} alt='' style={{ height:"70px", left:"0" }} /> */}
                      </div>
                      <div className="col-8">
                        <h3 style={{ textAlign:"left", marginTop:"20px", fontWeight:"800" }}> Wolves </h3>
                      </div>
                    </div>
                    <div className="row" style={{ marginLeft:"230px", marginTop:"30px" }}>
                      <img src={social} alt='' />
                    </div>
                    <div className="row" style={{ marginLeft:"230px", marginTop:"30px" }}>
                      {/* <h6> @2020 Virtual Tutor PVT LTD. All rights reserved. </h6> */}
                    </div>
                  </Grid>
                  <Grid item sm={2}>
                    <ul style={{ listStyleType:"none", textAlign:"left", lineHeight:"40px" }}>
                      <li> About Us </li>
                      <li> Careers </li>
                      <li> Blogs </li>
                      <li> Privacy Policy </li>
                      <li> Terms and Conditions </li>
                    </ul>
                  </Grid>
                  <Grid item sm={1} />
                  <Grid item sm={2}>
                    <ul style={{ listStyleType:"none", textAlign:"left", lineHeight:"40px" }}>
                        <li> User Guidelines </li>
                        <li> Site Map </li>
                        <li> Refund Policy </li>
                        <li> Legal Policy </li>
                        <li> Plus Subsciptions T&C </li>
                    </ul>
                  </Grid>
                </Grid>
            </footer>
        </div>
    )
}

export default Footer