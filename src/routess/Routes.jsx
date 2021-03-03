import React, { useContext } from 'react';
import { UserContext } from '@providers/UserProvider';
import DaysProvider from '@providers/DaysProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import ToDoRouter from './ToDoRouter';
import AuthRouter from './AuthRouter';

function Routes() {
  const user = useContext(UserContext);
  return user ? (
    <div className="App">
      <DaysProvider>
        <Router>
          <ToDoRouter />
        </Router>
      </DaysProvider>
    </div>
  ) : (
    <div className="App">
      <Router>
        <AuthRouter />
      </Router>
    </div>
  );
}

export default Routes;
