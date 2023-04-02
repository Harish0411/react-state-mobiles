import React, { Component } from 'react'

export class Child extends Component {
    constructor(){
        super()
        this.state ={
         component : 'Child component'

         // name : this.props.name, 
        }
      // console.log(this.props.name);
        console.log('child constructor');
    }
    componentDidMount(){
       // this.setState({component : 'Child component updated'})
      //  setInterval(() => {
     //  this.setState({count : this.state.count+1}, () =>   console.log(this.state.count))       
    //  },1000)
        console.log('child componentDidMount');
    }

    componentDidUpdate(prevProps, prevState){
        // console.log('prevstate', prevState);
        // console.log('currrentstate', this.state);
        // console.log('prevprops',prevProps);
        // console.log('currentprop', this.props);
        // if(prevProps.component !== this.props.component){
        //    // this.setState({name : this.props.name})
        //    this.setState()
        // }

        console.log('child componentDidUpdate');
    }

    shouldComponentUpdate(nextprops, nextstate){
      console.log('nextprops', nextprops, 'currentprop', this.props);
      if( this.props.name !== nextprops.name || this.state.component !== nextstate.component){
        return true;
      }else{
        return false;
      }
        }

  render() {
    console.log('child render');
    return (
        <>
      <div>Child {this.props.name}{this.props.age} {this.state.component}
      <button onClick={() =>  this.setState({component : 'Child component updated'})}>Update</button>
     
      
      </div>
      
      </>
    )
  }
}

export default Child