import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCZVfzvE5HvUPn7GA4E4D8wg6fmQ-diocc",
  authDomain: "e-commerse-site.firebaseapp.com",
  projectId: "e-commerse-site",
  storageBucket: "e-commerse-site.appspot.com",
  messagingSenderId: "98156063058",
  appId: "1:98156063058:web:6867fd20050702811bb28b",
  measurementId: "G-5PR93SFDFW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_accaunt' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;