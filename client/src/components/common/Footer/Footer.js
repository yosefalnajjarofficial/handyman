import React from 'react';

import './style.css';

const year = new Date().toString().split(' ')[3];
const Footer = () => {
  return (
    <footer className="footer">
      CopyRight &copy;{year} All rights reserved | Handyman
    </footer>
  );
};

export default Footer;
