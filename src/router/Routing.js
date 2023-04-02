import React from 'react'
import { Login } from './login'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import { Header } from './header'
import { About } from './about'

export const Routing = () => {
  return (
    <div>
        <BrowserRouter>
          <Routes> 
            <Route path='/' element={<Login/>}></Route>
            <Route path='/header' element={<Header/>}></Route>
            <Route path='/about/:id/:name' element={<About/>}></Route>
            <Route path='*' element={<>Not Found</>}></Route>
          </Routes>
        </BrowserRouter>
       
    </div>
  )
}
