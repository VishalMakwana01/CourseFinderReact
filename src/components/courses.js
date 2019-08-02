import React, { Component } from 'react';
class Courses extends Component {
    state = {
        courses: []
    }
    componentWillMount() {
        fetch("/courses")
            .then(res => res.json())
            .then(data => {
                this.setState({ courses: data })
            })
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

export default Courses;