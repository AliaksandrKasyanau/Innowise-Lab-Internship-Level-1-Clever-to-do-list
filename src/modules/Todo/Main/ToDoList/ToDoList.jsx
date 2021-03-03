import React, { useState, useEffect, useContext } from 'react';
import './ToDoList.scss';
import { db, firestore } from '@firebaseAlias/firebase';
import { Link } from 'react-router-dom';
import { DaysContext, TodosContext } from '@providers/DaysProvider';
import { UserContext } from '@providers/UserProvider';
import { unsub, statusHandler } from '@firebaseAlias/firebaseDBQueries';

const ListTodo = () => {
  const [day] = useContext(DaysContext);
  const [todos, setTodos] = useState([]);
  const [, setTodo] = useContext(TodosContext);
  const user = useContext(UserContext);

  useEffect(() => {
    unsub(firestore, user, day, setTodos);
  }, [day]);

  const todoStatusHandler = (todo) => {
    statusHandler(todo, db);
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
                              todoStatusHandler(todo);
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
                              todoStatusHandler(todo);
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
