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
// import { Nav, Navbar, NavItem, NavLink } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
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
import '../assets/css/common.css'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  navBar:{
    marginLeft: theme.spacing(120)
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color="default" position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.navbrand} noWrap>
            Virtual Training
          </Typography>
          {/* <Navbar variant="light" className="bg-light" className={classes.navBar}>
            <Nav  variant="primary"  >

                <Nav.Link as="li" className="mr-5 nav-active"  style={{ fontSize: "22px",   }}>
                    Our Tutors
                </Nav.Link>
                <Nav.Link as="li" className="mr-5" style={{ fontSize: "22px" }}>
                    Book Session
                </Nav.Link>
                <Nav.Link as="li" className="mr-5" style={{ fontSize: "22px" }}>
                    Contact Us
                </Nav.Link>
                <Button variant="contained" size="large" >
                    Login
                </Button>
            </Nav>
        </Navbar> */}
 {/* <nav className="navbar" justifyContent="flex-end">
    <div className="menu-toggle" id="mobile-menu">
      <span className="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
    <ul className="nav no-search">
      <li className="nav-item active"><a href="#">Home</a></li>
      <li className="nav-item"><a href="#">About</a></li>
      <li className="nav-item"><a href="#">Work</a></li>
      <li className="nav-item"><a href="#">Careers</a></li>
      <li style={{ marginLeft:"30px" }} className="nav-item"><a href="#">Contact Us</a></li>
    </ul>
  </nav> */}

<nav className="navbar">
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/products"
    >
      Products
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      to="/contacts"
    >
      Contacts
    </NavLink>
  </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}
