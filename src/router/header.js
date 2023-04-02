import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const Header = () => {
    let [params, setParam] = useSearchParams()
    console.log(params);

    // var fun = params.getAll()

//    fun(...arg){
//         console.log(arg);
//     }
    
  return (
    <div>Header
        <p>id : {params.get('id')}</p>
        <button onClick={() => setParam({id : 1000})}>update</button>
    </div>
  )
}
