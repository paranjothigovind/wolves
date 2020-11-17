import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

class StudentEducationalInfo extends Component{
    
    constructor(props){
        super(props);
        this.state ={
           schoolName : "",
           grade:"",
           stream:""
        }
        this.handleChangeGrade = this.handleChangeGrade.bind(this);
        this.handleChangeStream = this.handleChangeStream.bind(this);
    }

    handleChangeStream = (event) => {
       this.setState({
           stream: event.target.value
       })
    };

    handleChangeGrade = (event) => {
        this.setState({
            grade: event.target.value
        })
     };

    onChangeSchoolName = (event) => {
        this.setState({
            schoolName: event.target.value
        })
    }



  handleChange = () => {
      this.props.fetchSchoolName(this.state.schoolName);
      this.props.fetchGrade(this.state.grade)
      this.props.fetchStream(this.state.stream)
      this.props.setView()
    }
  
    render(){
        const { age } = this.state;
        return(
            <div>
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
                            <TextValidator  id="outlined-standard-full-width" 
                                        label="Enter your School name" 
                                        variant="outlined" 
                                        margin="normal"  
                                        fullWidth 
                                        multiline
                                        style={{ marginTop:"20px", left:"0%",  right:"10px" }} 
                                        value={this.state.schoolName}
                                        validators={['required']}
                                        errorMessages={['this field is required']}
                                        onChange={this.onChangeSchoolName} />
                            <FormControl variant="outlined" style={{ minWidth:"100%", marginTop:"20px" }} >
                              <InputLabel id="demo-simple-select-outlined-label">Select your Stream</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={this.state.stream}
                                    fullWidth
                                    onChange={this.handleChangeStream}
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
                            <FormControl variant="outlined" style={{ minWidth:"100%", marginTop:"30px" }} >
                              <InputLabel id="demo-simple-select-outlined-label">Select your Grade</InputLabel>
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
                                    <MenuItem value="Elementary">Elementary </MenuItem>
                                    <MenuItem value="Middle">Middle</MenuItem>
                                    <MenuItem value="High">High</MenuItem>
                                    <MenuItem value="College">College</MenuItem>
                                </Select>
                            </FormControl>
                            <button className="buttonSmall" type="submit"> Next </button>
                            </ValidatorForm> 
                          </div>
                        </div>
            </div>
        )
    }
}

export default StudentEducationalInfo