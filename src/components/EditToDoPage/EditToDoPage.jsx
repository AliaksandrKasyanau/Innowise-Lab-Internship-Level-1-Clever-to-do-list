import React, { useContext, useState } from 'react';
import { navigate } from '@reach/router';
import { toast } from 'react-toastify';
import { db } from '../../firebase/firebase';
import { TodosContext } from '../../providers/DaysProvider';
import './EditToDoPage.scss';

function EditToDoPage() {
  const [todo, setTodo] = useContext(TodosContext);
  const [title, setTitle] = useState(todo ? todo.title : '');
  const [input, setInput] = useState(todo ? todo.todo : '');
  const [, setTodoUpdated] = useState(null);

  if (todo == null) {
    navigate(-1);
  }

  const editTodo = (event) => {
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
    navigate(-1);
    setTitle('');
    setInput('');
    setTodoUpdated(
      (toast.success('Task was updated!'),
      {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    );
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
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          margin="normal"
          required
          id="todo"
          label="ToDo"
          placeholder="ToDo"
          name="todo"
          defaultValue={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button className="button" type="submit" onClick={editTodo} disabled={!input && !title}>
          Save Changes
        </button>
        <button
          className="button"
          type="submit"
          onClick={() => {
            navigate(-1);
          }}
        >
          Sheduler
        </button>
      </form>
    </div>
  ) : null;
}

export default EditToDoPage;
