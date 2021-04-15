import { Checkbox } from '@material-ui/core';
import { Label, LabelOutlined, Star, StarBorder } from '@material-ui/icons';
import React, { useState } from 'react';

import './styles.css';

const Mail = ({ data }) => {
  const [starred, setStarred] = useState(false);
  const [important, setImportant] = useState(false);

  return (
    <div className={`mail`}>
      <Checkbox className="mail--colorGray mail--hoverBlack" />
      {starred ? (
        <Star onClick={() => setStarred(!starred)} className="mail--Yellow" />
      ) : (
        <StarBorder
          onClick={() => setStarred(!starred)}
          className="mail--colorGray mail--hoverBlack"
        />
      )}

      {important ? (
        <Label
          onClick={() => setImportant(!important)}
          className="mail--Yellow mail__label"
        />
      ) : (
        <LabelOutlined
          onClick={() => setImportant(!important)}
          className="mail--colorGray mail--hoverBlack mail__label"
        />
      )}

      <div className="mail__texts">
        {/* //? Sender's name */}
        <p className="mail__text">Name</p>
        <div className="mail__titleSubtitle">
          <p className="mail__text">Subject</p>
          <p className="mail__text mail__body"> - Body</p>
        </div>
        <p className="mail__text">Jan 14</p>
      </div>
    </div>
  );
};

export default Mail;
