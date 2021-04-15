import React, { useEffect } from 'react';
import { HomePage, Loading, Signin } from './components';
import { useLocalContext } from './context/context';
import { useMailContext } from './context/MailContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const { appState, setAppState } = useLocalContext();
  const { onScreenMails } = useMailContext();

  useEffect(() => {
    if (appState === 'loading') {
      setTimeout(() => {
        setAppState('home');
      }, 3000);
    }
  }, [appState, setAppState]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            {appState === 'home' && <HomePage />}
            {appState === 'login' && <Signin />}
            {appState === 'loading' && <Loading />}
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
