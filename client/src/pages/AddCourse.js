import Axios from 'axios';
import { authenticate } from 'passport';
import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import PropTypes from "prop-types";
import { connect } from "react-redux";

class AddCourse extends Component{

    constructor(props){
        super(props);
        this.state = {
            courseID: "",
            courseName: "",
            dept: "",
            Description: "",
            waitlist: "",
            courseRoom: "",
            courseTeam: "",
            setUser: [],
            currentUser: [],
            email: "",
            setCurrentUserEmail: ""

        } 
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/tutor/findByEmail/' + this.props.auth.user.email)
            .then(res => {
                const currentUser = res.data
                this.setState({
                    currentUser,
                })
            })
    }

    sendDataToDB = (event) => {
        event.preventDefault();
        const courseData = {
            courseId: this.state.courseID,
            courseName: this.state.courseName,
            courseDept: this.state.dept,
            description: this.state.Description,
            courseRoom: this.state.courseRoom,
            courseTeam: this.state.courseTeam,
            waitListCapacity: this.state.waitlist
        }
        Axios.put('http://localhost:5000/tutor/course/'+ ( this.state.currentUser.map(data => { return data._id }) ), courseData)
            .then(res => alert(res.data, "Updated"))

        this.setState({ AddCourse: false })
    }

    render(){
        return(
            <div>
                <Form onSubmit={()=> this.senDataToDB }>
                    <Form.Group>
                        <Form.Label> Course ID </Form.Label>
                        <Form.Control type="text" placeholder="Course ID" value={this.state.courseID} onChange={ e => this.setState({ courseID: e.target.value }) } />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Course Name </Form.Label>
                        <Form.Control type="text" placeholder="Course Name"  value={this.state.courseName} onChange={ e => this.setState({ courseName: e.target.value }) }  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Course Dept </Form.Label>
                        <Form.Control type="text" placeholder="Course Department"  value={this.state.dept} onChange={ e => this.setState({ dept: e.target.value }) }  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Description </Form.Label>
                        <Form.Control type="text" placeholder="Description"  value={this.state.Description} onChange={ e => this.setState({ Description: e.target.value }) }  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Course Room </Form.Label>
                        <Form.Control type="text" placeholder="Course Room"  value={this.state.courseRoom} onChange={ e => this.setState({ courseRoom: e.target.value }) }  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Waitlist capacity </Form.Label>
                        <Form.Control type="text" placeholder="Waitlist capacity"  value={this.state.waitlist} onChange={ e => this.setState({ waitlist: e.target.value }) }  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Course Team </Form.Label>
                        <Form.Control type="text" placeholder="Course Team"  value={this.state.courseTeam} onChange={ e => this.setState({ courseTeam: e.target.value }) }  />
                    </Form.Group>
                    <button onClick={this.sendDataToDB} className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                        Submit
                    </button>
                </Form>
            </div>
        )
    }
}

AddCourse.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
  )(AddCourse);
  