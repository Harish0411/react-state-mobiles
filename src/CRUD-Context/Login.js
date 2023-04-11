import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { stateContext } from '../context/createContext'

export const Login = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [showError, setShowError] = useState(false)
    const { state, dispatch } = useContext(stateContext);

    console.log(state);
  
    let changeValue = (e) =>{
      {
          e.target.name === "username"
            ? setName(e.target.value)
            : setPassword(e.target.value)
        }
      }

    let handleEvent = (e) =>{
       e.preventDefault()
    //    console.log(name, password);
        setShowError(!showError)

        dispatch({
            type : "Login" ,
        })

     

      let findUser = state.userData.find((item) => item.username === name && item.password === password)
       console.log(findUser);

       dispatch({
        type : 'UserName',
        payload : findUser.username, 
    })
   
      if(findUser){
        navigate('/home')
      }
      else{
        setShowError(true)
      }
    }
    let goForm = () =>{
        navigate('/form')
    }
    
  
    const navigate = useNavigate()
    return (
        <div>
            <button onClick={() => goForm()}>ADD FORM</button>
      <div className='form__container'>
          <form onSubmit={handleEvent}> 
             <input type='text' value={name} name='username' onChange={(e) => changeValue(e)} placeholder='Enter user name'/><br/><br/>
             {name === '' && showError && <div>please fill the username</div>}
             <input type='password' value={password} name='password' onChange={(e) => changeValue(e)} placeholder='Enter your password'/><br/><br/>
             {password === '' && showError && <div>please fill the password</div>}
             <button type='submit'>Login</button>
          </form>
          {showError && <p style={{fontSize:'20px',color:'red'}}>user name or password incorrect</p>}
      </div>
      </div>
    )
}
