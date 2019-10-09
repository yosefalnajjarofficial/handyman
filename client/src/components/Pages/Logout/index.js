import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import logout from '../../utils/logout';

const Logout = ({ handleLogout }) => {
  logout(); // Send a logout get request
  handleLogout(); // Change the auth state
  return <Redirect to="/home" />; // Go home
};

Logout.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Logout;
