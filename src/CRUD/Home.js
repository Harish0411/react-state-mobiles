import {React, Component} from 'react'
import { Navigate, useNavigate, Link } from 'react-router-dom';


var editName, filterTask,
editDescription;
export default class Home extends Component {
    constructor(props) {
      super(props);
   
      this.storedTask = localStorage.getItem('tasks')
      this.state = {
        tasks: JSON.parse(this.storedTask),
        filter: false,
        checked: true,
        dark: true,
        task: "view completed task",
        serial: 1,
        hide : true
      };
    //   console.log(this.state.tasks);
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
    //   console.log(completed);
      this.setState({ tasks: completed });
    };
  
    deleteValue = (index,id) =>{
      let tempArr = [...this.state.tasks]
      tempArr.splice(index,1)
      this.setState({tasks : tempArr})
    //   console.log(tempArr);
       filterTask = tempArr.filter((e) => e.id !== id )
       //console.log(item);
      this.updateLocalStorage(index)
    }

    updateLocalStorage = (i) =>{
        localStorage.setItem('tasks',JSON.stringify(filterTask))
        this.removeItem(i)
    }
    removeItem = (i) =>{
     // this.setState({hide : !this.state.hide})
     let temp = [...this.state.tasks]
     temp.splice(i,1)
     this.setState({tasks : temp})
    //  console.log(temp);
    }
  
    render() {
    
      return (
        <div className="content">
            <Link to={'/form'}><button>Add Tasks</button></Link>
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
                <td>Action</td>
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
                    <td>{e.description}{e.isCompleted}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={e.isCompleted}
                        onChange={() => this.taskComplete(i)}
                      />
                    </td>
                    <td><button onClick={() => this.deleteValue(i,e.id)}>Del</button>
                   <button><Link to={'/form'} state={e}>Edit</Link></button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      );
    }
}
