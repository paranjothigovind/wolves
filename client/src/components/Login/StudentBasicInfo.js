import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { MDBInput } from "mdbreact";

class StudentBasicInfo extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            age:"",
            name:"",
            email:"",
            DOB: {
              date: new Date('2000-01-01T21:11:54'),
            },
            parentDOB: {
              date: new Date('1990-01-01T21:11:54'),
            }
        }
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleDOB = this.handleDOB.bind(this);
    }
    handleChangeAge = (event) => {
       this.setState({
           age: event.target.value
       })
    };

    onChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
        console.log(this.state.name);
    }

    onChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
        console.log(this.state.email);
    }

   handleDOB = (date) => {
    this.setState(state => ({
      DOB: {
        ...state.DOB,
        date,
      }
    }));
  }

  
  handleParentDOB = (date) => {
    this.setState(state => ({
      parentDOB: {
        ...state.parentDOB,
        date,
      }
    }));
  }

  handleChange = () => {
      var name = this.state.name;
      this.props.fetchName(name);
      this.props.fetchEmail(this.state.email)
      this.props.fetchGender(this.state.age)
      this.props.fetchDOB(this.state.DOB.date.toDateString())
      this.props.fetchParentDOB(this.state.parentDOB.date.toDateString())
      this.props.setView()
    }
  
    render(){
        const { age } = this.state;
        return(
            <div >
                <h6 style={{ fontWeight:"900", fontSize:"28px", marginTop:"30px" }}> Perfect! </h6>
                <p style={{ fontWeight:"700", color:"#226CD5" }}> Let's Create your student profile </p>
                <p style={{ fontWeight:"700", color:"#9BAFBF" }}> Let's go ahead with your basic information </p>
                <div className="row">
                  <div className="col-11"> 
                  <ValidatorForm
                      ref="form"
                      onSubmit={this.handleChange}
                      onError={errors => console.log(errors)}
                  >
                    <TextValidator  
                        id="outlined-standard-full-width" 
                        label="Enter your Name" 
                        variant="outlined" 
                        margin="normal"  
                        fullWidth 
                        multiline
                        style={{ marginTop:"30px", left:"0%",  right:"10px" }} 
                        value={this.state.name}
                        onChange={this.onChangeName} 
                        validators={['required']}
                        errorMessages={['this field is required']}
                    />
                    {/* <MDBInput label="Example label" outline size="lg" /> */}
                    <TextValidator  
                        id="outlined-standard-full-width" 
                        label="Enter your Email" 
                        variant="outlined" 
                        margin="normal" 
                        fullWidth 
                        multiline
                        style={{  marginTop:"20px", left:"0%", right:"10px" }}
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        validators={['required', 'isEmail']}
                        errorMessages={['this field is required', 'Email is not valid']}
                      />
                    <FormControl variant="outlined" style={{ minWidth:"100%", marginTop:"20px" }}
                      validators={['required']}
                      errorMessages={['this field is required']}>
                      <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
                      <TextValidator>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={this.state.age}
                        fullWidth
                        onChange={this.handleChangeAge}
                        label="Select your gender"
                      
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Male</MenuItem>
                        <MenuItem value={20}>Female</MenuItem>
                      </Select>
                      </TextValidator>
                    </FormControl>
                    <FormControl variant="outlined" style={{ minWidth:"100%", marginTop:"10px" }} >
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          variant="inline"
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="date-picker-inline"
                          multiline
                          label={<div style={{ fontSize:"20px", fontWeight: 700, opacity:0.7 }} > Date of Birth </div>}
                          onChange={this.handleDOB}
                          value={this.state.DOB.date}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                          validators={['required']}
                          errorMessages={['this field is required']}
                        />
                      </MuiPickersUtilsProvider>
                    </FormControl>

                    <FormControl variant="outlined" style={{ minWidth:"100%", marginTop:"10px" }} >
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          variant="inline"
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="date-picker-inline"
                          multiline
                          label={<div style={{ fontSize:"20px", fontWeight: 700, opacity:0.7}} > Parent's Date of Birth </div>}
                          onChange={this.handleParentDOB}
                          value={this.state.parentDOB.Date}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />
                      </MuiPickersUtilsProvider>
                    </FormControl>
                    
                    <button className="buttonSmall"  type="submit"> Next </button>
                    </ValidatorForm>
                  </div>
                </div>
            </div>
        )
    }
}

export default StudentBasicInfo