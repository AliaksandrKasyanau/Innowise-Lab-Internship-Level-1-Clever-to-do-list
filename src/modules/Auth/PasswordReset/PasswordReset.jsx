import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendResetEmail } from '@firebaseAlias/firebaseDBQueries';

const PasswordReset = () => {
  const [email, setEmail] = useState('');

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    }
  };
  const sendResetEmailHandler = (event) => {
    sendResetEmail(event, email);
    setEmail('');
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
            <button className="button primary-button fp-button" onClick={sendResetEmailHandler}>
              Send me a reset link
            </button>
          </form>

          <Link to="/" className="link">
            &larr; back to sign in page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
