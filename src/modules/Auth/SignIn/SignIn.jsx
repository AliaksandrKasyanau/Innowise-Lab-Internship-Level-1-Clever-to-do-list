import React, { useState } from 'react';
import '../Auth.scss';
import { toast } from 'react-toastify';
import { Container, Row, Col } from 'react-bootstrap';
import { signInWithGoogle } from '../../../firebase/firebaseAuthQueries';
import { auth } from '../../../firebase/firebase';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setError] = useState(null);
  const [, setIsLoggedIn] = useState(null);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setIsLoggedIn(toast.success('You are logged in!'), {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch(() => {
        setError(toast.error('Invalid credentials!'), {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    }
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
              <button
                className="button primary-button"
                onClick={(event) => {
                  signInWithEmailAndPasswordHandler(event, email, password);
                }}
              >
                Sign In
              </button>
            </form>
            <button
              className="button google-button"
              onClick={() => {
                signInWithGoogle();
              }}
            >
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
