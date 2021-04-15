import { Button, Checkbox } from '@material-ui/core';
import { Label, LabelOutlined, Star, StarBorder } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import React, { useState } from 'react';
import { useLocalContext } from '../../context/context';

import { db } from '../../lib/firebase';
import './styles.css';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Mail = ({ data }) => {
  const classes = useStyles();

  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    updateRead();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [starred, setStarred] = useState(false);
  const [important, setImportant] = useState(false);
  const { currentUser } = useLocalContext();

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">SENDER : {data.senderName}</h2>
      <p id="simple-modal-description">SUBJECT : {data.subject}</p>
      <p id="simple-modal-description">BODY : {data.body}</p>
    </div>
  );

  const updateRead = () => {
    if (data.read === false) {
      db.collection('RecivedMails')
        .doc(currentUser.email)
        .collection('mail')
        .doc(data.id)
        .update({
          ...data,
          read: true,
        });
    }
  };
  return (
    <div
      className={`mail ${data.read === false && 'mail--unread'}`}
      onClick={updateRead}
    >
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
        <p className="mail__text">{data.senderName}</p>
        <div className="mail__titleSubtitle">
          <p className="mail__text">{data.subject}</p>
          <p className="mail__text mail__body"> - {data.body}</p>
        </div>
        <Button onClick={handleOpen}>READ</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    </div>
  );
};

export default Mail;
