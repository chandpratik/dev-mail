import { Badge } from '@material-ui/core';
import { Inbox } from '@material-ui/icons';
import React, { useState } from 'react';
import { useLocalContext } from '../../context/context';
import { useMailContext } from '../../context/MailContext';

const SidebarNavBtn = () => {
  const { drawerOpen } = useLocalContext();
  const { setMailsType, inboxUnreadNo } = useMailContext();
  const [active, setActive] = useState('inbox');
  const updatePrimaryActive = () => {
    setMailsType('Primary');
    setActive('inbox');
  };

  const sentActive = () => {
    setMailsType('Sent');
    setActive('sent');
  };

  return (
    <div className="sidebar__btns">
      <div
        onClick={updatePrimaryActive}
        className={`sidebar__btn sidebar__topBtn  ${
          !drawerOpen && 'sidebar__btnClose'
        } ${active === 'inbox' && 'sidebar__active'}`}
      >
        <div
          className={`sidebar__btnLeft ${
            !drawerOpen && 'sidebar__btnLeftClose'
          }`}
        >
          {drawerOpen ? (
            <>
              <Inbox className="sidebar__icon" />
              <p>Inbox</p>
            </>
          ) : (
            <Badge badgeContent={0} color="error">
              <Inbox className="sidebar__icon" />
            </Badge>
          )}
        </div>

        <div
          className={`sidebar__unread ${!drawerOpen && 'sidebar__unreadClose'}
         
          `}
        >
          <p>{inboxUnreadNo}</p>
        </div>
      </div>

      <div
        onClick={sentActive}
        className={`sidebar__btn sidebar__topBtn  ${
          !drawerOpen && 'sidebar__btnClose'
        }  `}
      >
        <div
          className={`sidebar__btnLeft ${
            !drawerOpen && 'sidebar__btnLeftClose'
          }`}
        >
          {drawerOpen ? (
            <>
              <Inbox className="sidebar__icon" />
              <p>Sent</p>
            </>
          ) : (
            <Badge badgeContent={0} color="error">
              <Inbox className="sidebar__icon" />
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarNavBtn;
