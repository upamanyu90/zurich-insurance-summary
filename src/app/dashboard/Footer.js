import React from 'react';
import '../../styles/Login.modules.css';

const Footer = ({ disclosureMessage }) => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__disclosure">{disclosureMessage}</p>
      </div>
    </footer>
  );
};

export default Footer;