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
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
class StudentBankInfo extends Component{
    
    constructor(props){
        super(props);
        this.state ={
           cardNumber:"",
           cardCVV: "",
           nameOnCard: "",
           bank:""
        }
        this.handleChangeCardNumber = this.handleChangeCardNumber.bind(this);
        this.handleChangeCardCVV = this.handleChangeCardCVV.bind(this);
        this.handleChangeNameOnCard = this.handleChangeNameOnCard.bind(this);
        this.handleChangeBank = this.handleChangeBank.bind(this);
    }

    handleChangeCardNumber = (event) => {
       this.setState({
           cardNumber: event.target.value
       })
    };

    handleChangeCardCVV = (event) => {
        this.setState({
            cardCVV: event.target.value
        })
     };

     handleChangeNameOnCard = (event) => {
        this.setState({
            nameOnCard: event.target.value
        })
    }

    handleChangeBank = (event) => {
        this.setState({
            bank: event.target.value
        })
    }



  handleChange = () => {
      this.props.fetchBank(this.state.bank);
      this.props.fetchCardNumber(this.state.cardNumber)
      this.props.fetchCardCVV(this.state.cardCVV)
      this.props.fetchNameOnCard(this.state.nameOnCard)
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
                          <FormControl variant="outlined" style={{ minWidth:"100%", marginTop:"10px" }} >
                              <InputLabel id="demo-simple-select-outlined-label">Select your bank</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={this.state.bank}
                                    fullWidth
                                    multiline

                                    onChange={this.handleChangeBank}
                                    label="Select your Grade"
                                >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="HDFC">HDFC </MenuItem>
                                    <MenuItem value="ICICI">ICICI</MenuItem>
                                    <MenuItem value="SBI">SBI</MenuItem>
                                    <MenuItem value="Indusland">Indusland</MenuItem>
                                </Select>
                            </FormControl>
                            <TextValidator  id="outlined-standard-full-width" 
                                        label="Enter your Card number" 
                                        variant="outlined" 
                                        margin="normal"  
                                        fullWidth 
                                        multiline
                                        style={{ marginTop:"30px", left:"0%",  right:"10px" }} 
                                        value={this.state.cardNumber}
                                        onChange={this.handleChangeCardNumber} 
                                        validators={['required', 'isNumber' ]}
                                        errorMessages={['this field is required','Card Number must be a number type']}
                            />

                            <TextValidator  id="outlined-standard-full-width" 
                                        label="Enter Card CVV" 
                                        variant="outlined" 
                                        margin="normal"  
                                        fullWidth 
                                        multiline
                                        style={{ marginTop:"30px", left:"0%",  right:"10px" }} 
                                        value={this.state.cardCVV}
                                        onChange={this.handleChangeCardCVV} 
                                        validators={['required', 'isNumber' ]}
                                        errorMessages={['this field is required','Card CVV must be a number type']}
                            />

                            <TextValidator  id="outlined-standard-full-width" 
                                        label="Enter name on the card" 
                                        variant="outlined" 
                                        margin="normal"  
                                        fullWidth 
                                        multiline
                                        style={{ marginTop:"30px", left:"0%",  right:"10px" }} 
                                        value={this.state.nameOnCard}
                                        onChange={this.handleChangeNameOnCard} 
                                        validators={['required', 'isString' ]}
                                        errorMessages={['this field is required','Name must be a String type']}
                            />
                            
                           
                            <button className="buttonSmall" type="submit"> Next </button>
                            </ValidatorForm>
                          </div>
                        </div>
            </div>
        )
    }
}

export default StudentBankInfo