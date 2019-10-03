import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';

class Layout extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header
          onBackClick={this.props.onBackClick}
          isLoggedIn={this.props.isLoggedIn}
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
