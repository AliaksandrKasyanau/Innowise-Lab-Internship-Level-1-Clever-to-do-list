import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddTodo from '@modules/Todo/AddToDo/AddToDo';
import EditToDo from '@modules/Todo/EditToDo/EditToDo';
import Main from '@modules/Todo/Main/Main';
import ToDo from '@modules/Todo/ToDo/ToDo';

function ToDoRouter() {
  return (
    <>
      <Switch>
        <Route path="/edit-todo" component={EditToDo} />
        <Route path="/todo" component={ToDo} />
        <Route path="/create-todo" component={AddTodo} />

        <Route path="/" component={Main} />
      </Switch>
    </>
  );
}
export default ToDoRouter;
