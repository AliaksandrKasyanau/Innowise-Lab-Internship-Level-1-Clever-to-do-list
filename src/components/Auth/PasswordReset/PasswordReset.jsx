import React, { useState } from 'react';
import { Link } from '@reach/router';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase/firebase';

const PasswordReset = () => {
  const [email, setEmail] = useState('');
  const [, setEmailHasBeenSent] = useState(null);
  const [, setError] = useState(null);

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
        setEmailHasBeenSent(toast.success('Email has been sent!'), {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setTimeout(() => {
          setEmailHasBeenSent(null);
        }, 5000);
      })
      .catch(() => {
        setError(toast.error('Invalid credentials'), {
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

          <Link to="/" className="link">
            &larr; back to sign in page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
