import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { successToast } from '@configs/toastConfig';
import { auth } from '@firebaseAlias/firebase';
import './ToDoListFooter.scss';

function ToDoListFooter() {
  const history = useHistory();
  const [, setIsLoggedIn] = useState(null);
  return (
    <div className="todo-list-footer">
      <button
        className="button"
        onClick={() => {
          history.push('create-todo');
        }}
      >
        <p className="icon">add_circle</p> Add a New Task
      </button>
      <button
        className="button sign-out"
        onClick={() => {
          auth.signOut().then(() => {
            setIsLoggedIn(successToast('You are logged off!'));
          });
        }}
      >
        <p className="icon">logout</p>
        Sign out
      </button>
    </div>
  );
}
export default ToDoListFooter;
