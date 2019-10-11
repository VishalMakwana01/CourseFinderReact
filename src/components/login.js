import React, { Component } from 'react';
import "../css/style.css"
import img from "../images/signin-image.jpg"
import "../fonts/material-icon/css/material-design-iconic-font.min.css"
import { connect } from "react-redux"
import * as actions from "../actions/action"
import { Link, Redirect } from "react-router-dom"

class Login extends Component {
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state)
    }
    state = {
        email: "",
        password: "",
        type: "Teacher"
    }
    render() {
        return (
            <>
                {this.props.auth && this.props.auth.code == 200 ?
                    <Redirect to="/"></Redirect>
                    : null
                }
                <div className="main" style={{ minHeight: "100vh" }}>
                    <section className="sign-in">
                        <div className="container">
                            <div className="signin-content">
                                <div className="signin-image">
                                    <figure><img src={img} alt="sign up image" /></figure>
                                    <Link to="/register"><a href="#" className="signup-image-link">Create an account</a></Link>
                                </div>

                                <div className="signin-form">
                                    <h2 className="form-title">Sign In</h2>
                                    <form onSubmit={e => this.handleSubmit(e)} className="register-form" id="login-form">
                                        <div className="form-group">
                                            <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                            <input type="email" name="email" id="your_name" placeholder="Your Email"
                                                onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                            <input type="password" name="password" id="your_pass" placeholder="Password"
                                                onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label for="email"><i class="zmdi zmdi-email"></i></label>
                                            <select class="custom-select custom-select-sm" style={{
                                                borderLeft: "none",
                                                borderTop: "none", borderRight: "none", borderBottom: "1px solid #999",
                                                padding: "6px 30px", borderRadius: "0px"
                                            }} name="type" onChange={this.handleChange}>
                                                <option value="Teacher">Teacher</option>
                                                <option value="Student">Student</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                            <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                                        </div>

                                        <div className="form-group form-button">
                                            <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>);
    }
}

const mapStatetoProps = (state) => {
    console.log(state)
    return {
        auth: state.auth
    }
}
export default connect(mapStatetoProps, actions)(Login);