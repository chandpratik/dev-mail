import { createContext, useContext, useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { useLocalContext } from './context';

const MailContext = createContext();

export function useMailContext() {
  return useContext(MailContext);
}

export function MailContextProvider({ children }) {
  const [receivedMails, setReceivedMails] = useState([]);
  const [onScreenMails, setOnScreenMails] = useState([]);
  const [sentMails, setSentMails] = useState([]);
  const [mailsType, setMailsType] = useState('Primary');
  const [socialUnreadNo, setSocialUnreadNo] = useState(0);
  const [primaryUnreadNo, setPrimaryUnreadNo] = useState(0);
  const [inboxUnreadNo, setInboxUnreadNo] = useState(0);
  const [promosUnreadNo, setPromosUnreadNo] = useState(0);
  const [updatesUnreadNo, setUpdatesUnreadNo] = useState(0);

  const { currentUser } = useLocalContext();

  useEffect(() => {
    if (currentUser) {
      db.collection('RecivedMails')
        .doc(currentUser.email)
        .collection('mail')
        .onSnapshot((snapshot) => {
          setReceivedMails(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      db.collection('SentMails')
        .doc(currentUser.email)
        .collection('mails')
        .onSnapshot((snapshot) => {
          setSentMails(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [currentUser]);

  useEffect(() => {
    if (mailsType === 'Primary') {
      let array = receivedMails.filter((e) => {
        return e.category === 'Primary';
      });
      setOnScreenMails(array);
    }

    if (mailsType === 'Sent') {
      setOnScreenMails(sentMails);
    }

    if (mailsType === 'Promotions') {
      let array = receivedMails.filter((e) => {
        return e.category === 'Promotions';
      });
      setOnScreenMails(array);
    }
    if (mailsType === 'Social') {
      let array = receivedMails.filter((e) => {
        return e.category === 'Social';
      });
      setOnScreenMails(array);
    }
    if (mailsType === 'Updates') {
      let array = receivedMails.filter((e) => {
        return e.category === 'Updates';
      });
      setOnScreenMails(array);
    }
  }, [mailsType, receivedMails, sentMails]);

  useEffect(() => {
    let array = receivedMails.filter((e) => {
      return e.read === false;
    });

    let a1 = array.length;
    setInboxUnreadNo(a1);
    // array.map((value, index) => {
    //   let a1 = 1 + index;
    //   setInboxUnreadNo(a1);

    //   return a1;
    // });
  }, [receivedMails]);

  useEffect(() => {
    let array = receivedMails.filter((e) => {
      return e.read === false;
    });

    let primaryUnread = array.filter((e) => {
      return e.category === 'Primary';
    });

    let a1 = primaryUnread.length;
    setPrimaryUnreadNo(a1);

    // primaryUnread.map((value, index) => {
    //   let a1 = 1 + index;
    //   setPrimaryUnreadNo(a1);

    //   return a1;
    // });
  }, [receivedMails]);


  useEffect(() => {
    let array = receivedMails.filter((e) => {
      return e.read === false;
    });

    let SocialUnread = array.filter((e) => {
      return e.category === 'Social';
    });

    let a1 = SocialUnread.length;
    setSocialUnreadNo(a1);
    // primaryUnread.map((value, index) => {
    //   let a1 = 1 + index;
    //   setSocialUnreadNo(a1);

    //   return a1;
    // });
  }, [receivedMails]);

  useEffect(() => {
    let array = receivedMails.filter((e) => {
      return e.read === false;
    });

    let promosUnreadNo = array.filter((e) => {
      return e.category === 'Promotions';
    });

    let a1 = promosUnreadNo.length;
    setPromosUnreadNo(a1);
    // promosUnreadNo.map((value, index) => {
    //   let a1 = 1 + index;
    //   setPromosUnreadNo(a1);

    //   return a1;
    // });
  }, [receivedMails]);

  useEffect(() => {
    let array = receivedMails.filter((e) => {
      return e.read === false;
    });

    let updatesUnreadNo = array.filter((e) => {
      return e.category === 'Updates';
    });

    let a1 = updatesUnreadNo.length;
    setUpdatesUnreadNo(a1);
    // primaryUnread.map((value, index) => {
    //   let a1 = 1 + index;
    //   setUpdatesUnreadNo(a1);

    //   return a1;
    // });
  }, [receivedMails]);

  const value = {
    onScreenMails,
    setMailsType,
    mailsType,
    socialUnreadNo,
    primaryUnreadNo,
    inboxUnreadNo,
    promosUnreadNo,
    updatesUnreadNo,
  };
  return <MailContext.Provider value={value}>{children}</MailContext.Provider>;
}
