import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/action"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Courses extends Component {
    state = {
        courses: [{
            name: "Yash",
            type:"video",
            url: "google.com",
            sourceName: "Coursera",
            author: "Andrew NG",
            duration: "32 mins"
        }],
        data: {
            type: "student",
            email: "vishal.makwana3@gmail.com",
            password: "abc123"
        }
    }
    /* componentDidMount() {
        fetch("/graph/regions")
            .then(res => res.json())
            .then(data => {
                this.setState({ courses: data })
            })
    } */
    componentDidMount() {
        //this.props.login(this.state.data)
    }

    render() {

        return (
            <>
                {this.state.courses.map(course => (
                    <>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                            <Card.Title>{this.state.name}</Card.Title>
                                <Card.Text>
                                    {`Author: ${course.author}\n${course.sourceName}\nDuration: ${course.duration}`}
                                </Card.Text>
                                <Card.Text>
                                    {`${course.sourceName}`}
                                </Card.Text>
                                <Card.Text>
                                    {`Author: ${course.author}`}
                                </Card.Text>
                                <Button variant="primary">Enroll</Button>
                            </Card.Body>
                        </Card>
                    </>
                ))}
            </>
        );
    }
}
const mapStatetoProps = (state) => {
    console.log(state)
    return {
        courses: state.courses
    }
}

export default connect(mapStatetoProps, actions)(Courses);