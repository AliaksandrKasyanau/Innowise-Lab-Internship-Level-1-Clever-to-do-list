import { errorToast, successToast } from '@configs/toastConfig';
import { auth, firestore } from './firebase';

const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error('Error fetching user', error);
  }
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName } = user;
    try {
      await userRef.set({
        displayName,
        email,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user document', error);
    }
  }
  return getUserDocument(user.uid);
};

export const sendResetEmail = (event, email) => {
  event.preventDefault();
  auth
    .sendPasswordResetEmail(email)
    .then(() => {
      successToast('Email has been sent!');
    })
    .catch(() => {
      errorToast('Invalid credentials');
    });
};

export const addTodo = (event, db, user, day, title, input) => {
  event.preventDefault();
  db.collection('todos').add({
    userId: user.uid,
    date: day,
    title: title,
    todo: input,
    status: false,
  });
};

export const editTodo = (event, db, todo, title, input, setTodo) => {
  event.preventDefault();
  db.collection('todos').doc(todo.id).update({ title: title, todo: input });

  db.collection('todos')
    .doc(todo.id)
    .get()
    .then((doc) => {
      if (doc.exists) {
        setTodo({
          date: doc.day,
          id: doc.id,
          title: doc.data().title,
          todo: doc.data().todo,
        });
      } else {
        console.log('No such document!');
      }
    });
};

export const unsub = (firestore, user, day, setTodos) => {
  firestore
    .collection('todos')
    .where('userId', '==', user.uid)
    .where('date', '==', day)
    .onSnapshot((snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => {
          return {
            date: day,
            id: doc.id,
            title: doc.data().title,
            todo: doc.data().todo,
            status: doc.data().status,
          };
        })
      );
    });
  return () => {
    unsub(firestore, user, day, setTodos);
  };
};

export const statusHandler = (todo, db) => {
  db.collection('todos').doc(todo.id).update({
    status: !todo.status,
  });
};

export const deleteTodo = (id) => {
  firestore
    .collection('todos')
    .doc(id)
    .delete()
    .then(() => {
      successToast('Task was deleted!');
    });
};
