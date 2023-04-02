import React, { useEffect, useState, memo } from 'react'
import { Child } from './child'


export const Main = memo(() => {
    const [name, setName] = useState('hari')
    const [show, setShow] = useState(true)
   
useEffect(() =>{
    console.log('componentDidMount');
},[])

useEffect(() =>{
   console.log('name updated');
},[name])

// useEffect(() =>{
//     return () =>{
//         clearInterval(timer)
//     }
// })
  return (
    <div>Main {name}
    <button onClick={() => setName('hariharan')}>update Name</button>
    <button onClick={() => setShow(!show)}>hide/show</button>
     
       {show ? <Child/> : null}
    </div>
  )
})
