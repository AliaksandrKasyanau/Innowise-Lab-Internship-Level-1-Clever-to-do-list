import React, { useState } from 'react';
import '@modules/Auth/Auth.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import {
  signInWithEmailAndPasswordHandler,
  signInWithGoogleHandler,
} from '@firebaseAlias/firebaseAuthQueries';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    }
  };
  const emailPasswordAuth = (event) => {
    signInWithEmailAndPasswordHandler(event, email, password);
  };
  const googleAuth = () => {
    signInWithGoogleHandler();
    history.push('/');
  };
  return (
    <>
      <Container>
        <Row>
          <Col className="auth-wrapper" xs={12}>
            <div className="icon">login</div>
            <h1>Sign In</h1>
            <form className="form">
              <input
                type="email"
                className="input"
                name="userEmail"
                value={email}
                placeholder="Email"
                id="userEmail"
                onChange={(event) => onChangeHandler(event)}
              />
              <input
                type="password"
                className="input"
                name="userPassword"
                value={password}
                placeholder="Password"
                id="userPassword"
                onChange={(event) => onChangeHandler(event)}
              />
              <Link to="password-reset" className="link">
                Forgot Password?
              </Link>
              <button className="button primary-button" onClick={emailPasswordAuth}>
                Sign In
              </button>
            </form>
            <button className="button google-button" onClick={googleAuth}>
              {' '}
              Sign in with Google
            </button>
            <p>
              Don`t have an account?{' '}
              <Link to="sign-up" className="link">
                Sign up
              </Link>{' '}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignIn;
