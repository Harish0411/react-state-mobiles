import React, {useState} from 'react'
import {Child} from './child'

export const Parent = () => {
  const  mobiles = [
        {
        id:"001",
        name :"oneplus11",
        price : 56999,
        isPurchased: true},
        {
        id:"002",
        name : "Vivi Y100",
        price : 24999,
        isPurchased: false},
        {
        id:"003",
        name : "Redmi 10",
        price : 56999,
        isPurchased : true},
        {
        id:"004",
        name : "iphone 13",
        price : 62990,
        isPurchased : false},
        {
        id:"005",
        name : "Nokia",
        price : 12000,
        isPurchased : true},
        {
        id:"006",
        name : "Poco M4",
        price : 13999,
        isPurchased : true}
    ]
  
//   let names = mobiles.map(e => e.name) 

//   const [name, nameSorting] = useState(names)

// //   let asc = mobiles.sort((a,b) => {
// //     var la = a.name.toLowerCase(), lb = b.name.toLowerCase()
// //     if(la<lb){
//  //   return -1;
// //}
// //     if(la>lb) {
// //  return 1;
// //}
// // else{
// //     return 0;
// // }
// //    
// // } ).map(e => e.name)

// // let dsc = [...asc].reverse()

// let price = mobiles.map(e => e.price)
// //console.log(price);
// const [prices, priceSorting] = useState(price);

// // let low_to_high = mobiles.sort((a,b) => a.price-b.price).map(e => e.price)
// // let high_to_low = [...low_to_high].reverse();

// const [purchased, filtered] = useState(names)

// let purchase = mobiles.filter(e => e.isPurchased === true).map(e => e.name)

        
  return (

    <Child data ={mobiles} />
    
    // <div>
    //     <button onClick={() => nameSorting(asc)}>sort by ascending(name)</button>
    //     <button onClick={() => nameSorting(dsc)}>sort by descending(name)</button>
    //     {name.map((item, index) => <div key={index}><h2>{item}</h2></div>)}

    //     <button onClick={() => priceSorting(low_to_high)}>low to high(price)</button>
    //     <button onClick={() => priceSorting(high_to_low)}>high to low(price)</button>
    //     {prices.map((item,index) => <div key={index}><h2>{item}</h2></div>)}

    //     <button onClick={() =>filtered(purchase)}>Purchased</button>
    //     {purchased.map((item,index) => <div key={index}><h2>{item}</h2></div>) }
    // </div>
  )
}
