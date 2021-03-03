import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { successToast } from '@configs/toastConfig';
import { db } from '@firebaseAlias/firebase';
import { addTodo } from '@firebaseAlias/firebaseDBQueries';
import { DaysContext } from '@providers/DaysProvider';
import { UserContext } from '@providers/UserProvider';
import './AddToDo.scss';

const AddTodo = () => {
  const history = useHistory();
  const [day] = useContext(DaysContext);
  const [title, setTitle] = useState('');
  const [input, setInput] = useState('');
  const [, setTodoCreated] = useState(null);
  const user = useContext(UserContext);

  const addTodoHandler = (event) => {
    addTodo(event, db, user, day, title, input);
    setTitle('');
    setInput('');
    setTodoCreated(successToast('Task was created!'));
  };

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const inputHandler = (event) => {
    setInput(event.target.value);
  };
  const redirectToMain = () => {
    history.push('/');
  };
  return (
    <div className="add-todo-wrapper">
      <h1>Create a Task</h1>
      <form noValidate>
        <input
          id="todoTitle"
          label="ToDo Title"
          placeholder="ToDo Title"
          name="todoTitle"
          required
          value={title}
          onChange={titleHandler}
        />
        <textarea
          margin="normal"
          required
          id="todo"
          label="ToDo"
          placeholder="ToDo"
          name="todo"
          value={input}
          onChange={inputHandler}
        />

        <button
          className="button"
          type="submit"
          onClick={addTodoHandler}
          disabled={!input || !title}
        >
          Add Todo
        </button>
        <button className="button back-button" onClick={redirectToMain}>
          Back
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
