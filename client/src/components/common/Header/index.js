import React, { Component } from 'react';

import DrawerToggleButton from '../DrawerToggleButton';
import SideDrawer from '../SideDrawer';
import './style.css';

class Header extends Component {
  state = {
    clicked: false,
    pageName: '',
  };

  clickedFunc = () => {
    const { clicked } = this.state;
    this.setState({ clicked: !clicked });
  };

  render() {
    const { isAuth, handleLogout } = this.props;
    const { clicked, pageName } = this.state;
    return (
      <section>
        <nav className="main-nav">
          <i className="fas fa-arrow-left"></i>
          <h2 className="main-nav__heading">{pageName}</h2>
          <DrawerToggleButton clicked={clicked} onClick={this.clickedFunc} />
        </nav>
        <SideDrawer
          onBackClick={this.props.onBackClick}
          className={clicked ? 'aside' : 'aside hidden'}
          loggedIn={isAuth}
          handleLogout={handleLogout}
        />
      </section>
    );
  }
}

export default Header;
