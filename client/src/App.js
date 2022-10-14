import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Navigation from './components/Navigation'
import User from './components/User'
import Image from './components/Image'

import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedImageUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ user === null ? <Login /> : <Navigate to="/user" />} />
        <Route path="/register" element={ user === null ? <Register /> : <Navigate to="/user" />} />
        <Route path="/user" element={ user === null ? <Navigate to="/login" />: <User user={user} />} />
        <Route path="/user/:userId" element={ <User user={user} />} />
        <Route path="/user/:userId/:imageId" element={ <Image user={user} />} />
      </Routes>
    </div>
  )
}

export default App
