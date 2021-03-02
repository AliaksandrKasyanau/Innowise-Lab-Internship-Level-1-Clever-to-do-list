import React, { useState, useEffect, useContext } from 'react';
import { DaysContext, TodosContext } from '../../../providers/DaysProvider';
import { UserContext } from '../../../providers/UserProvider';
import './ToDoList.scss';
import { db, firestore } from '../../../firebase/firebase';
import { Link } from 'react-router-dom';

const ListTodo = () => {
  const [day] = useContext(DaysContext);
  const [todos, setTodos] = useState([]);
  const [, setTodo] = useContext(TodosContext);
  const user = useContext(UserContext);

  useEffect(() => {
    const unsub = firestore
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
      unsub();
    };
  }, [day]);

  const statusHandler = (todo) => {
    db.collection('todos').doc(todo.id).update({
      status: !todo.status,
    });
  };

  return (
    <>
      {todos.length > 0 ? (
        <div className="todo-list-wrapper">
          <div className="todo-list">
            {todos.map((todo) => {
              return (
                <>
                  <div className="todo">
                    <div className="status-wrapper">
                      {todo.status === false ? (
                        <>
                          <div
                            className="icon status-unchecked"
                            onClick={() => {
                              statusHandler(todo);
                            }}
                          >
                            radio_button_unchecked
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className="icon status-checked"
                            onClick={() => {
                              statusHandler(todo);
                            }}
                          >
                            check_circle
                          </div>
                        </>
                      )}
                    </div>
                    {todo.status === false ? (
                      <Link
                        className="todo-link"
                        key={todo.id}
                        to="/todo"
                        onClick={() => {
                          setTodo(todo);
                        }}
                      >
                        {todo.title}
                      </Link>
                    ) : (
                      <Link
                        className="todo-link todo-link-done"
                        key={todo.id}
                        to="/todo"
                        onClick={() => {
                          setTodo(todo);
                        }}
                      >
                        {todo.title}
                      </Link>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="empty-list">
          <h2>Task list is empty</h2>
        </div>
      )}
    </>
  );
};

export default ListTodo;
