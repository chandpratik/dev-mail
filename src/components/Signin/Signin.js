import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { auth } from '../../lib/firebase';
import Signup from '../Signup/Signup';
import './styles.css';
const Signin = () => {
  const [showSignup, setshowSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mailError, setMailError] = useState('');
  const [passwordError, setPasswordError] = useState({ state: false, msg: '' });
  const toggleSignUp = (e) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      setshowSignup(true);
      setLoading(false);
    }, 1500);
  };

  const signin = (e) => {
    e.preventDefault();
    setLoading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        alert('logged in');
      })
      .catch((err) => {
        setLoading(false);
        if (err.code === 'auth/wrong-password') {
          setMailError({ state: true, msg: '' });
          setPasswordError({ state: true, msg: 'Incorrect password' });
        } else if (
          err.code === 'auth/user-not-found' ||
          err.code === 'auth/invalid-email'
        ) {
          setMailError({ state: true, msg: "Email doesn't exist" });
          setPasswordError({ state: true, msg: '' });
        }
      });
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                error={mailError.state}
                helperText={mailError.msg}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                className="login__input"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                error={passwordError.state}
                helperText={passwordError.msg}
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
                  onClick={signin}
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

export default Signin;
