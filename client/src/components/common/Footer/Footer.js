import React from 'react';

import './style.css'

const Footer = props => {
  return (
    <footer className='footer'>
      CopyRight &copy;{(new Date()).toString().split(' ')[3]} All rights reserved | Handyman
    </footer>
  );
}

export default Footer;
