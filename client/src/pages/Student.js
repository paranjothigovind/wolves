import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Student extends Component {
    render(){
        return(
            <div>
                <div className="container">
                    <Link to={'/studentprofile'}> <button className="btn btn-large waves-effect waves-light hoverable blue accent-3"> Edit Profile</button> </Link>
                </div>
            </div>
        )
    }
}

export default Student