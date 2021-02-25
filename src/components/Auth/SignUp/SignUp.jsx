import React, { useState } from 'react';
import { Link } from '@reach/router';
import { auth, signInWithGoogle, generateUserDocument } from '../../../firebase';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError('Error: Invalid credentials');
    }

    setEmail('');
    setPassword('');
    setDisplayName('');
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
    <div className="auth-wrapper">
      <div className="container">
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
            }}
            className="button google-button"
          >
            Sign In with Google
          </button>

          <div className="error-wrapper">
          {error !== null && (
            <div className="error">{error}</div>
          )}
          </div>
          <p>
            Already have an account?{' '}
            <Link to="/" className="link">
              Sign in here
            </Link>{' '}
          </p>
        
      </div>
    </div>
  );
};

export default SignUp;
