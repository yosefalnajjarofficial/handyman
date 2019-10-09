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
    const { isAuth, onBackClick } = this.props;
    const { clicked, pageName } = this.state;
    return (
      <section>
        <nav className="main-nav">
          <i className="fas fa-arrow-left"></i>
          <h2 className="main-nav__heading">{pageName}</h2>
          <DrawerToggleButton clicked={clicked} onClick={this.clickedFunc} />
        </nav>
        <SideDrawer
          onBackClick={onBackClick}
          className={clicked ? 'aside' : 'aside hidden'}
          loggedIn={isAuth}
        />
      </section>
    );
  }
}
Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  onBackClick: PropTypes.func.isRequired,
};

export default Header;
