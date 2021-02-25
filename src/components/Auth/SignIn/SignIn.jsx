import React, { useState } from 'react';
import { Link } from '@reach/router';
import { auth, signInWithGoogle } from '../../../firebase';
import '../Auth.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      setError('Error: Invalid credentials');
      console.error('Invalid credentials', error);
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
    <div className="auth-wrapper">
      <div className="container">
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
          <Link to="passwordReset" className="link">
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

        <div className="error-wrapper">
          {error !== null && <div className="error">{error}</div>}
        </div>
        <p>
          Don't have an account?{' '}
          <Link to="signUp" className="link">
            Sign up
          </Link>{' '}
        </p>
      </div>
    </div>
  );
};

export default SignIn;
