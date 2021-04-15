import React from 'react';
import { Header, Sidebar, Compose } from '..';
import { useLocalContext } from '../../context/context';
import Main from '../Main/Main';

import './styles.css';
const Home = () => {
  const { composeOpen } = useLocalContext();
  return (
    <div className="home">
      {composeOpen && <Compose />}
      <Header />
      <Sidebar>
        <Main />
      </Sidebar>
    </div>
  );
};

export default Home;
