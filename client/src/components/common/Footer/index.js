import React from 'react';

import './style.css';

const Footer = () => {
  const year = new Date().toString().split(' ')[3];
  return (
    <footer className="footer">
      CopyRight &copy;{year} All rights reserved | Handyman
    </footer>
  );
};

export default Footer;
