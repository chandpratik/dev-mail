import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAFojCld_sLvjfOiFT4tLhbd5s12ExVo6Y',
  authDomain: 'dev-mail-83e22.firebaseapp.com',
  projectId: 'dev-mail-83e22',
  storageBucket: 'dev-mail-83e22.appspot.com',
  messagingSenderId: '36701588507',
  appId: '1:36701588507:web:68659a135ea3162bc97cbe',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const db = firebase.firestore();
