import React, { Component } from 'react'
import Style from './MobileNumber.module.css'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const OTP = (props) => {
        return(
            <div className={Style.pageContainer}>
                <p className={Style.header}> Join VTS </p>
                <p className={Style.subHeader}> <span style={{ fontWeight: 500, color:"#000000" }}>or </span> login to your account </p>
                <TextField  
                    id="outlined-standard-full-width" 
                    label="Enter OTP" 
                    variant="outlined" 
                    margin="normal" 
                    multiline
                    fullWidth 
                    style={{ marginTop:"30px", margin:"8", right:"10px" }}
                    onChange={props.propsOTP}
                />
                <button
                    style={{ 
                        borderRadius:"5px",
                        backgroundColor:"#226CD5",
                        width:"100px",
                        height:"40px",
                        borderColor:"transparent",
                        color:"white",
                        marginTop:"12px"
                    }}
                    onClick={e => props.setView()}
                    >
                    Login
                </button>
            </div>
        );
}

export default OTP