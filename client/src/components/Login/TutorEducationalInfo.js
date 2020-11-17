import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FormControlLabel, FormLabel, FormGroup } from '@material-ui/core';
import { MDBInput } from "mdbreact";
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { isWednesday } from 'date-fns';
import getToggledOptions from 'util'
// import CheckboxGroup from "react-checkbox-group";
import Availiability from './availablility'

import {Checkbox} from './checkbox/checkbox';
import {CheckboxGroup} from './checkbox/checkbox-group';

class TutorEducationalInfo extends Component{
    
    constructor(props){
        super(props);
        this.state ={
           schoolName : "",
           grade:"",
           stream:"",
           display:"education",
           position: "",
           duration: "",
           working: false,
           description:"",
           course:"",
           courseDuration:"",
           level:"",
          //  availability : {
          //    sunday: false,
          //    monday: false,
          //    tuesday: false,
          //    wednesday: false,
          //    thursday: false,
          //    friday: false,
          //    saturday: false
          //  }
          availability : [],
          checkboxGroupValue: []

        }
        this.handleChangeGrade = this.handleChangeGrade.bind(this);
        this.handleChangeStream = this.handleChangeStream.bind(this);
        this.handleAvailability = this.handleAvailability.bind(this);
    }

    handleChangeStream = (event) => {
       this.setState({
           stream: event.target.value
       })
       console.log(this.state.stream)
    };

    handleChangeGrade = (event) => {
        this.setState({
            grade: event.target.value
        })
        console.log(this.state.grade)
     };

    onChangeSchoolName = (event) => {
        this.setState({
            schoolName: event.target.value
        })
        console.log(this.state.schoolName)
    }



  handleChange = () => {
      this.props.fetchSchoolName(this.state.schoolName);
      this.props.fetchGrade(this.state.grade)
      this.props.fetchStream(this.state.stream)
      this.props.fetchPosition(this.state.position)
      this.props.fetchDuration(this.state.duration)
      this.props.fetchWorking(this.state.working)
      this.props.fetchDescription(this.state.description)
      this.props.fetchCourse(this.state.course)
      this.props.fetchCourseDuration(this.state.courseDuration)
      this.props.fetchLevel(this.state.level)
      this.props.fetchAvailability(this.state.checkboxGroupValue)
      this.props.setView()
    }
  
    handleAvailability = (name) =>{
      this.setState({
        availability: getToggledOptions(this.state.availability, name)
      })
    }

    state = { checkboxGroupValue: ['bar'] };

    handleCheckboxValueChange(value) {
      this.setState({ checkboxGroupValue: value });
      console.log(this.state.checkboxGroupValue)
    }
  
    handleButtonClick() {
      this.setState({ checkboxGroupValue: ['foo', 'qux'] });
    }
       

    render(){
        const { age } = this.state;
        return(
            <div>
                <h6 style={{ fontWeight:"900", fontSize:"28px", marginTop:"30px" }}> Perfect! </h6>
                <p style={{ fontWeight:"700", color:"#226CD5" }}> Let's Create your Tutor profile </p>

                {
                    this.state.display === "education"
                    &&
                    <div>
                        <p style={{ fontWeight:"700", color:"#9BAFBF" }}> Let's go ahead with your Educational information </p>
                        <div className="row">
                          <div className="col-11"> 
                          <ValidatorForm
                            ref="form"
                            onSubmit={()=> this.setState({ display: "experience" })}
                            onError={errors => console.log(errors)}
                            >
                            
                            {/* <TextValidator  id="outlined-standard-full-width" 
                                        label="Enter your College name" 
                                        variant="outlined" 
                                        margin="normal"  
                                        fullWidth 
                                        required
                                        multiline
                                        style={{ marginTop:"30px", left:"0%",  right:"10px" }} 
                                        value={this.state.schoolName}
                                        onChange={this.onChangeSchoolName} 
                                        validators={['required', 'isString']}
                                        errorMessages={['this field is required']}/> */}
                            <MDBInput label="Example label" outline size="md" />
                            <FormControl variant="outlined" style={{ minWidth:"100%", marginTop:"20px" }} required >
                              <InputLabel id="demo-simple-select-outlined-label">Select your Stream</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={this.state.stream}
                                    fullWidth
                                    onChange={e => this.setState({ stream: e.target.value })}
                                    label="Select your stream"
                                >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Science">Science</MenuItem>
                                    <MenuItem value="Technology">Technology</MenuItem>
                                    <MenuItem value="Engineering">Engineering</MenuItem>
                                    <MenuItem value="Art">Art</MenuItem>
                                    <MenuItem value="Mathematics">Mathematics</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl variant="outlined" style={{ minWidth:"100%", marginTop:"20px" }} >
                              <InputLabel id="demo-simple-select-outlined-label">Select your Degree</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={this.state.grade}
                                    fullWidth
                                    multiline
                                    onChange={this.handleChangeGrade}
                                    label="Select your Grade"
                                >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="B.E">B.E </MenuItem>
                                    <MenuItem value="B.Sc">B.Sc</MenuItem>
                                    <MenuItem value="M.E">M.E</MenuItem>
                                    <MenuItem value="Ph.D">Ph.D</MenuItem>
                                </Select>
                            </FormControl>
                            <button className="buttonSmall" type="submit"> Next </button>
                            </ValidatorForm>
                          </div>
                        </div>
                    </div>
                }

                {
                    this.state.display === "experience"
                    &&
                    <div>
                        <p style={{ fontWeight:"700", color:"#9BAFBF" }}> Let's go ahead with your job experience </p>
                        <div className="row">
                        <div className="col-11"> 
                        <ValidatorForm
                            ref="form"
                            onSubmit={()=>this.setState({ display:"course" })}
                            onError={errors => console.log(errors)}
                            >
                        {/* <TextValidator id="outlined-standard-full-width"  multiline label="" variant="outlined" margin="normal" style={{ marginTop:"30px", left:"0px", right:"10px" }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start" label="Hello">
                                    <AddCircleIcon />
                                    <div style={{ textAlign:"center", width:"100%" }}> <p style={{ paddingTop:"15px", textAlign:"center", marginLeft:"20px", color:"#9BAFBF" }}> Add More Education </p> </div>
                                </InputAdornment>
                                ),
                              }} 
                          /> */}
                          <TextValidator 
                              id="outlined-standard-full-width" 
                              multiline 
                              label="Enter your organisation name" 
                              variant="outlined" 
                              margin="normal" 
                              fullWidth 
                              style={{  left:"0%",  right:"10px" }}
                              // validators={['required', 'isString']}
                              // errorMessages={['this field is required', 'Must be characters ']}
                               />
                          <FormControl variant="outlined"  style={{ marginTop:"20px", width:"100%" }} required>
                            <InputLabel id="demo-simple-select-outlined-label"> select your Position</InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              value={this.state.position}
                              fullWidth
                              onChange={ (e)=> this.setState({ position: e.target.value })}
                              label="Select your Position"
                            >
                              <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Professor"> Professor </MenuItem>
                                    <MenuItem value="Assistant Professor"> Assistant Professor </MenuItem>
                                    <MenuItem value="Associate Professor"> Associate Professor </MenuItem>
                                    <MenuItem value="Lecture">Lecture </MenuItem>
                                    <MenuItem value="Teaching Faculty">Teaching Faculty</MenuItem>                       
                            </Select>
                          </FormControl>
                          <FormControl variant="outlined" style={{ marginTop:"30px",  width:"100%" }} required >
                            <InputLabel id="demo-simple-select-outlined-label">Select your duration (in hours) </InputLabel>
                            <Select
                              labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined"
                              fullWidth
                              value={this.state.duration}
                              onChange={(e)=> this.setState({ duration: e.target.value }) }
                              label="Select your date of birth"
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              <MenuItem value="2 hours"> 2 </MenuItem>
                              <MenuItem value="3 hours"> 3 </MenuItem>
                              <MenuItem value="4 hours"> 4 </MenuItem>
                            
                            </Select>
                          </FormControl>
                          
                          <FormControlLabel
                            style={{ marginTop:"15px" }}
                            control={
                              <Checkbox
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                name="checkedI" color="#226CD5"
                                style={{ marginLeft:"1px" }}
                                value={this.state.working}
                                onChange={(e) => this.setState({ working: true })}
                              />
                            }
                            label="Currently working here"
                            label={<p style={{ paddingTop: "0px" }}>Currently working here</p>}
                          />
                            <TextValidator 
                                id="  outlined-standard-full-width" 
                                multiline label="Description (Optional)" 
                                variant="outlined" margin="normal" 
                                fullWidth 
                                style={{  left:"0%",  right:"10px" }}
                                value={this.state.description}
                                onChange={(e)=> this.setState({ description: e.target.value })}
                               />
                            {/* <TextValidator 
                                id="outlined-standard-full-width" 
                                multiline 
                                label="" 
                                variant="outlined" 
                                margin="normal" 
                                fullWidth  
                                style={{ marginTop:"20px", left:"0px", marginBottom:"-30px", right:"10px" }}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start" label="Hello">
                                        <AddCircleIcon />
                                        <div style={{ textAlign:"center", width:"100%" }}> <p style={{ paddingTop:"15px", textAlign:"center", marginLeft:"20px", color:"#9BAFBF" }}> Add More Job </p> </div>
                                    </InputAdornment>
                                    ),
                                  }} /> */}
                              {/* <CheckboxGroup name="fruits" value={this.state.availability} onChange={e => this.setState({ availability: e.target.value })}>
                                {(Checkbox) => (
                                  <>
                                    <label>
                                      <Checkbox value="apple" /> Apple
                                    </label>
                                    <label>
                                      <Checkbox value="orange" /> Orange
                                    </label>
                                    <label>
                                      <Checkbox value="watermelon" /> Watermelon
                                    </label>
                                  </>
                                )}
                              </CheckboxGroup> */}

                              <div className="row mt-4" style={{ marginLeft: "-10px" }}>
                                <CheckboxGroup
                                  name="my-group"
                                  value={this.state.checkboxGroupValue}
                                  onValueChange={value => this.handleCheckboxValueChange(value)}
                                >
                                  <Checkbox title="SUN" value="sunday" groupName="my-group"></Checkbox>
                                  <Checkbox title="MON" value="monday" groupName="my-group"></Checkbox>
                                  <Checkbox title="TUE" value="tuesday" groupName="my-group"></Checkbox>
                                  <Checkbox title="WED" value="wednesday" groupName="my-group"></Checkbox>
                                  <Checkbox title="THUR" value="thursday" groupName="my-group"></Checkbox>
                                  <Checkbox title="FRI" value="friday" groupName="my-group"></Checkbox>
                                  <Checkbox title="SAT " value="saturday" groupName="my-group"></Checkbox>
                                </CheckboxGroup>
                               
                              </div>
                              
                               <button 
                                  className="buttonSmall"
                                  style={{ margintop:"0px" }}
                                  type="submit"
                                > Next </button>
                          </ValidatorForm>
                        </div>
                      </div>
                       
                        
                    </div>
                }

                {
                    this.state.display === "course"
                    &&
                    <div>
                    <p style={{ fontWeight:"700", color:"#9BAFBF" }}> Let's go ahead with VTS Profile </p>
                    <div className="row">
                      <div className="col-11">
                        <ValidatorForm
                            ref="form"
                            onSubmit={this.handleChange}
                            onError={errors => console.log(errors)}
                            >
                        <FormControl variant="outlined" style={{ marginTop:"20px", width:"100%" }} required>
                          <InputLabel id="demo-simple-select-outlined-label"> select course you're offering</InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={this.state.course}
                            fullWidth
                            multiline
                            onChange={ (e)=>this.setState({ course: e.target.value }) }
                            label="Select your gender"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value="Physic" >Physic</MenuItem>
                            <MenuItem value="Science" >Science</MenuItem>
                          
                          </Select>
                        </FormControl>
                        <FormControl variant="outlined" style={{ marginTop:"30px", width:"100%" }} required >
                          <InputLabel id="demo-simple-select-outlined-label">Select duration of the course</InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={this.state.courseDuration}
                            fullWidth
                            multiline
                            onChange={(e)=> this.setState(({ courseDuration: e.target.value })) }
                            
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value="2 hours"> 2 hours </MenuItem>
                            <MenuItem value="3 hours"> 3 hours </MenuItem>
                          </Select>
                        </FormControl>
    
                        <TextValidator 
                            id=" outlined-standard-full-width" 
                            multiline 
                            label="Description (Optional)" 
                            variant="outlined" 
                            margin="normal" 
                            fullWidth 
                            style={{  left:"0%",  right:"10px", marginTop:"30px" }}
                            // validators={['required']}
                            // errorMessages={['this field is required']} 
                            />
                        <FormControl variant="outlined" style={{ marginTop:"15px", width:"100%" }} required >
                          <InputLabel id="demo-simple-select-outlined-label">Select level of tutoring</InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={this.state.level}
                            fullWidth
                            onChange={(e)=> this.setState({ level: e.target.value }) }
                            label="Select your date of birth"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value="Elementary School"> Elementary School </MenuItem>
                            <MenuItem value="Middle School"> Middle School </MenuItem>
                            <MenuItem value="High School"> High School </MenuItem>
                            <MenuItem value="College"> College </MenuItem>
                          </Select>
                        </FormControl>
                        {/* <TextValidator 
                            id="outlined-standard-full-width" 
                            multiline 
                            label="" 
                            variant="outlined" 
                            margin="normal" 
                            fullWidth  
                            style={{ marginTop:"20px", left:"0px", right:"10px" }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start" label="Hello">
                                    <AddCircleIcon />
                                    <div style={{ textAlign:"center", width:"100%" }}> <p style={{ paddingTop:"15px", textAlign:"center", marginLeft:"20px", color:"#9BAFBF" }}> Add More Course </p> </div>
                                </InputAdornment>
                                ),
                              }} /> */}

                          {/* <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Availiability</FormLabel>
                            <FormGroup>
                              <FormControlLabel
                                control={<Checkbox checked={this.state.availability} onChange={this.handleCheckBox} name="gilad" />}
                                label="Gilad Gray"
                              />
                            </FormGroup>
                            <FormHelperText>Be careful</FormHelperText>
                          </FormControl> */}
                          <button className="buttonSmall" type="submit"
                          > Next </button>
                        </ValidatorForm>
                      </div>
                    </div>
                  
                    </div>
                }

            </div>
        )
    }
}

export default TutorEducationalInfo