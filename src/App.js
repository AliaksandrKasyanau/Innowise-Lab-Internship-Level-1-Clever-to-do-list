import React, { useEffect, useState } from 'react';
import './App.scss';

import Application from "./components/Application/Application";
import UserProvider from "./providers/UserProvider";


function App() {
  
  return (
    <UserProvider>
    <Application />
  </UserProvider>
  );
}

export default App;
