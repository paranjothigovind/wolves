import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'

class AddCourse extends Component{
    render(){
        return(
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label> Name </Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Email </Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Phone Number </Form.Label>
                        <Form.Control type="number" placeholder="" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> About Me </Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> City </Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Country </Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Company </Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> School Name </Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Home town</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> Lanugages </Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label> About Me </Form.Label>
                        <Form.Control type="Gender" placeholder="" />
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default AddCourse