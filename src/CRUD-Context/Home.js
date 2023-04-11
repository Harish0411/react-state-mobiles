import React, { useContext } from 'react'
import { stateContext } from '../context/createContext'
import {useNavigate } from 'react-router-dom';

export const Home = () => {
    const {state, dispatch} = useContext(stateContext)
    console.log(state);
    const navigate = useNavigate()

    let taskComplete = (index) =>{
        console.log('check');
        const completed = [...state.tasks]?.map((e,i) =>
        index === i ? {...e, isCompleted : !e.isCompleted} : e)
        dispatch({
        type:'Task', 
        payload : completed
    })
    }

 let deleteValue = (index) =>{
    const confirmDelt = window.confirm('Do you really want to delete this Task?')

    if(confirmDelt === true){
    delete state.tasks[index];
    let tempArr = state.tasks.flat()
    dispatch({
        type:'Task',
        payload : tempArr,
    });
}
 }
 let editValue = (e,index) =>{
   // state.editTask.push(e)
   navigate('/form')
   console.log(state.editTask);
   dispatch({
    type : 'edit',
    payload : [e,index],
   });   
 }
 let darkTheme =(e) =>{
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light'
    }
}
 


  return (
    <div className='content'>
        <div className='header'>
            <span className='user_name'>Welcome {state.userName}!</span>
            <div className='btn'><button onClick={() => navigate('/form')}>Add Tasks</button>
            <button onClick={() => {
                const confirmBox = window.confirm('Are you sure you want to logout ?')
                if(confirmBox === true){
                    navigate('/')
                }
                dispatch({
                    type : "Login"
                })
            }}>LogOut</button>
            <button id='btn_theme' onClick={darkTheme}>Dark</button>
            </div>
        </div>
       
          <button
            onClick={(e) =>
             // state.isChangeText ? filterTask(e) : initial(e)
             dispatch({
                type : "filter",
             })
            }
          > {state.isFilter ?  "view all task"  : "view completed task"}</button>
        <table>
           <thead>
            <tr>
                <td>S.No</td>
                <td>Name</td>
                <td>description</td>
                <td>completed or not</td>
                <td>Action</td>
            </tr>
           </thead>
         <tbody>
           {state.tasks
           ?.filter((e,i) => 
           state.isFilter ? e.isCompleted === true : true)
           ?.map((e,i) => (
         <tr key={i}>
             <td>{i+1}</td>
             <td>{e?.name}</td>
             <td>{e?.description}</td>
             <td>
               <input
                type="checkbox"
                checked={e.isCompleted}
               onChange={() => taskComplete(i)}
                      />
             </td>
             <td>
                <button onClick={() => deleteValue(i)}>Del</button>
                <button onClick={() => editValue(e,i)}>Edit</button>
             </td>
            </tr>
         ))}
           </tbody>
       </table>
        

    </div>
  )
}
