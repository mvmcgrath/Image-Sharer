import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Navigation from './components/Navigation'
import User from './components/User'
import ImagePage from './components/ImagePage'
import UserList from './components/UserList'
import Upload from './components/Upload'

import { Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import imageService from './services/image'
import loginService from './services/login'

const App = () => {
  const [user, setUser] = useState(null)

  const handleLogin = async (loginObject) => {
    const user = await loginService.login(loginObject)

    window.localStorage.setItem(
      'loggedImageUser', JSON.stringify(user)
    )

    imageService.setToken(user.token)
    setUser(user)
  }

  const handleLogout = () => {
    window.localStorage.removeItem('loggedImageUser')
    setUser(null)
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedImageUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      imageService.setToken(user.token)
    }
  }, [])

  return (
    <div>
      <Navigation user={user} handleLogout={handleLogout} />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={ user === null ? <Login handleLogin={handleLogin} /> : <Navigate to="/user" />} />
          <Route path="/register" element={ user === null ? <Register /> : <Navigate to="/user" />} />
          <Route path="/users" element={ <UserList /> } />
          <Route path="/user/:userId" element={ <User user={user} />} />
          <Route path="/image/:imageId" element={ <ImagePage user={user} />} />
          <Route path="/upload" element={ user !== null ? <Navigate to="/login" /> : <Upload />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
