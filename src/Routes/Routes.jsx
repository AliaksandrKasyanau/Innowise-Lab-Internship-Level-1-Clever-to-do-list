import React, { useContext } from 'react';
import { Router } from '@reach/router';
import SignIn from '../components/Auth/SignIn/SignIn';
import SignUp from '../components/Auth/SignUp/SignUp';
import HomePage from '../components/HomePage/HomePage';
import { UserContext } from '../providers/UserProvider';
import PasswordReset from '../components/Auth/PasswordReset/PasswordReset';
import DaysProvider from '../providers/DaysProvider';
import ToDoPage from '../components/ToDoPage/ToDoPage';
import AddToDoPage from '../components/AddToDoPage/AddToDoPage';
import EditToDoPage from '../components/EditToDoPage/EditToDoPage';

function Routes() {
  const user = useContext(UserContext);
  return user ? (
    <div className="App">
      <DaysProvider>
        <Router>
          <HomePage path="/" />
          <ToDoPage path="todo" />
          <AddToDoPage path="add-todo" />
          <EditToDoPage path="edit-todo" />
          <HomePage path="/*" />
        </Router>
      </DaysProvider>
    </div>
  ) : (
    <div className="App">
      <Router>
        <SignIn path="/" />
        <SignUp path="signUp" />
        <PasswordReset path="passwordReset" />
        <SignIn path="/*" />
      </Router>
    </div>
  );
}

export default Routes;
