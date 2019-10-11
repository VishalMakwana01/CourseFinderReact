import React, { Component } from 'react';
import "../css/style.css"
import img from "../images/signup-image.jpg"
import "../fonts/material-icon/css/material-design-iconic-font.min.css"
import { connect } from "react-redux"
import * as actions from "../actions/action"
import { Link } from "react-router-dom"

class Register extends Component {
    componentDidMount() {

    }
    state = {}
    render() {
        return (
            <div className="main">
                <section class="signup">
                    <div class="container">
                        <div class="signup-content">
                            <div class="signup-form">
                                <h2 class="form-title">Sign up</h2>
                                <form method="POST" class="register-form" id="register-form">
                                    <div class="form-group">
                                        <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                        <input type="text" name="name" id="name" placeholder="Your Name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="email"><i class="zmdi zmdi-email"></i></label>
                                        <input type="email" name="email" id="email" placeholder="Your Email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="age"><i class="zmdi zmdi-face"></i></label>
                                        <input type="number" name="age" id="age" placeholder="Your age" />
                                    </div>
                                    <div className="form-group">
                                        <label for="email"><i class="zmdi zmdi-email"></i></label>
                                        <select class="custom-select custom-select-sm" style={{
                                            borderLeft: "none",
                                            borderTop: "none", borderRight: "none", borderBottom: "1px solid #999",
                                            padding: "6px 30px", borderRadius: "0px"
                                        }}>
                                            <option value="Teacher">Teacher</option>
                                            <option value="Student">Student</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="institute"><i class="zmdi zmdi-home"></i></label>
                                        <input type="text" name="institute" id="institute" placeholder="Your Institute" />
                                    </div>
                                    <div class="form-group">
                                        <label for="department"><i class="zmdi zmdi-home"></i></label>
                                        <input type="text" name="department" id="department" placeholder="Your Department" />
                                    </div>
                                    <div class="form-group">
                                        <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                        <input type="password" name="pass" id="pass" placeholder="Password" />
                                    </div>
                                    <div class="form-group">
                                        <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                        <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                                        <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                                    </div>
                                    <div class="form-group form-button">
                                        <input type="submit" name="signup" id="signup" class="form-submit" value="Register" />
                                    </div>
                                </form>
                            </div>
                            <div class="signup-image">
                                <figure><img src={img} alt="sing up image" /></figure>
                                <Link to="/login"> <a href="#" class="signup-image-link">I am already member</a></Link>
                            </div>
                        </div>
                    </div>
                </section>

            </div>);
    }
}

const mapStatetoProps = (state) => {
    console.log(state)
    return {
    }
}
export default connect(mapStatetoProps, actions)(Register);