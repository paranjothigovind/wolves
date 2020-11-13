import React, { Component } from 'react'
import AddCourse from './AddCourse'

class Faculty extends Component {
    render(){
        return(
            <div>
                <div className="container" style={{ marginTop: '50px', width: '600px' }}>
                    <AddCourse />
                </div>
            </div>
        )
    }
}

export default Faculty