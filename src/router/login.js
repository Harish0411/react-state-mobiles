import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  let product ={
    id:45,
    name:'cars',
    isPurchaed:true
  }

 let goAbout = () =>{
    navigate('/about/456/cars')
  }

  return (
    <div><p>Login page</p>
      <Link to={'/header?id=345&name=seruppu'}>Go to header</Link>
      <button onClick={() => goAbout()}>Go to about</button>
    </div>
  )
}
