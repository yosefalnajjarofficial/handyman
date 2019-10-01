import React, { Component } from 'react';
import axios from 'axios';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import loginSchema from '../../utils/validationSchemas/loginSchema';
import LabeldInput from '../../common/LabeledInput';
import Button from '../../common/Button';
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
      NotificationManager.success('Log In Successfully');
      setTimeout(() => {
        const { history } = this.props;
        history.push('/');
      }, 2000);
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
    const {
      account: { email: emailAccount, password: passwordAccount },
      error: { email: emailError, password: passwordError },
    } = this.state;
    return (
      <form>
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
              placeHolder="Ex.fadi@gmail.com"
              name="email"
              value={emailAccount}
              onChange={this.handleChange}
            />
            {emailError && <span className="errorMessage">{emailError}</span>}
            <LabeldInput
              htmlFor="password"
              label="Password"
              id="2"
              type="password"
              placeHolder="********"
              name="password"
              value={passwordAccount}
              onChange={this.handleChange}
            />
            {passwordError && (
              <span className="errorMessage">{passwordError}</span>
            )}
            <p className="loginContainer__signup">
              If you don't have an account{' '}
              <Link className="signUpLink" to="/signup">
                Sign Up
              </Link>
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

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Login;
