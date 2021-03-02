import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { auth } from '../firebase/firebase';
import { generateUserDocument } from '../firebase/firebaseDBQueries';

export const UserContext = createContext({ user: null });

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      const user = await generateUserDocument(userAuth);
      setUser(user);
    });
  }, []);
  return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>;
};

export default UserProvider;
