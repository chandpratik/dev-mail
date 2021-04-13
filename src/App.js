import React, { useEffect } from 'react';
import { HomePage, Loading, Signin } from './components';

import { useLocalContext } from './context/context';

function App() {
  const { appState, setAppState } = useLocalContext();

  useEffect(() => {
    if (appState === 'loading') {
      setTimeout(() => {
        setAppState('home');
      }, 5000);
    }
  }, [appState, setAppState]);

  return (
    <div className="App">
      {appState === 'home' && <HomePage />}
      {appState === 'login' && <Signin />}
      {appState === 'loading' && <Loading />}
    </div>
  );
}

export default App;
