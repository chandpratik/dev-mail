import { TextField } from '@material-ui/core';
import React from 'react';
import './styles.css';
const Sigin = () => {
  return (
    <div className="login">
      <div className="login__content">
        <div className="login__loading">
          <div className="login__wrapper">
            <img
              className="login__logo"
              src="/assets/svg/001-paper-plane.svg"
              alt=""
            />
            <p className="login__title">Sign In </p>
            <p className="login__subtitle">Continue to DevMail </p>
            <form className="login__form">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="password"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sigin;
