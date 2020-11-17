import Axios from 'axios'
import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

class StudentProfile extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: "",
            email: "",
            phoneNumber: "",
            about: "",
            city: "",
            country: "",
            company: "",
            schooName: "",
            homeTown: "",
            lanugages: ""
        }
    }

    sendDataToDB = () => {
        // Axios.get('http://localhost:5000/student/email/'+ this.props.auth.user.email)
        //     .then(res => )
    }


    render(){
        return(
            <div className="container">
                <Form onSubmit={this.sendDataToDB}>
                    <Form.Group>
                        <Form.Label> Name </Form.Label>
                        <Form.Control type="text" placeholder="Name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Email </Form.Label>
                        <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Phone Number </Form.Label>
                        <Form.Control type="number" placeholder="Phone Number" value={this.state.phoneNumber} onChange={e => this.setState({ phoneNumber: e.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> About Me </Form.Label>
                        <Form.Control type="text" placeholder="About me" value={this.state.about} onChange={e => this.setState({ about: e.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> City </Form.Label>
                        <Form.Control type="text" placeholder="City" value={this.state.city} onChange={e => this.setState({ city: e.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Country </Form.Label>
                        <Form.Control type="text" placeholder="Country" value={this.state.country} onChange={e => this.setState({ country: e.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Company </Form.Label>
                        <Form.Control type="text" placeholder="Company" value={this.state.company} onChange={e => this.setState({ company: e.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> School Name </Form.Label>
                        <Form.Control type="text" placeholder="School Name" value={this.state.schooName} onChange={e => this.setState({ schoolName: e.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Home town</Form.Label>
                        <Form.Control type="text" placeholder="Home Town" value={this.state.homeTown} onChange={e => this.setState({ homeTown: e.target.value })} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Lanugages </Form.Label>
                        <Form.Control type="text" placeholder="Languages" value={this.state.lanugages} onChange={e => this.setState({ lanugages: e.target.value })} />
                    </Form.Group>
                    <button style={{ marginBottom: "200px", marginTop: '50px' }} type="submit" className="btn btn-large waves-effect waves-light hoverable blue accent-3"> Submit </button>
                </Form>
            </div>
        )
    }
}
StudentProfile.propTypes = {
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(
    mapStateToProps,
  )(StudentProfile);