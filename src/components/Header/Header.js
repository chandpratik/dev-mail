import { Menu } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import React from 'react';
import './styles.css';
const Header = () => {
  return (
    <div className="home__header">
      <div className="home__left">
        <Menu className="home__menuIcon" />

        <img
          className="home_logo"
          src="/assets/DevMail Logo.png"
          alt="DevMail"
        />
      </div>

      <div className="home__right">
        <Avatar styles={{ cursor: 'pointer' }} />
      </div>
    </div>
  );
};

export default Header;
