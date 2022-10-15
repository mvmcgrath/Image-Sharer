import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Navigation from './components/Navigation'
import User from './components/User'
import ImagePage from './components/ImagePage'
import UserList from './components/UserList'
import Redirect from './components/Redirect'

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
      <Navigation user={user} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={ user === null ? <Login /> : <Navigate to="/user" />} />
          <Route path="/register" element={ user === null ? <Register /> : <Navigate to="/user" />} />
          <Route path="/userlist" element={ <UserList /> } />
          <Route path="/user/:userId" element={ <User user={user} />} />
          <Route path="/image/:imageId" element={ <ImagePage user={user} />} />
          <Route path="/user/:userId/image/:imageId" element={ <Redirect />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
