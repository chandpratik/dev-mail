import React from 'react';
import Loading from './components/Loading/loading';
import Sigin from './components/Signin/Sigin';
import { useLocalContext } from './context/context';

function App() {
  const { appState } = useLocalContext();

  return (
    <div className="App">
      {appState === 'home' && <h1>Home</h1>}
      {appState === 'login' && <Sigin />}
      {appState === 'loading' && <Loading />}
    </div>
  );
}

export default App;
