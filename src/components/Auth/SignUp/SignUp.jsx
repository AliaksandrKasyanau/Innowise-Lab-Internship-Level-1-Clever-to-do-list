import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { toast } from 'react-toastify';
import { Container, Row, Col } from 'react-bootstrap';

import { generateUserDocument } from '../../../firebase/firebaseDBQueries';
import { auth } from '../../../firebase/firebase';
import { signInWithGoogle } from '../../../firebase/firebaseAuthQueries';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [, setError] = useState(null);
  const [, setIsRegistered] = useState(null);
  const [, setIsLoggedIn] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, { displayName });
      setIsRegistered(toast.success('Account has been created!'), {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsLoggedIn(toast.success('You are logged in!'), {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      setError(toast.error('Invalid credentials!'), {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setEmail('');
    setPassword('');
    setDisplayName('');
    navigate('/');
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    } else if (name === 'userPassword') {
      setPassword(value);
    } else if (name === 'displayName') {
      setDisplayName(value);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="auth-wrapper" xs={12}>
            <div className="icon">how_to_reg</div>
            <h1>Sign Up</h1>
            <form className="form">
              <input
                type="text"
                className="input"
                name="displayName"
                value={displayName}
                placeholder="Your Name"
                id="displayName"
                onChange={(event) => onChangeHandler(event)}
              />
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
              <button
                className="button primary-button"
                onClick={(event) => {
                  createUserWithEmailAndPasswordHandler(event, email, password);
                }}
              >
                Sign Up
              </button>
            </form>
            <button
              onClick={() => {
                try {
                  signInWithGoogle();
                } catch (error) {
                  console.error('Error signing in with Google', error);
                }
                navigate('/');
              }}
              className="button google-button"
            >
              Sign In with Google
            </button>

            <p>
              Already have an account?{' '}
              <Link to="/" className="link">
                Sign in here
              </Link>{' '}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
