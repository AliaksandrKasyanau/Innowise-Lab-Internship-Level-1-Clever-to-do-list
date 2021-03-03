import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
import { auth } from '@firebaseAlias/firebase';
import { generateUserDocument } from '@firebaseAlias/firebaseDBQueries';

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
