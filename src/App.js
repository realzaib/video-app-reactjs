import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Videos from './components/Videos'
import Upload from './components/Upload'
import Login from './components/Login'
import Singup from './components/Singup'

const App = () => {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/upload-video' element={<Upload/>}/>
        <Route path='/log-in' element={<Login/>}/>
        <Route path='/sign-up' element={<Singup/>}/>
      </Routes>
      <Footer/>
    </Router>

    </>
  )
}

export default App