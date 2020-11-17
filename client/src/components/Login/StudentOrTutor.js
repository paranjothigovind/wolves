import React, { Component } from 'react'
import Style from './MobileNumber.module.css'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const StudentOrTutor = (props) =>{
        return(
            <div className={Style.pageContainer}>
                <p className={Style.header}> Perfect! </p>
                <p className={Style.subHeader}> Let's create your profile </p>
                <button className="buttonAppBar" onClick={e => props.setStudentView() } >Join As Student</button>
                <button className="buttonAppBar" onClick={e => props.setTutorView() } >Join As Tutor</button>
            </div>
        );
}

export default StudentOrTutor