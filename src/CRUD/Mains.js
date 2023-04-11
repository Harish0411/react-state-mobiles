import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Login} from './Login'
import {Form} from './Form'
import Home from './Home'

export const Mains = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='*'></Route>
        
      </Routes>
    </BrowserRouter>
  )
}
