import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

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
            courseTeam: ""
        } 
    }


    sendDataToDB = () => {

    }

    render(){
        return(
            <div>
                <Form onSubmit={ this.senDataToDB }>
                    <Form.Group>
                        <Form.Label> Course ID </Form.Label>
                        <Form.Control type="text" placeholder="Name" value={this.state.courseID} onChange={ e => this.setState({ courseID: e.target.value }) } />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Course Name </Form.Label>
                        <Form.Control type="text" placeholder="Email"  value={this.state.courseName} onChange={ e => this.setState({ courseName: e.target.value }) }  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Course Dept </Form.Label>
                        <Form.Control type="text" placeholder=""  value={this.state.dept} onChange={ e => this.setState({ dept: e.target.value }) }  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Description </Form.Label>
                        <Form.Control type="text" placeholder=""  value={this.state.Description} onChange={ e => this.setState({ Description: e.target.value }) }  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Course Room </Form.Label>
                        <Form.Control type="text" placeholder=""  value={this.state.courseRoom} onChange={ e => this.setState({ courseRoom: e.target.value }) }  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Waitlist capacity </Form.Label>
                        <Form.Control type="text" placeholder=""  value={this.state.waitlist} onChange={ e => this.setState({ waitlist: e.target.value }) }  />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Course Team </Form.Label>
                        <Form.Control type="text" placeholder=""  value={this.state.courseTeam} onChange={ e => this.setState({ courseTeam: e.target.value }) }  />
                    </Form.Group>
                    <button type="submit">
                        Submit
                    </button>
                </Form>
            </div>
        )
    }
}

export default AddCourse