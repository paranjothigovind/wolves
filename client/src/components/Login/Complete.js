import React from 'react'
import {Link} from 'react-router-dom'
import yupie from '../../assets/img/yupie.PNG'

const StudentComplete = (props) => {
    return(
        <div>
            <h6 style={{ fontWeight:"900", fontSize:"28px", marginTop:"30px" }}> Yuppiiee! </h6>
            <p style={{ fontWeight:"700", color:"#9BAFBF" }}> Your profile is now completed. </p>
            <img src={yupie} alt='' style={{ height:"260px" }} />
            <Link to={'/dashboard'} ><button className="buttonSmall" onClick={ props.pushToDB } > Let's Go! </button></Link>
        </div>
    )
} 

export default StudentComplete