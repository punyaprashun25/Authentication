import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Homepage, Signup, Login} from './pages'
const App = () => {
  return (
    <BrowserRouter >
      <Routes >
          <Route path='/' element={<Homepage />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/signup' element={<Signup />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
