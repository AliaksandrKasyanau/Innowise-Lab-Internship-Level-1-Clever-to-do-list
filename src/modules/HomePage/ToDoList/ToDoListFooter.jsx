import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase/firebase';
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
            setIsLoggedIn(toast.success('You are logged off!'), {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
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
