import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';

import CloseIcon from '@material-ui/icons/Close';
import Availability from './availabilityFilter'




const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
      marginLeft: 0,
      marginTop: 0
    },
    noMargin: {
      marginBottom: 0,
      marginLeft: 0,
      margin: '0px',
      fontWeight: 200
    }
  }));

export default function CheckboxesGroup(props){
    const classes = useStyles();
    // const [state, setState] = React.useState({
    //     ElementarySchool: false,
    //     MiddleSchool: true,
    //     HighSchool: false,
    //     College: false
    // });
    const [selected, setSelected] = React.useState("");
    const [availability , setAvailability] = React.useState([]);
    const [masterClasses, setMasterClasses] = React.useState("");

    console.log(availability)

    const options = [
        { label: 'Thing 1', value: 1},
        { label: 'Thing 2', value: 2},
      ];

    const handleClick = (event) => {
		const { name, checked } = event.target;

		this.setState((prevState) => {
			const colors = prevState.colors;
			colors[name] = checked;
			return colors;
		});
    };

    const handleAvail = (e) => {
        setAvailability(e)
        console.log(availability)
        props.sendAvailability(availability)
    }
    

    // const handleChange = (event) => {
    //     setState({ ...state, [event.target.name]: false });
    //     setState({ ...state, [event.target.name]: event.target.checked });
    //     props.checked(event.target.name)

    // };

    // const { ElementarySchool, MiddleSchool, HighSchool, College  } = state;
    // const error = [ElementarySchool, MiddleSchool, HighSchool, College].filter((v) => v).length !== 1;
    // console.log(selected)
    // const handleClickLevel = (e) =>{
    //     // props.checked(selected)
    //     console.log(e.target.name)
    // }

        return(
            <div>
                <Typography gutterBottom className="mt-5" style={{ textAlign:"left", marginLeft:"16px", fontWeight:"700" }} variant="h6">
                    Filters
                </Typography>

                <Divider variant="middle" />


                <Typography gutterBottom className="mt-4" style={{ textAlign:"left", marginLeft:"20px" }} variant="subtitle1">
                    Educational Levels
                </Typography>

                <FormControl required component="fieldset" className={classes.formControl}>
                    <FormGroup>
                      {
                          selected != ""
                          &&
                          <div style={{ display: 'flex', marginLeft: '10px' , cursor: 'pointer' }} onClick={ e => setSelected("") || props.selected("") }>
                            <CloseIcon style={{ width: '15px' }} />
                            <label style={{ marginTop: '3px', marginLeft: '5px'  }} > Clear all </label>
                        </div>
                      }
                      <FormControlLabel
                          control={<Checkbox checked={ selected === 'Elementary School'}
                          color="primary" onChange={e => props.selected(e.target.name) || setSelected(e.target.name)} name="Elementary School" />}
                          label="Elementary School" className={classes.noMargin} style={{ fontSize: '12px' }}
                      />
                      <FormControlLabel
                          control={<Checkbox checked={ selected ===  'Middle School'} color="primary"  onChange={e => props.selected(e.target.name) || setSelected(e.target.name)} name="Middle School" />}
                          label="Middle School" className={classes.noMargin}
                      />
                      <FormControlLabel
                          control={<Checkbox checked={selected === 'High School'} color="primary" onChange={e => props.selected(e.target.name) || setSelected(e.target.name)} name="High School" />}
                          label="High School" className={classes.noMargin}
                      />
                      <FormControlLabel
                          control={<Checkbox checked={ selected ===  'College'} color="primary"  onChange={e => props.selected(e.target.name) || setSelected(e.target.name)} name="College" />}
                          label="College" className={classes.noMargin}
                      />
                    </FormGroup>
                </FormControl>

                <Divider variant="middle" />


                <Typography gutterBottom className="mt-4" style={{ textAlign:"left", marginLeft:"20px" }} variant="subtitle1">
                    Availability
                </Typography>


                <Availability fetchAvailability={ handleAvail } />

                {/* <FormControl required component="fieldset" className={classes.formControl} style={{ transform: "translateX(-15%)" }} >
                    <FormGroup>
                      <FormControlLabel
                          control={<Checkbox checked={ availability.sunday  } color="primary" onChange={e => setAvailability({ sunday: true })} name="Sunday" />}
                          label="Sunday" className={classes.noMargin}
                      />
                      <FormControlLabel
                          control={<Checkbox checked={ availability.monday} color="primary"  onChange={e => setAvailability({ monday: true })} name="Monday" />}
                          label="Monday" className={classes.noMargin}
                      />
                      <FormControlLabel
                          control={<Checkbox checked={availability.tuesday === true} color="primary" onChange={e => setAvailability(e.target.name)} name="Tuesday" />}
                          label="Tuesday" className={classes.noMargin}
                      />
                      <FormControlLabel
                          control={<Checkbox checked={ availability.wednesday === true} color="primary"  onChange={e => setAvailability(e.target.name)} name="Wednesday" />}
                          label="Wednesday" className={classes.noMargin}
                      />
                       <FormControlLabel
                          control={<Checkbox checked={ availability.thursday ===  true} color="primary"  onChange={e => setAvailability(e.target.name)} name="Thursday" />}
                          label="Thursday" className={classes.noMargin}
                      />
                       <FormControlLabel
                          control={<Checkbox checked={ availability.friday ===  true} color="primary"  onChange={e => setAvailability(e.target.name)} name="Friday" />}
                          label="Friday" className={classes.noMargin}
                      />
                       <FormControlLabel
                          control={<Checkbox checked={ availability.saturday ===  true} color="primary"  onChange={e => setAvailability(e.target.name)} name="Saturday" />}
                          label="Saturday" className={classes.noMargin}
                      />
                    </FormGroup>
                </FormControl> */}

                <Divider variant="middle" />

                <Typography gutterBottom className="mt-4" style={{ textAlign:"left", marginLeft:"20px" }} variant="subtitle1">
                    Classes (Master)
                </Typography>

                <FormControl required component="fieldset" className={classes.formControl}  >
                    <FormGroup>
                      <FormControlLabel
                          control={<Checkbox checked={ masterClasses === 'PreAlgebra'} color="primary" onChange={e => setMasterClasses(e.target.name)} name="PreAlgebra" />}
                          label="Pre Algebra" className={classes.noMargin}
                      />
                      <FormControlLabel
                          control={<Checkbox checked={ masterClasses ===  'Alegbra'} color="primary"  onChange={e => setMasterClasses(e.target.name)} name="Alegbra" />}
                          label="Algebra" className={classes.noMargin}
                      />
                      <FormControlLabel
                          control={<Checkbox checked={masterClasses === 'BasicMathematics'} color="primary" onChange={e => setMasterClasses(e.target.name)} name="BasicMathematics" />}
                          label="Basic Mathematics" className={classes.noMargin}
                      />
                      <FormControlLabel
                          control={<Checkbox checked={ masterClasses ===  'Geometry'} color="primary"  onChange={e => setMasterClasses(e.target.name)} name="Geometry" />}
                          label="Geometry" className={classes.noMargin}
                      />
                       <FormControlLabel
                          control={<Checkbox checked={ masterClasses ===  'PreCalculus'} color="primary"  onChange={e => setMasterClasses(e.target.name)} name="PreCalculus" />}
                          label="Pre Calculus" className={classes.noMargin}
                      />
                       <FormControlLabel
                          control={<Checkbox checked={ masterClasses ===  'Physics'} color="primary"  onChange={e => setMasterClasses(e.target.name)} name="Physics" />}
                          label="Physics" className={classes.noMargin}
                      />
                       <FormControlLabel
                          control={<Checkbox checked={ masterClasses ===  'Chemistry'} color="primary"  onChange={e => setMasterClasses(e.target.name)} name="Chemistry" />}
                          label="Chemistry" className={classes.noMargin}
                      />
                       <FormControlLabel
                          control={<Checkbox checked={ masterClasses ===  'ProofReading'} color="primary"  onChange={e => setMasterClasses(e.target.name)} name="ProofReading" />}
                          label="Proof Reading" className={classes.noMargin}
                      />
                       <FormControlLabel
                          control={<Checkbox checked={ masterClasses ===  'English'} color="primary"  onChange={e => setMasterClasses(e.target.name)} name="English" />}
                          label="English" className={classes.noMargin}
                      />
                       <FormControlLabel
                          control={<Checkbox checked={ masterClasses ===  'Spanish'} color="primary"  onChange={e => setMasterClasses(e.target.name)} name="Spanish" />}
                          label="Spanish" className={classes.noMargin}
                      />
                    </FormGroup>
                </FormControl>


                {/* <Typography gutterBottom className="mt-4" style={{ textAlign:"left", marginLeft:"20px" }} variant="subtitle1">
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
                </div> */}
            </div>
        )

}

// export default DashboardFilter
