import React from 'react'
import { useParams } from 'react-router-dom'

export const About = () => {
    let param = useParams()
    console.log(param);
  return (
    <div>About
       <p>product id : {param.id} product name : {param.name}</p> 
    </div>
  )
}
