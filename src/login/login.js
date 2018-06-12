import React, { Component } from 'react';
import Popup from "reactjs-popup";
// import logo from './logo.svg';
import './login.css';

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            islogin: false
        }
    }
    loginClick(e) {


        this.setState({
            username: e.target.value,
            password: e.target.value,
            islogin: true

        });
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

    // console.log("this"+this)
}


render() {
    return (
        <div className="loginBox">
            <div>
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" onBlur={({ target }) => this.setState({ username: target.value })} required />

                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" onBlur={({ target }) => this.setState({ password: target.value })} required />

                <button onClick={(e) => this.loginClick(e)}>Login</button>
                <label><input type="checkbox" name="remember" /> Remember me</label>
            </div>
        </div>
    );
}
}

export default login;
