import React, { Component } from 'react'

class Faculty extends Component {
    render(){
        return(
            <div>
                <div className="container" style={{ marginTop: '50px' }}>
                    <button
                        style={{
                            width: "200px",
                            borderRadius: "3px",
                            letterSpacing: "1.5px",
                            marginTop: "1rem"
                        }}
                        className="btn btn-large  waves-light  blue "
                    >
                        Add Course
                    </button>
                </div>
            </div>
        )
    }
}

export default Faculty