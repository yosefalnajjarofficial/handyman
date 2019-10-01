import React, { Component } from 'react';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
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
    const { account } = this.state;

    try {
      this.setState({ error: {} });
      await loginSchema.validate(account, {
        abortEarly: false,
      });
      await axios.post('/api/v1/login', account);
      NotificationManager.success('Welcome Back');
      const { history } = this.props;
      history.push('/');
    } catch (err) {
      if (err.name === 'ValidationError') {
        const errorObj = {};
        err.inner.forEach(fieldError => {
          errorObj[fieldError.path] = fieldError.message;
        });
        NotificationManager.error('Check your email or password');
        this.setState({ error: errorObj });
      } else if (err.response.status === 404) {
        const { history } = this.props;
        NotificationManager.warning('Page Not Found');
        history.push('/404');
      } else if (err.response.data.message) {
        NotificationManager.error(err.response.data.message);
      } else {
        const { history } = this.props;
        history.push('/500');
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
        <div className="loginContainer">
          <div className="loginContainer_input">
            <h1 className="loginContainer__head">Log In</h1>
            <LabeldInput
              autoFocus
              label="Email"
              type="text"
              placeHolder="Ex. fadi@gmail.com"
              name="email"
              value={emailAccount}
              onChange={this.handleChange}
            />
            {emailError && <span className="errorMessage">{emailError}</span>}
            <LabeldInput
              label="Password"
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
