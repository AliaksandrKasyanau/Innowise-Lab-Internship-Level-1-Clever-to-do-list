import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PasswordReset from '@modules/Auth/PasswordReset/PasswordReset';
import SignIn from '@modules/Auth/SignIn/SignIn';
import SignUp from '@modules/Auth/SignUp/SignUp';

function AuthRouter() {
  return (
    <>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/password-reset" component={PasswordReset} />
        <Redirect from="/" to="/sign-in" />
      </Switch>
    </>
  );
}
export default AuthRouter;
