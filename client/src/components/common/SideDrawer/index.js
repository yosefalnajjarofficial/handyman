import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

const SideDrawer = ({ isAuth, className }) => {
  const notLoggedItems = ['Home', 'Services', 'signup', 'login'];
  const loggedItems = [
    <img
      src="https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg"
      alt="UserImage"
      className="profile-img"
    />,
    'home',
    'services',
    'jobs',
    'logout',
  ];

  const sideDrawerItems = array =>
    array.map(element => (
      <Link
        to={typeof element === 'object' ? '/profile' : `/${element}`}
        key={element.toString()}
      >
        <li>{element}</li>
      </Link>
    ));

  return (
    <aside className={className}>
      <ul className="ul">
        {isAuth
          ? sideDrawerItems(loggedItems)
          : sideDrawerItems(notLoggedItems)}
      </ul>
    </aside>
  );
};

SideDrawer.propTypes = {
  isAuth: PropTypes.oneOf([true, false, null]),
  className: PropTypes.string.isRequired,
};
SideDrawer.defaultProps = {
  isAuth: null,
};

export default SideDrawer;
