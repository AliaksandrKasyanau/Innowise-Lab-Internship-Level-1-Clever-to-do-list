import React from 'react'
import './App.scss'
import UserProvider from './providers/UserProvider'
import Routes from './Routes/Routes'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <UserProvider>
      <ToastContainer />
      <Routes />
    </UserProvider>
  )
}

export default App
