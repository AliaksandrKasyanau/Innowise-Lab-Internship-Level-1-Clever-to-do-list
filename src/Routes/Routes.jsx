import React, { useContext } from 'react';
import SignIn from '../components/Auth/SignIn/SignIn';
import SignUp from '../components/Auth/SignUp/SignUp';
import HomePage from '../components/HomePage/HomePage';
import AddToDoPage from '../components/AddToDoPage/AddToDoPage';
import { UserContext } from '../providers/UserProvider';
import PasswordReset from '../components/Auth/PasswordReset/PasswordReset';
import DaysProvider from '../providers/DaysProvider';
import ToDoPage from '../components/ToDoPage/ToDoPage';
import EditToDoPage from '../components/EditToDoPage/EditToDoPage';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function Routes() {
  const user = useContext(UserContext);
  return user ? (
    <div className="App">
      <DaysProvider>
        <Router>
          <Switch>
            <Route path="/edit-todo" component={EditToDoPage} />
            <Route path="/todo" component={ToDoPage} />
            <Route path="/create-todo" component={AddToDoPage} />

            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </DaysProvider>
    </div>
  ) : (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/password-reset" component={PasswordReset} />
          <Redirect from="/" to="/sign-in" />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
