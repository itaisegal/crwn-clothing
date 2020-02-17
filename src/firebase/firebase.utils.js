import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAyazzrELNrH4BIASGRPCoiOXHV6xZDyLM',
  authDomain: 'crwn-db-49c4d.firebaseapp.com',
  databaseURL: 'https://crwn-db-49c4d.firebaseio.com',
  projectId: 'crwn-db-49c4d',
  storageBucket: 'crwn-db-49c4d.appspot.com',
  messagingSenderId: '459897061513',
  appId: '1:459897061513:web:909df7d258e2675cff8658'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const loginWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;