import React, { Component } from 'react';
import axios from 'axios';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

import loginSchema from '../../utils/validationSchemas/loginSchema';
import LabeldInput from '../../common/LabeledInput';
import Button from '../../common/Button';
import 'react-notifications/lib/notifications.css';
import './style.css';

class Login extends Component {
  state = {
    account: {
      email: '',
      password: '',
    },
    error: {},
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { account: loginAccount } = this.state;
    try {
      await loginSchema.validate(loginAccount, {
        abortEarly: false,
      });
      await axios.post('/api/v1/login', loginAccount);
    } catch (err) {
      if (err.name === 'ValidationError') {
        const errorObj = {};
        err.inner.forEach(fieldError => {
          errorObj[fieldError.path] = fieldError.message;
        });
        this.setState({ error: errorObj });
      } else {
        NotificationManager.error(err.response.data.message);
      }
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const { account: loginAccount } = this.state;
    const account = { ...loginAccount };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account, error } = this.state;
    return (
      <form onSubmit={this.handleSubmit} action="">
        <NotificationContainer />
        <div className="loginContainer">
          <div className="loginContainer_input">
            <h1 className="loginContainer__head">Log In</h1>
            <LabeldInput
              autoFocus
              htmlFor="email"
              label="Email"
              id="1"
              type="text"
              placeHolder="ex.fadi"
              name="email"
              value={account.email}
              onChange={this.handleChange}
            />
            {error.email && <span className="errorMessage">{error.email}</span>}
            <LabeldInput
              htmlFor="password"
              label="Password"
              id="2"
              type="password"
              placeHolder="*********"
              name="password"
              value={account.password}
              onChange={this.handleChange}
            />
            {error.password && (
              <span className="errorMessage">{error.password}</span>
            )}
            <p className="loginContainer__signup">
              If you don't have an account{' '}
              <a className="signUpLink" to="/signup">
                Sign Up
              </a>
            </p>
          </div>
          <div className="loginContainer__action">
            <Button className="loginContainer__btn" onClick={this.handleSubmit}>
              Log In
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
