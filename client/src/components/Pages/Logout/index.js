import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import logout from '../../utils/logout';

const Logout = ({ handleLogOut }) => {
  logout(); // Send a logout get request
  handleLogOut(); // Change the auth state
  return <Redirect to="/home" />; // Go home
};

Logout.propTypes = {
  handleLogOut: PropTypes.func.isRequired,
};

export default Logout;
