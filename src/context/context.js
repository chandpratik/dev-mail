import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../lib/firebase';

const Context = createContext();

export function useLocalContext() {
  return useContext(Context);
}

export function ContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState('');
  const [appState, setAppState] = useState('empty');
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [composeOpen, setComposeOpen] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setAppState('loading');
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
        setAppState('login');
      }
    });
  }, []);

  const value = {
    currentUser,
    appState,
    setAppState,
    drawerOpen,
    setDrawerOpen,
    composeOpen,
    setComposeOpen,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
