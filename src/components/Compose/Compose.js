import React from 'react';
import './styles.css';
import { useLocalContext } from '../../context/context';
import { Button } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import MenuItem from './MenuItem';

const Compose = () => {
  const { setComposeOpen } = useLocalContext();
  return (
    <div className="compose">
      <div className="compose__container">
        <div className="compose__header">
          <h4>New Message</h4>
          <Close
            onClick={() => setComposeOpen(false)}
            className="compose__icon"
          />
        </div>
        <input
          className="compose__input"
          placeholder="Recipents"
          //   value={recipents}
          //   onChange={(e) => setRecipents(e.target.value)}
        />

        <input
          className="compose__input"
          placeholder="Subject"
          //   value={subject}
          //   onChange={(e) => setSubject(e.target.value)}
        />

        <textarea
          className="compose__textarea"
          //   value={body}
          //   onChange={(e) => setBody(e.target.value)}
        />

        <div className="compose__footer">
          <div className="compose__footer__container">
            <Button
              className="compose__btn"
              color="primary"
              variant="contained"
              //   onClick={sendMail}
            >
              Send
            </Button>
            <MenuItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compose;
