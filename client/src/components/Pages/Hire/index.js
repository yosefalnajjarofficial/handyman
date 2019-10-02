import React, { Component } from 'react';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import PropTypes from 'prop-types';

import hireSchema from '../../utils/validationSchemas/hireSchema';
import LabeldInput from '../../common/LabeledInput';
import TextArea from '../../common/Textarea';
import Button from '../../common/Button';
import './style.css';

class Hire extends Component {
  state = {
    contract: {
      handymanId: this.props.match.params.handymanId,
      deadline: '',
      price: '',
      description: '',
      street: '',
      buildingNumber: '',
      flatNumber: '',
    },
    error: {},
  };

  handleChange = ({ currentTarget: input }) => {
    const {
      contract: { ...contract },
    } = this.state;
    contract[input.name] = input.value;
    this.setState({ contract });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { contract } = this.state;
    try {
      this.setState({ error: {} });
      await hireSchema.validate(contract, { abortEarly: false });
      await axios.post('/api/v1/hire', contract);
      NotificationManager.success('Hire submitted successfully');
      const { history } = this.props;
      history.push('/jobs');
    } catch (err) {
      if (err.name === 'ValidationError') {
        const errorObj = {};
        err.inner.forEach(fieldError => {
          errorObj[fieldError.path] = fieldError.message;
        });
        NotificationManager.warning('Validation Error');
        this.setState({ error: errorObj });
      } else if (err.response.data.message) {
        NotificationManager.error(err.response.data.message);
      } else {
        NotificationManager.error('Internal Server Error');
        const { history } = this.props;
        history.push('/500');
      }
    }
  };

  render() {
    const {
      contract: {
        deadline,
        price,
        description,
        street,
        buildingNumber,
        flatNumber,
      },
      error: {
        deadline: deadlineError,
        price: priceError,
        description: descriptionError,
        street: streetError,
        buildingNumber: buildingNumberError,
        flatNumber: flatNumberError,
      },
    } = this.state;
    return (
      <div className="contract">
        <div className="contract__input">
          <LabeldInput
            label="Deadline"
            type="date"
            placeHolder="Ex. 17/11/2019"
            name="deadline"
            value={deadline}
            onChange={this.handleChange}
          />
          {deadlineError && (
            <span className="errorMessage">{deadlineError}</span>
          )}
          <LabeldInput
            label="Price"
            type="text"
            placeHolder="Ex. 50$"
            name="price"
            value={price}
            onChange={this.handleChange}
          />
          {priceError && <span className="errorMessage">{priceError}</span>}
          <LabeldInput
            label="Street"
            type="text"
            placeHolder="Ex. Tal Elhawa"
            name="street"
            value={street}
            onChange={this.handleChange}
          />
          {streetError && <span className="errorMessage">{streetError}</span>}
          <LabeldInput
            label="Building Number"
            type="text"
            placeHolder="Ex. 3D25F"
            name="buildingNumber"
            value={buildingNumber}
            onChange={this.handleChange}
          />
          {buildingNumberError && (
            <span className="errorMessage">{buildingNumberError}</span>
          )}
          <LabeldInput
            label="Flat Number"
            type="text"
            placeHolder="Ex. 52"
            name="flatNumber"
            value={flatNumber}
            onChange={this.handleChange}
          />
          {flatNumberError && (
            <span className="errorMessage">{flatNumberError}</span>
          )}
          <TextArea
            label="Description"
            placeholder="Ex. I want to build my houses"
            rows={5}
            cols={10}
            name="description"
            value={description}
            onChange={this.handleChange}
          />
          {descriptionError && (
            <span className="errorMessage">{descriptionError}</span>
          )}
        </div>
        <div className="contract__action">
          <Button className="contract__action--btn" onClick={this.handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

Hire.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Hire;
