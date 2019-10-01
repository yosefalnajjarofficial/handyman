import React, { Component } from 'react';
import axios from 'axios';
import { NotificationManager as notify } from 'react-notifications';

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

  changeRole = async e => {
    const {
      account: { ...account },
    } = this.state;

    if (e.target.value === '2') {
      const {
        data: { data },
      } = await axios.get('/api/v1/services');
      account.isHandyman = true;
      account.jobTitle = data[0].id;
      this.setState({ account, jobs: data });
    } else {
      account.isHandyman = false;
      account.jobTitle = null;
      this.setState({ account, jobs: null });
    }
  };

  changeJob = e => {
    const {
      account: { ...account },
    } = this.state;
    account.jobTitle = e.target.value;
    this.setState({ account });
  };

  handleSubmit = async event => {
    event.preventDefault();

    const {
      account: { ...signUpAccount },
    } = this.state;

    try {
      await userSchema.validate(signUpAccount, {
        abortEarly: false,
      });
    } catch (err) {
      if (err.name === 'ValidationError') {
        const errorObj = {};
        err.inner.forEach(fieldError => {
          errorObj[fieldError.path] = fieldError.message;
        });
        this.setState({ userValidation: errorObj });
      }
    }

    if (signUpAccount.isHandyman) {
      try {
        await handymanSchema.validate(signUpAccount, {
          abortEarly: false,
        });
      } catch (err) {
        if (err.name === 'ValidationError') {
          const errorObj = {};
          err.inner.forEach(fieldError => {
            errorObj[fieldError.path] = fieldError.message;
          });
          this.setState({ handymanValidation: errorObj });
        }
      }
    }

    const { userValidation, handymanValidation } = this.state;
    if (
      Object.keys(userValidation).length === 0 &&
      Object.keys(handymanValidation).length === 0
    ) {
      const { account } = this.state;
      try {
        await axios.post('/api/v1/signup', account);
      } catch (err) {
        if (err.response.data.message) {
          let { message } = err.response.data;

          if (message.includes('unique')) {
            if (message.includes('email')) {
              message = 'email already exists';
            }
          }
          return notify.error(message);
        }
      }
      return notify.success('account created successfully');
    }
    return notify.error('invalid inputs');
  };

  handleChange = ({ currentTarget: input }) => {
    const {
      account: { ...account },
    } = this.state;
    const {
      userValidation: { ...userValidation },
    } = this.state;
    const {
      handymanValidation: { ...handymanValidation },
    } = this.state;

    if (userValidation[input.name]) {
      delete userValidation[input.name];
      this.setState({ userValidation });
    }
    if (handymanValidation[input.name]) {
      delete handymanValidation[input.name];
      this.setState({ handymanValidation });
    }

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
          placeHolder="ex.mossa"
          name="username"
          onChange={this.handleChange}
        />
        <span className="username">{userValidation.username}</span>
        <LabeledInput
          label="Email"
          type="email"
          placeHolder="ex.mossa@gmail.com"
          name="email"
          onChange={this.handleChange}
        />
        <span className="email">{userValidation.email}</span>
        <LabeledInput
          label="Phone No."
          type="text"
          placeHolder="ex.9705999999"
          name="phone"
          onChange={this.handleChange}
        />
        <span className="phone">{userValidation.phone}</span>
        <LabeledInput
          label="Password"
          type="password"
          placeHolder="****************"
          name="password"
          onChange={this.handleChange}
        />
        <span className="password">{userValidation.password}</span>
        <LabeledInput
          label="Confirm Password"
          type="password"
          placeHolder="****************"
          name="confirmPassword"
          onChange={this.handleChange}
        />
        <span className="confirmPassword">
          {userValidation.confirmPassword}
        </span>
        <LabeledInput
          label="Country"
          type="text"
          placeHolder="ex.Palestine"
          name="country"
          onChange={this.handleChange}
        />
        <span className="country">{userValidation.country}</span>
        <LabeledInput
          label="City"
          type="text"
          placeHolder="ex.Jerusalem"
          name="city"
          onChange={this.handleChange}
        />
        <span className="city">{userValidation.city}</span>
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
              onChange={this.changeJob}
            />
            <LabeledInput
              label="Hour Rate"
              type="text"
              placeHolder="ex.24"
              name="hourRate"
              onChange={this.handleChange}
            />
            <span className="hourRate">{handymanValidation.hourRate}</span>
            <TextArea
              label="Bio"
              placeHolder="tell us about your self"
              rows={5}
              cols={5}
              name="description"
              onChange={this.handleChange}
            />
            <span className="description">
              {handymanValidation.description}
            </span>
          </React.Fragment>
        ) : null}

        <Button className="submit--button" onClick={this.handleSubmit}>
          Sign Up
        </Button>
      </form>
    );
  }
}

export default Signup;
