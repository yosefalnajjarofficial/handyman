import React from 'react';

import './footer.css'

const Footer = props => {
  return (
    <footer className='footer'>
      CopyRight &copy;{props.year} All rights reserved | {props.title}
    </footer>
  );
}

export default Footer;