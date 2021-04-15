import React from 'react';
import { Header, Sidebar, Compose, ViewMail } from '..';
import { useLocalContext } from '../../context/context';
import Main from '../Main/Main';

import './styles.css';
const Home = ({ showMails = true, mailData }) => {
  const { composeOpen } = useLocalContext();
  return (
    <div className="home">
      {composeOpen && <Compose />}
      <Header />
      <Sidebar>
        {showMails ? <Main /> : <ViewMail mailData={mailData} />}
      </Sidebar>
    </div>
  );
};

export default Home;
