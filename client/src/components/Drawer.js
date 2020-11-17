import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import { Link, useHistory } from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  Card: {
    maxWidth: 440,
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

export default function ClippedDrawer() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
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
                    control={<Checkbox size="small" name="checkedA" />}
                    label={ <span style={{ fontSize:"14px" }}>  Elementary School </span> }
                    style={{ marginBottom:"0px" }}
                />
                <FormControlLabel
                    control={<Checkbox size="small" name="checkedA" />}
                    label={ <span style={{ fontSize:"14px" }}>  Middle School </span> }
                    style={{ marginBottom:"0px" }}
                />
                 <FormControlLabel
                    control={<Checkbox size="small" name="checkedA" />}
                    label={ <span style={{ fontSize:"14px" }}>  High School </span> }
                    style={{ marginBottom:"0px" }}
                />
                 <FormControlLabel
                    control={<Checkbox size="small" name="checkedA" />}
                    label={ <span style={{ fontSize:"14px" }}>  College </span> }
                    style={{ marginBottom:"0px" }}
                />
                </FormGroup>
            </FormControl>

            <Divider variant="middle" />

            {/* <Typography gutterBottom className="mt-4" style={{ textAlign:"left", marginLeft:"20px" }} variant="subtitle1">
                Availabiliy
            </Typography>
            <FormControl margin="none" >
                <FormGroup component="1">
                <FormControlLabel
                    control={<Checkbox size="small" name="checkedA" />}
                    label={ <span style={{ fontSize:"14px" }}>  Sunday </span> }
                    style={{ marginBottom:"0px" }}
                />
                <FormControlLabel
                    control={<Checkbox size="small" name="checkedA" />}
                    label={ <span style={{ fontSize:"14px" }}>  Saturday </span> }
                    style={{ marginBottom:"0px" }}
                />
                 <FormControlLabel
                    control={<Checkbox size="small" name="checkedA" />}
                    label={ <span style={{ fontSize:"14px" }}> Tuesday  </span> }
                    style={{ marginBottom:"0px" }}
                />
                 <FormControlLabel
                    control={<Checkbox size="small" name="checkedA" />}
                    label={ <span style={{ fontSize:"14px" }}>  Wednesday </span> }
                    style={{ marginBottom:"0px" }}
                />
                 <FormControlLabel
                    control={<Checkbox size="small" name="checkedA" />}
                    label={ <span style={{ fontSize:"14px" }}>  Thursday </span> }
                    style={{ marginBottom:"0px" }}
                />
                 <FormControlLabel
                    control={<Checkbox size="small" name="checkedA" />}
                    label={ <span style={{ fontSize:"14px" }}>  Friday</span> }
                    style={{ marginBottom:"0px" }}
                />
                </FormGroup>
            </FormControl> */}

        </div>
      </Drawer>
      <main className={classes.content}>
        <Card className={classes.Card}>
            <CardActionArea>
               <CardActions>
               <img
                    className={classes.CardMedia}
                    src={img1}
                />
                <CardContent>
                    <Typography  variant="h5" component="h2" align="left">
                        Arthi Chhawari
                    </Typography>
                    <Typography gutterBottom variant="caption" align="left" component="p">
                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    </Typography>
                </CardContent>
               </CardActions>
            </CardActionArea>
            <CardActions style={{ height:"60px", paddingLeft:"0px" }}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h6" align="left" className={classes.CardNumber}>
                            3K
                        </Typography>
                        <Typography gutterBottom variant="caption" align="left">
                            Classes
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActionArea>
                    <CardContent>
                        <Typography  variant="h6" className={classes.CardNumber} align="left">
                            18K
                        </Typography>
                        <Typography gutterBottom variant="caption" align="left" >
                            Students
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h6" className={classes.CardNumber} align="left">
                            3.5
                        </Typography>
                        <Typography gutterBottom variant="caption" align="left" >
                            Ratings
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActionArea>
                    <CardContent>
                        <Typography  variant="h6" className={classes.CardNumber} align="left">
                            10K
                        </Typography>
                        <Typography gutterBottom variant="caption"  align="left">
                            Reviews
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActionArea>
                    <CardContent>
                        <Typography  variant="h6" className={classes.CardNumber} align="left">
                            1,000
                        </Typography>
                        <Typography gutterBottom variant="caption" align="left">
                            Fans
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </CardActions>
            <CardActions style={{ justifyContent:"space-between" }}>
                <Button size="small" variant="contained" color="primary"  onClick={() => history.push('/tutor')} >
                    View Profile
                </Button>
                <Button size="small" variant="outlined">
                    Availabiliy
                </Button>
                <Button size="small" variant="outlined">
                    Book a session
                </Button>
            </CardActions>
        </Card>
      </main>
    </div>
  );
}
