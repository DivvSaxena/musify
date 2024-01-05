import React from 'react'
import {BrowserRouter as Router, Route , Routes , useNavigate } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/login' Component={Login}/>
          <Route path='/signup' Component={SignUp}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
