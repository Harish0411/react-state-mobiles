import React, { useReducer } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './Login'
import { AddForm } from './AddForm'
import { Home } from './Home'
import { stateContext } from '../context/createContext'
import { initialState, stateReducer } from '../context/reducerFun'

export const Routing = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState)
  return (
 <stateContext.Provider value={{state, dispatch}}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/form' element={<AddForm/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='*' element={<Navigate to='/home'></Navigate>}></Route>
      </Routes>
    </BrowserRouter>
 </stateContext.Provider>
  )
}
