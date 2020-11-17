import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom'
import { Badge } from 'react-bootstrap'
import profilePic from '../../assets/img/images.jpg'
import Axios from 'axios'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    fontFamily: "'Poppins', sans-serif",
    marginLeft:50,
    justifyContent:'left'
  },
  Card: {
    maxWidth: 430,
    boxShadow:"0px 3px 12px #0000001A",
    borderRadius: 12,
  },
  CardMedia: {
    height: 100,
    borderRadius: 10
  },
  CardNumber:{
    fontWeight: 900,
    fontSize: 15
  },

}));


export default function Dashboard(props) {
  const classes = useStyles();
  // const history = useHistory();
  
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-10-05T21:11:54'));
  const [bookedStudents, setBookedStudents] = React.useState([])
  const [paymentBtn, setPaymentBtn] = React.useState(false)

  const index = props.index
  // console.log(index)

  useEffect(()=> {
    Axios.get('https://vts-1.herokuapp.com/tutor/'+ index)
    .then( res=> {
      setBookedStudents(res.data.bookedStudents)
    })
  },[])


  useEffect(()=> {
    bookedStudents.map( data => {
      if( data === props.currentStudentID )
        return setPaymentBtn(true)
    })
  })





  return (
    <div className={classes.root}>
      
      <div style={{ display: 'none' }}>
      </div>
      <main className={classes.content}>
        <Card className={classes.Card}>
            <CardActionArea>
               <CardActions>
               <img
                    className={classes.CardMedia}
                    src={props.profilepic === "" ? props.profilepic : profilePic }
                />
                <CardContent >
                    <div style={{ position: 'absolute', right: '15px', top: '3vh' }}>
                      {
                        bookedStudents.map( data => {
                          return(
                            (
                              data === props.currentStudentID 
                              &&
                              <Badge variant="success" style={{ padding: '5px' }}>  <span style={{ fontSize: '15px', fontWeight: '500', height: '20px',  margin: '10px' }} > Request Accepted </span> </Badge>
                            )
                          )
                        })
                      }
                    </div>
                    <Typography  variant="h6" component="h2" align="left" style={{ fontFamily: "'Poppins', sans-serif", fontWeight:"900" }}>
                        {props.name}
                    </Typography>
                    <Typography gutterBottom variant="caption" align="left" component="p" style={{ marginTop: "20px", fontFamily: "'Poppins', sans-serif", fontSize:"14px", opacity:"0.7" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt leo nun.
                    </Typography>
                </CardContent>
               </CardActions>
            </CardActionArea>
            <CardActions style={{ height:"60px", paddingLeft:"0px" }}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h6" align="left" className={classes.CardNumber} style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {props.classes}
                        </Typography>
                        <Typography gutterBottom variant="caption" align="left" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            Classes
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActionArea>
                    <CardContent>
                        <Typography  variant="h6" className={classes.CardNumber} align="left" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {props.students}
                        </Typography>
                        <Typography gutterBottom variant="caption" align="left" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            Students
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h6" className={classes.CardNumber} align="left" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {props.rating}
                        </Typography>
                        <Typography gutterBottom variant="caption" align="left" style={{ fontFamily: "'Poppins', sans-serif" }} >
                            Ratings
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActionArea>
                    <CardContent>
                        <Typography  variant="h6" className={classes.CardNumber} align="left" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {props.review}
                        </Typography>
                        <Typography gutterBottom variant="caption"  align="left" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            Reviews
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActionArea>
                    <CardContent>
                        <Typography  variant="h6" className={classes.CardNumber} align="left" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {props.fans}
                        </Typography>
                        <Typography gutterBottom variant="caption" align="left" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            Fans
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </CardActions>
            <CardActions style={{ justifyContent:"space-between" }}>
                {/* <Button size="small" variant="contained" color="#226CD5"  onClick={() => history.push('/tutor')} >
                    View Profile
                </Button> */}
                <Link push   to={{ pathname: '/student/tutorexpand/' + index, state: index}} >  <button className="buttonCard buttonActive" style={{ height:"40px", fontFamily: "'Poppins', sans-serif" }} onClick={e => props.currentIndex(index) } > View Profile </button> </Link>
                <button className="buttonCard" style={{ height:"40px", fontFamily: "'Poppins', sans-serif" }}  > Availablity </button>
                {/* <button className="buttonCard" style={{ height:"40px", fontFamily: "'Poppins', sans-serif" }} onClick={ e => props.bookSession(index) } > Book session </button> */}

                {
                  paymentBtn ? <button className="buttonCard" style={{ height:"40px", fontFamily: "'Poppins', sans-serif" }} onClick={ e => props.payNow(index) } > Pay Now </button> 
                             : <button className="buttonCard" style={{ height:"40px", fontFamily: "'Poppins', sans-serif" }} onClick={ e => props.bookSession(index) } > Book session </button> 
                }

            </CardActions>
        </Card>
      </main>
    </div>
    
    
  );
}
