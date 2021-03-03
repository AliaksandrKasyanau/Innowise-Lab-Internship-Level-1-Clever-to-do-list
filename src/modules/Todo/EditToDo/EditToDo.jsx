import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { successToast } from '@configs/toastConfig';
import { db } from '@firebaseAlias/firebase';
import { editTodo } from '@firebaseAlias/firebaseDBQueries';
import { TodosContext } from '@providers/DaysProvider';
import './EditToDo.scss';

function EditToDo() {
  const history = useHistory();
  const [todo, setTodo] = useContext(TodosContext);
  const [title, setTitle] = useState(todo ? todo.title : '');
  const [input, setInput] = useState(todo ? todo.todo : '');

  if (todo == null) {
    history.push('/todo');
  }

  const editTodoHandler = (event) => {
    editTodo(event, db, todo, title, input, setTodo);
    history.push('/todo');
    setTitle('');
    setInput('');
    successToast('Task was updated');
  };
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const inputHandler = (event) => {
    setInput(event.target.value);
  };
  const redirectToTodo = () => {
    history.push('/todo');
  };
  return todo ? (
    <div className="todo-wrapper">
      <h1>Edit a Task</h1>
      <form noValidate>
        <input
          id="todoTitle"
          label="ToDo Title"
          name="todoTitle"
          required
          defaultValue={title}
          onChange={titleHandler}
        />
        <textarea
          margin="normal"
          required
          id="todo"
          label="ToDo"
          placeholder="ToDo"
          name="todo"
          defaultValue={input}
          onChange={inputHandler}
        />
        <button
          className="button"
          type="submit"
          onClick={editTodoHandler}
          disabled={!input && !title}
        >
          Save Changes
        </button>
        <button className="button" type="submit" onClick={redirectToTodo}>
          Back
        </button>
      </form>
    </div>
  ) : null;
}

export default EditToDo;
