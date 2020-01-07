import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAExzJJhhUpNvnKhtNMfgGe0sQ_R1dBl00",
    authDomain: "clothing-8211d.firebaseapp.com",
    databaseURL: "https://clothing-8211d.firebaseio.com",
    projectId: "clothing-8211d",
    storageBucket: "clothing-8211d.appspot.com",
    messagingSenderId: "619696216720",
    appId: "1:619696216720:web:ff0f5d27a0b1a3f4555615",
    measurementId: "G-K9N33D0X3Q"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

