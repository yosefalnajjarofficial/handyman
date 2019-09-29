import React, { Component } from 'react';

import LabeldInput from '../../common/LabeledInput';
import Button from '../../common/Button';
import './style.css';

class Login extends Component {
  state = {};

  render() {
    return (
      <div className="loginContainer">
        <div className="loginContainer_input">
          <h1 className="loginContainer__head">Login</h1>
          <LabeldInput
            htmlFor="username"
            label="Username"
            id="1"
            type="text"
            placeHolder=""
            name="username"
          />
          <LabeldInput
            htmlFor="password"
            label="Password"
            id="2"
            type="password"
            placeHolder=""
            name="password"
          />
          <p>
            If you don't have an account <a href="#2">Sign Up</a>
          </p>
        </div>
        <div className="loginContainer__action">
          <Button className="loginContainer__btn" onClick={undefined} children>
            Log In
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
