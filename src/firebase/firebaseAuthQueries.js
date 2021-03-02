import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
