import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { errorToast, successToast } from '@configs/toastConfig';
import { auth } from './firebase';
import { generateUserDocument } from './firebaseDBQueries';

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export const signInWithGoogleHandler = () => {
  try {
    signInWithGoogle();
  } catch (error) {
    console.error('Error signing in with Google', error);
  }
};
export const signInWithEmailAndPasswordHandler = (event, email, password) => {
  event.preventDefault();
  auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      successToast('You are logged in!');
    })
    .catch(() => {
      errorToast('Invalid credentials!');
    });
};
export const createUserWithEmailAndPasswordHandler = async (
  event,
  email,
  password,
  displayName
) => {
  event.preventDefault();
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    generateUserDocument(user, { displayName });
    successToast('Account has been created!');
    successToast('You are logged in!');
  } catch (error) {
    errorToast('Invalid credentials!');
  }
};
