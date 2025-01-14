import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { NotificationManager as notify } from 'react-notifications';
import { Link } from 'react-router-dom';
import LabeledInput from '../../common/LabeledInput';
import Button from '../../common/Button';
import SelectOption from '../../common/SelectOption';
import TextArea from '../../common/Textarea';
import userSchema from '../../utils/validationSchemas/userSchema';
import handymanSchema from '../../utils/validationSchemas/handymanSchema';
import './style.css';

class Signup extends Component {
  state = {
    account: {
      username: '',
      email: '',
      phone: undefined,
      password: '',
      confirmPassword: '',
      country: '',
      city: '',
      isHandyman: false,
      jobTitle: undefined,
      hourRate: undefined,
      description: '',
    },
    jobs: null,
    userValidation: {},
    handymanValidation: {},
  };

  componentDidMount = async () => {
    const {
      data: { data },
    } = await axios.get('/api/v1/services');
    this.setState({ jobs: data });
  };

  changeRole = async e => {
    const {
      account: { ...account },
    } = this.state;
    const { jobs: data } = this.state;

    if (e.target.value === '2') {
      account.isHandyman = true;
      account.jobTitle = data[0].id;
      this.setState({ account });
    } else {
      account.isHandyman = false;
      account.jobTitle = null;
      this.setState({ account });
    }
  };

  changeJob = e => {
    const {
      account: { ...account },
    } = this.state;
    account.jobTitle = e.target.value;
    this.setState({ account });
  };

  handleValidationError = (err, isHandyman) => {
    const errorObj = {};
    err.inner.forEach(fieldError => {
      errorObj[fieldError.path] = fieldError.message;
    });
    if (isHandyman) {
      this.setState({ handymanValidation: errorObj });
    } else {
      this.setState({ userValidation: errorObj });
    }
    notify.error('please fill all inputs');
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ userValidation: {}, handymanValidation: {} });
    const { history } = this.props;
    const {
      account: { ...signUpAccount },
    } = this.state;

    try {
      await userSchema.validate(signUpAccount, {
        abortEarly: false,
      });
    } catch (err) {
      if (err.name === 'ValidationError') {
        this.handleValidationError(err, false);
      } else {
        history.push('/500');
      }
    }

    if (signUpAccount.isHandyman) {
      try {
        await handymanSchema.validate(signUpAccount, {
          abortEarly: false,
        });
      } catch (err) {
        if (err.name === 'ValidationError') {
          this.handleValidationError(err, true);
        } else {
          history.push('/500');
        }
      }
    }

    const { userValidation, handymanValidation } = this.state;
    if (
      Object.keys(userValidation).length === 0 &&
      Object.keys(handymanValidation).length === 0
    ) {
      const { account } = this.state;
      const { handleLogIn } = this.props;
      try {
        await axios.post('/api/v1/signup', account);
        handleLogIn();
      } catch (err) {
        if (err.response && err.response.data.message) {
          let { message } = err.response.data;

          if (message.includes('unique')) {
            if (message.includes('email')) {
              message = 'email already exists';
            }
          }
          return notify.error(message);
        }
      }
      notify.success('account created successfully');
      return history.push('/services');
    }
    return true;
  };

  handleChange = ({ currentTarget: input }) => {
    const {
      account: { ...account },
    } = this.state;

    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { userValidation, handymanValidation, account, jobs } = this.state;
    return (
      <form className="signup-form">
        <LabeledInput
          label="Username"
          type="text"
          placeHolder="enter your username"
          name="username"
          value={account.username}
          onChange={this.handleChange}
        />
        {userValidation.username && (
          <span className="username err-msg">
            {userValidation.username ? 'please Enter your username' : ''}
          </span>
        )}
        <LabeledInput
          label="Email"
          type="email"
          placeHolder="enter your email"
          name="email"
          value={account.email}
          onChange={this.handleChange}
        />
        {userValidation.email && (
          <span className="email err-msg">
            {userValidation.email ? 'please enter you email' : ''}
          </span>
        )}
        <LabeledInput
          label="Phone No."
          type="text"
          placeHolder="enter your Phone number"
          name="phone"
          value={account.phone}
          onChange={this.handleChange}
        />
        {userValidation.phone && (
          <span className="phone err-msg">
            {userValidation.phone ? 'enter valid phone number please !!' : ''}
          </span>
        )}
        <LabeledInput
          label="Password"
          type="password"
          placeHolder="enter your password"
          name="password"
          value={account.password}
          onChange={this.handleChange}
        />
        {userValidation.password && (
          <span className="password">
            {userValidation.password ? 'please enter your password !!!' : ''}
          </span>
        )}
        <LabeledInput
          label="Confirm Password"
          type="password"
          placeHolder="confirm password"
          name="confirmPassword"
          value={account.confirmPassword}
          onChange={this.handleChange}
        />
        {userValidation.confirmPassword && (
          <span className="confirmPassword err-msg">
            {userValidation.confirmPassword ? 'the password must be match' : ''}
          </span>
        )}
        <LabeledInput
          label="Country"
          type="text"
          placeHolder="enter your country"
          name="country"
          value={account.country}
          onChange={this.handleChange}
        />
        {userValidation && (
          <span className="country err-msg">
            {userValidation.country ? 'please enter your country !!!' : ''}
          </span>
        )}
        <LabeledInput
          label="City"
          type="text"
          placeHolder="enter your city"
          name="city"
          value={account.city}
          onChange={this.handleChange}
        />
        {userValidation.city && (
          <span className="city err-msg">
            {userValidation.city ? 'please enter your city ' : ''}
          </span>
        )}
        <SelectOption
          label="Role"
          selectName="isHandyman"
          options={[{ id: 1, name: 'client' }, { id: 2, name: 'handyman' }]}
          onChange={this.changeRole}
        />
        {account.isHandyman ? (
          <React.Fragment>
            <SelectOption
              label="Job Title"
              selectName="jobTitle"
              options={jobs}
              value={account.jobTitle}
              onChange={this.changeJob}
            />
            <LabeledInput
              label="Hour Rate"
              type="text"
              placeHolder="enter hr's rate"
              name="hourRate"
              value={account.hourRate}
              onChange={this.handleChange}
            />
            {handymanValidation.hourRate && (
              <span className="hourRate err-msg">
                {handymanValidation.hourRate ? 'please enter valid rate' : ''}
              </span>
            )}
            <TextArea
              label="Bio"
              placeHolder="tell us about your self"
              rows={5}
              cols={5}
              name="description"
              value={account.description}
              onChange={this.handleChange}
            />
            {handymanValidation.description && (
              <span className="description err-msg">
                {handymanValidation.description
                  ? 'you might prefer add some info'
                  : ''}
              </span>
            )}
          </React.Fragment>
        ) : null}

        <Button className="submit--button" onClick={this.handleSubmit}>
          Sign Up
        </Button>
        <p className="signup-text">
          already have account? <Link to="/login">login here</Link>
        </p>
      </form>
    );
  }
}

Signup.propTypes = {
  history: PropTypes.objectOf().isRequired,
  handleLogIn: PropTypes.objectOf().isRequired,
};

export default Signup;
