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

export const createUserProfileDocument = async (userAuth, moreData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...moreData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    console.log(newDocRef);
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionSnapshopToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const loginWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
