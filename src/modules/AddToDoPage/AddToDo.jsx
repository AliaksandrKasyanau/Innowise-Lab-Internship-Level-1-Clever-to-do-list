import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../../firebase/firebase';
import { DaysContext } from '../../providers/DaysProvider';
import { UserContext } from '../../providers/UserProvider';
import './AddToDo.scss';

const AddTodo = () => {
  const history = useHistory();
  const [day] = useContext(DaysContext);
  const [title, setTitle] = useState('');
  const [input, setInput] = useState('');
  const [, setTodoCreated] = useState(null);
  const user = useContext(UserContext);
  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      userId: user.uid,
      date: day,
      title: title,
      todo: input,
      status: false,
    });
    setTitle('');
    setInput('');
    setTodoCreated(toast.success('Task was created!'), {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          margin="normal"
          required
          id="todo"
          label="ToDo"
          placeholder="ToDo"
          name="todo"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <button className="button" type="submit" onClick={addTodo} disabled={!input || !title}>
          Add Todo
        </button>
        <button className="button back-button" onClick={() => history.push('/')}>
          Back
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
