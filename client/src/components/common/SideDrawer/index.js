import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const SideDrawer = ({ loggedIN }) => {
  const notLogedArr = ['Home', 'Services', 'Sign Up', 'Log In'];
  const logedArr = [
    <img
      src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
      alt="UserImage"
      className="img"
    />,
    'home',
    'services',
    'profile',
    'messages',
    'jobs',
    'logOut',
  ];
  const items = arr =>
    arr.map(ele => (
      <a href={ele} key={ele.toString()}>
        <li>{ele}</li>
      </a>
    ));

  return (
    <aside className="aside">
      <ul className="ul">{loggedIN ? items(logedArr) : items(notLogedArr)}</ul>
    </aside>
  );
};

SideDrawer.propTypes = { loggedIN: PropTypes.bool.isRequired };

export default SideDrawer;
