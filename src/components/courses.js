import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/action"
class Courses extends Component {
    state = {
        courses: [],
        data: {
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
        //this.props.login()
    }
    render() {
        console.log(this.state.courses)
        return (
            <>
                {this.state.courses.map(course => (
                    <>
                        <h1>{course.Name}</h1>
                        <h3>{course.Type}</h3>
                        <a href={course.Url}>Link</a>
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