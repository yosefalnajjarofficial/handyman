import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const SideDrawer = ({ loggedIn, className }) => {
  const notLoggedItems = ['Home', 'Services', 'Sign Up', 'Log In'];
  const loggedItems = [
    <img
      src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
      alt="UserImage"
      className="profile-img"
    />,
    'home',
    'services',
    'profile',
    'messages',
    'jobs',
    'logOut',
  ];

  const sideDrawerItems = array =>
    array.map(element => (
      <a
        href={typeof element === 'object' ? 'profile' : element}
        key={element.toString()}
      >
        <li>{element}</li>
      </a>
    ));

  return (
    <aside className={className}>
      <ul className="ul">
        {loggedIn
          ? sideDrawerItems(loggedItems)
          : sideDrawerItems(notLoggedItems)}
      </ul>
    </aside>
  );
};

SideDrawer.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

export default SideDrawer;
