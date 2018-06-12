import React, { Component } from 'react';
import Popup from "reactjs-popup";
// import logo from './logo.svg';
import './login.css';

class login extends Component {

    loginClick() {
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
            <div className="loginBox">
                <div>
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button onClick={(e) => this.loginClick(e)}>Login</button>
                    <label><input type="checkbox" name="remember" /> Remember me</label>
                </div>                
            </div>
        );
    }
}

export default login;
