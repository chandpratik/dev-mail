import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import Signup from '../Signup/Signup';
import './styles.css';
const Sigin = () => {
  const [showSignup, setshowSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleSignUp = (e) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      setshowSignup(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="login">
      {showSignup ? (
        <Signup showSignup={showSignup} setshowSignup={setshowSignup} />
      ) : (
        <div className="login__content">
          {loading && <div className="login__loading" />}
          <div className={`login__wrapper ${loading && 'login__fade'}`}>
            <img
              className="login__logo"
              src="/assets/svg/001-paper-plane.svg"
              alt="logo"
            />
            <p className="login__title">Sign In </p>
            <p className="login__subtitle">Continue to DevMail </p>
            <form className="login__form">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                className="login__input"
                type="email"
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                className="login__input"
                type="password"
              />

              <div className="login__infotext">
                Not your computer ? Use guest mode to sign in privately?
                <a href="/learnmore">Learn More</a>
              </div>

              <div className="login__buttons">
                <Button
                  className="login__button"
                  color="primary"
                  onClick={(e) => toggleSignUp(e)}
                >
                  Create Account
                </Button>
                <Button
                  className="lgoin__button"
                  color="primary"
                  variant="contained"
                >
                  Sign in
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sigin;
