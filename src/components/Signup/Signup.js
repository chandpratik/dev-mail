import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import './styles.css';
const Signup = ({ setshowSignup }) => {
  const [loading, setLoading] = useState(false);

  const toggleSignUp = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setshowSignup(false);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="signup__container">
      <div className={`signup  ${loading && 'login__fade'}`}>
        {loading && <div className="login__loading signup__loading" />}
        <div className="signup__container">
          <div className="signup__left">
            <img
              className="login__logo"
              src="/assets/svg/001-paper-plane.svg"
              alt="logo"
            />

            <h1 className="signup__heading">Create Your DevMail Account</h1>
            <p className="signup__subheading">Continue to DevMail</p>

            <div className="signup__inputs">
              <div className="signup__nameInputs">
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  className="signup__nameInput"
                />
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  className="signup__nameInput"
                />
              </div>

              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                helperText="You can use letters, numbers & periods"
                type="email"
              />
              <div className="signup__passwordInputs">
                <div className="signup__passwordWrapper">
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    className="signup__passwordInput"
                    type="Password"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Confirm Password"
                    variant="outlined"
                    className="signup__passwordInput"
                    type="Password"
                  />
                </div>
                <p className="signup__helpertext">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </p>
                <FormControlLabel
                  control={<Checkbox name="checkedB" color="primary" />}
                  label="Show password"
                />
              </div>
              <div className="signup__buttons">
                <Button
                  className="signup__button"
                  variant="outlined"
                  color="primary"
                  onClick={toggleSignUp}
                >
                  Sign in instead
                </Button>
                <Button
                  className="signup__button"
                  variant="contained"
                  color="primary"
                >
                  Create
                </Button>
              </div>
            </div>
          </div>

          <figure className="signup__figure">
            <img
              className="signup__figureImg"
              src="/assets/svg/devMail.svg"
              alt="account"
            />
            <figcaption className="signup__figcaption">
              Get Connected with millions of Developers
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Signup;
