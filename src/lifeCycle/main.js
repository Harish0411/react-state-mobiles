import React, { Component, PureComponent } from "react";
import Child from "./child";
import { Index } from "..";
import "./style.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
this.newTask = props.mytasks
    this.state = {
      tasks: this.newTask,
      filter: false,
      checked: true,
      dark: true,
      task: "view completed task",
      serial: 1,
    };
    console.log(this.state.tasks);
  }

  fliterTask = (e) => {
    this.setState({ filter: !this.state.filter, dark: !this.state.dark });
    e.target.innerHTML = "view all tasks";
  };
  initial = (e) => {
    e.target.innerHTML = "view completed tasks";
    this.setState({ dark: !this.state.dark, filter: !this.state.filter });
  };
  taskComplete = (index) => {
    console.log("hi");
    const temp = [...this.state.tasks];
    const completed = temp.map((e, i) =>
      index === i ? { ...e, isCompleted: !e.isCompleted } : e
    );
    // const completed = (temp[index].isCompleted = "true");
    console.log(completed);
    this.setState({ tasks: completed });
  };

  deleteValue = (index) =>{
    let tempArr = [...this.state.tasks]
    tempArr.splice(index,1)
    this.setState({tasks : tempArr})
   
  }

  componentDidMount() {
    console.log("child mount");
  }

  render() {
   // console.log(this.newTask);
    return (
      <div className="content">
        <button
          onClick={(e) =>
            this.state.dark ? this.fliterTask(e) : this.initial(e)
          }
        >
          view Completed task
        </button>
        <table>
          <thead>
            <tr>
              <td>S.No</td>
              <td>Task Name</td>
              <td>Description</td>
              <td>Completed or not</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {this.state.tasks
              .filter((e) =>
                this.state.filter ? e.isCompleted === true : true
              )
              .map((e, i) => (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{e.name}</td>
                  <td>{e.description}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={e.isCompleted}
                      onChange={() => this.taskComplete(i)}
                    />
                  </td>
                  <td><button onClick={() => this.deleteValue(i)}>Del</button></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }

  //     constructor(){
  //         super()
  //         this.state ={
  //             count : 0,
  //             name : 'hari',
  //             age: 23
  //         }
  //         console.log('constructor');
  //     }
  //     componentDidMount(){
  //       //  setInterval(() => {
  //             this.setState({count : this.state.count+1}, () =>   console.log(this.state.count)) //this is the way to get updated value in the seState
  //           console.log(this.state.count);
  //       //  },1000)
  //         console.log('componentDidMount');
  //     }
  //     // getUpdate(a){
  //     //     console.log('hi', a);
  //     // }
  //     componentDidUpdate(prevProps, prevState){
  //         console.log(prevState);
  //         // if(prevState.count !== this.state.count){
  //         //    this.getUpdate(this.state.count)      //this is another way to get updated value
  //         // }
  //         console.log('componentDidUpdate');
  //     }

  //     updateName(){
  //         this.setState({name : 'hariharan'}, () => console.log(this.state.name))
  //     }
  //     // shouldComponentUpdate(){
  //     //     return false;
  //     // }
  //   render() {
  //     console.log('render');
  //     return (
  //         <>
  //         <div>Main {this.state.name} {this.state.age}
  //         <button onClick={() => this.setState({age:43})}>update age</button>
  //         <button onClick={() => this.updateName()}>UpdateName</button></div>
  //        <Child name={this.state.name} age={this.state.age}/>
  //         </>

  //     )
  //   }
  // }
}
