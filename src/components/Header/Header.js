import { CameraAltOutlined, Menu } from '@material-ui/icons';
import { Avatar, Badge, Button, makeStyles, Popover } from '@material-ui/core';
import React, { useState } from 'react';
import './styles.css';
import { auth } from '../../lib/firebase';
import { useLocalContext } from '../../context/context';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Header = () => {
  const classes = useStyles();
  const { currentUser, setDrawerOpen, drawerOpen } = useLocalContext();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const signout = () => auth.signOut();

  return (
    <div className="home__header">
      <div className="home__left">
        <Menu
          className="home__menuIcon"
          onClick={() => setDrawerOpen(!drawerOpen)}
        />

        <img
          className="home_logo"
          src="/assets/DevMail Logo.png"
          alt="DevMail"
        />
      </div>

      <div className="home__right">
        <div>
          <Avatar styles={{ cursor: 'pointer' }} onClick={handleClick} />
          <Popover
            open={open}
            id={id}
            onClose={handleClose}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
            }}
          >
            <div className="home__popoverContainer">
              <div className="home__popover__top">
                <Badge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  badgeContent={
                    <div className="home__badge">
                      <CameraAltOutlined className="home__camera" />
                    </div>
                  }
                >
                  <Avatar className={classes.large} />
                </Badge>
                <div className="home__text">
                  <div className="home__displayName">
                    {currentUser.displayName}
                  </div>
                  <div className="home__mail">{currentUser.email}</div>
                </div>
                <Button
                  variant="outlined"
                  className="home__signOut"
                  onClick={signout}
                >
                  Sign Out
                </Button>
              </div>

              <div className="home__popover__footer">
                <p>Privacy Policy</p>
                <span>•</span>
                <p>Terms of service</p>
              </div>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Header;
