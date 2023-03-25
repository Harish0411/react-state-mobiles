import React, {useState} from 'react'
import './child.css'

export const Child = (props) => {
   
const [mobile,changeMobile] = useState(props.data)

const nameSorting = (order) =>{
         var sort= [...props.data].sort((a,b) => {
            var la = a.name.toLowerCase(), lb = b.name.toLowerCase()
                if(la<lb) return -1;
                if(la>lb) return 1;
                return 0;
        }) 
        
        {order==='asc' ? changeMobile(sort):changeMobile(sort.reverse())}
}

let priceSorting = (param) =>{
    var number;
     number = [...props.data].sort((a,b) => a.price-b.price);

     {param === 'ltr' ? changeMobile(number) : changeMobile(number.reverse())} 
}

let filtered = () =>{
    let purchased = [...props.data].filter(e => e.isPurchased === true)

    changeMobile(purchased)
}

return (
    <>
     <button onClick={() => nameSorting('asc')}>sort by ascending(name)</button>
     <button onClick={() => nameSorting('dsc')}>sort by descending(name)</button>
     <button onClick={() => priceSorting('ltr')}>low to high(price)</button>
     <button onClick={() => priceSorting('rtl')}>high to low(price)</button>
     <button onClick={() => filtered()}>Purchased</button>

     {mobile.map((e,i) => <h1 key={i}>{e.name} <span>{e.price}</span></h1>)}
    </>
  )
}

