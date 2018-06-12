import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Popup from "reactjs-popup";
// import logo from './logo.svg';
import './signup.css';



class signup extends Component {
    signupClick() {
        console.log('clicked login');
        console.log('this is:', this);

        fetch("https://api.example.com/items")
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
            )
    }

    render() {
        return (
            <div className="signup">

                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr />
                <label ><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required />

                <label ><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />

                <label><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
                <label>
                    <input type="checkbox" name="remember" /> Remember me
                </label>
                <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>

                <nav>
                    <div className="clearfix">
                        {/* <button type="button" className="cancelbtn" onClick>Cancel</button>
                    <button type="submit" className="signupbtn">Sign Up</button> */}
                        <ul>
                            <li><Link to={'/'} className="cancelbtn">Cancel</Link></li>
                            <button type="submit" className="signupbtn" onClick={(e) => this.signupClick(e)}>Sign Up</button>
                        </ul>
                    </div>
                </nav>

            </div>
        );
    }
}

export default signup;
