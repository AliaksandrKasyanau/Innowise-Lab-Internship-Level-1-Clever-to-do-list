import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteTodo } from '@firebaseAlias/firebaseDBQueries';
import { TodosContext } from '@providers/DaysProvider';
import './ToDo.scss';

function ToDo() {
  const history = useHistory();
  const [todo] = useContext(TodosContext);

  const deleteTodoHandler = (id) => {
    deleteTodo(id);
    redirectToMain();
  };

  if (todo == null) {
    redirectToMain();
  }
  const redirectToMain = () => {
    history.push('/');
  };
  const redirectToEdit = () => {
    history.push('/edit-todo');
  };
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

        <button className="button" onClick={redirectToEdit}>
          Edit Task
        </button>
        <button
          className="button"
          onClick={() => {
            deleteTodoHandler(todo.id);
          }}
        >
          Delete Task
        </button>
        <button className="button" type="submit" onClick={redirectToMain}>
          Back
        </button>
      </div>
    </>
  ) : null;
}

export default ToDo;
