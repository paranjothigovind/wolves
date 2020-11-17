import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import img1 from '../assets/img/1.jpg'

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


export default function Dashboard({tutor, showTutor}) {
  const classes = useStyles();
  // const history = useHistory();
  
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-10-05T21:11:54'));

  return (
    <div className={classes.root}>
      

      <main className={classes.content}>
        <Card className={classes.Card}>
            <CardActionArea>
               <CardActions>
               <img
                    className={classes.CardMedia}
                    src={img1}
                />
                <CardContent >
                    <Typography  variant="h6" component="h2" align="left" style={{ fontFamily: "'Poppins', sans-serif", fontWeight:"900" }}>
                        {props.name}
                    </Typography>
                    <Typography gutterBottom variant="caption" align="left" component="p" style={{ fontFamily: "'Poppins', sans-serif", fontSize:"14px", opacity:"0.7" }}>
                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry
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
                <button className="buttonCard buttonActive" style={{ height:"40px", fontFamily: "'Poppins', sans-serif" }} onClick={() => showTutor(tutor)} > {tutor}  View Profile </button> 
                <button className="buttonCard" style={{ height:"40px", fontFamily: "'Poppins', sans-serif" }} > Availablity </button>
                <button className="buttonCard" style={{ height:"40px", fontFamily: "'Poppins', sans-serif" }} > Book session </button>
                
                {/* <Link to={'/student/pay'} style={{ textDecoration:'none' }}>
                  <button className="buttonCard" style={{ height:"40px", fontFamily: "'Poppins', sans-serif" }} > Book session </button>
                </Link> */}
                {/* <Button size="small" variant="outlined">
                    Availabiliy
                </Button>
                <Button size="small" variant="outlined" color="primary" onClick={handleClickOpen}>
                    Book a session
                </Button> */}
            </CardActions>
        </Card>
      </main>
    </div>
    
    
  );
}
