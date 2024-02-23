import React from 'react';
import '../../styles/Login.modules.css';

const Header = ({ emailId, name, logOut }) => {
  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__title">Zurich Insurance Customer Portal</h1>
        <div className="header__user-info">
          <span className="header__name">{name}</span>
          <span className="header__email">{emailId}</span>
          <button onClick={() => logOut()} className="header__sign-out-btn">Sign Out</button>
        </div>
      </div>
    </header>
  );
};

export default Header;