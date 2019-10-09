import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DrawerToggleButton from '../DrawerToggleButton';
import SideDrawer from '../SideDrawer';
import './style.css';

class Header extends Component {
  state = {
    clicked: false,
    pageName: ' ',
  };

  clickedFunc = () => {
    const { clicked } = this.state;
    this.setState({ clicked: !clicked });
  };

  render() {
    const { isAuth, onBackClick, home } = this.props;
    const { clicked, pageName } = this.state;
    return (
      <section>
        <nav className="main-nav">
          <i
            role="button"
            className={`fas fa-arrow-left ${home ? 'hide' : ''}`}
            onClick={onBackClick}
          ></i>
          <h2 className="main-nav__heading">{pageName}</h2>
          <DrawerToggleButton clicked={clicked} onClick={this.clickedFunc} />
        </nav>
        <SideDrawer
          className={clicked ? 'aside' : 'aside hidden'}
          isAuth={isAuth}
        />
      </section>
    );
  }
}
Header.propTypes = {
  isAuth: PropTypes.oneOf([true, false, null]),
  onBackClick: PropTypes.func.isRequired,
  home: PropTypes.bool.isRequired,
};
Header.defaultProps = {
  isAuth: null,
};

export default Header;
