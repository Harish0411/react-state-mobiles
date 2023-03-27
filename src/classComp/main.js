import React, { Component } from 'react'

export default class main extends Component {
    constructor(){
        super()
        this.state = {
            mobiles : [
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
            ],
        purchase : true
          
        }
        this.names = this.state.mobiles
       
    }
 
  nameSorting = (param) =>{
   
   let sort = [...this.names].sort((a,b) => {
        var la = a.name.toLowerCase(), lb = b.name.toLowerCase()
            if(la<lb) return -1;
            if(la>lb) return 1;
            return 0;
    })
    {param === 'asc' ? this.setState({mobiles : sort}) : this.setState({mobiles : sort.reverse()})}
  }

  priceSorting = (param) => {

   let  number = [...this.names].sort((a,b) => a.price-b.price);

 {param === 'ltr' ? this.setState({mobiles : number}) : this.setState({mobiles : number.reverse()})} 
}

filtered = () =>{
    let purchased = [...this.names].filter(e => e.isPurchased === true)  
    this.setState({mobiles : purchased, purchase : false})
}
initial = () =>{
    this.setState({mobiles : this.names, purchase: true})
}
  

  render() {
    return (
 <div>
     <button onClick={() => this.nameSorting('asc')}>sort by ascending(name)</button>
     <button onClick={() => this.nameSorting('dsc')}>sort by descending(name)</button>
     <button onClick={() => this.priceSorting('ltr')}>low to high(price)</button>
     <button onClick={() => this.priceSorting('rtl')}>high to low(price)</button>
     <button onClick={() => { this.state.purchase ? this.filtered() : this.initial()}}>Purchased</button> 

     {this.state.mobiles.map((item,index) =>  <h2 key={index}>{item.name} : {item.price}</h2> )}
 </div>
     
    )
  }
}
