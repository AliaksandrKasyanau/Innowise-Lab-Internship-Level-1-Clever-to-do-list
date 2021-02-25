import React, { useState } from 'react';
import { auth } from '../../../firebase';
import { Link } from '@reach/router';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    }
  };

  const sendResetEmail = (event) => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => {
          setEmailHasBeenSent(false);
        }, 3000);
      })
      .catch(() => {
        setError('Error: Ooops, something went wrong');
      });
  };
  return (
    <div className="auth-wrapper">
      <div className="container">
        <div className="icon">autorenew</div>
        <h1>Reset your Password</h1>
        <div>
          <form className="form">
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              value={email}
              placeholder="Input your email"
              onChange={onChangeHandler}
              className="input"
            />
            <button
              className="button primary-button fp-button"
              onClick={(event) => {
                sendResetEmail(event);
              }}
            >
              Send me a reset link
            </button>
          </form>
          {emailHasBeenSent && <div className="email-sent">An email has been sent to you!</div>}
          <div className="error-wrapper">
            {error !== null && <div className="error">{error}</div>}
          </div>

          <Link to="/" className="link">
            &larr; back to sign in page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
