import Axios from 'axios';
import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import AddCourse from './AddCourse'
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Faculty = () => {

        const [ addCourse, setAddCourse ] = React.useState(false)

        // React.useEffect(()=>{
        //     Axios.get('http://localhost:5000')
        // })

        return(
            <div>
                <div className="container"> 
                    <button className="btn btn-large waves-effect waves-light hoverable blue accent-3" onClick={()=> setAddCourse(true)} >
                        Add Course
                    </button>
                </div>
               {
                   addCourse
                   &&
                   <div className="container" style={{ marginTop: '50px', width: '600px' }}>
                        <AddCourse />
                    </div>
               }
               <div className="container">
                    <Card>
                        <Card.Title>
                            Course
                        </Card.Title>
                    </Card>
               </div>
            </div>
        )
}

Faculty.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
  )(Faculty);
  