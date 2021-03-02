import React from 'react';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { firestore } from '../../firebase/firebase';
import { TodosContext } from '../../providers/DaysProvider';
import './ToDoPage.scss';

function ToDoPage() {
  const history = useHistory();
  const [todo] = useContext(TodosContext);
  const [, setTodoDeleted] = useState(null);

  const deleteTodo = (id) => {
    firestore
      .collection('todos')
      .doc(id)
      .delete()
      .then(() => {
        setTodoDeleted(toast.success('Task was deleted!'), {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    history.push('/');
  };

  if (todo == null) {
    history.push('/');
  }
  return todo ? (
    <>
      <div className="status-wrapper-todo">
        {!todo.status ? (
          <div className="icon status-unchecked">radio_button_unchecked</div>
        ) : (
          <div className="icon status-checked">check_circle </div>
        )}
      </div>
      <div className="todo-wrapper">
        <h2>{todo.title}</h2>
        <textarea rows="5" disabled value={todo.todo} />

        <button
          className="button"
          onClick={() => {
            history.push('/edit-todo');
          }}
        >
          Edit Task
        </button>
        <button
          className="button"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          Delete Task
        </button>
        <button
          className="button"
          type="submit"
          onClick={() => {
            history.push('/');
          }}
        >
          Back
        </button>
      </div>
    </>
  ) : null;
}

export default ToDoPage;
