import React, { Component } from 'react';

import Header from '../Header';
import Footer from '../Footer';

class Layout extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header onBackClick={this.props.onBackClick} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
