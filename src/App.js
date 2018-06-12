import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import homeimage from './images/702.jpg';
import './App.css';
import login from './login/login';
import signup from './signup/signup';
import forgotPassword from './forgotPassword/forgotPassword'
import Request from 'superagent'

class App extends Component {
  constructor() {
		super();
		this.state = {
			shown: true,
		};
	}	
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">TMS</h1>
        </header>
        <Router>
          <div>
            <ul>
              <li><Link to={'/'} >login</Link></li>
              <li><Link to={'/Signup'}>Signup</Link></li>
            </ul>
            <hr />
            <Switch>
              <Route exact path='/' component={login} />
              <Route exact path='/Signup' component={signup} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
