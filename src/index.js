import { React, useState, memo } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { Parent } from './parent';
// import Main from './classComp/main';
import Main from "./lifeCycle/main";
import { Mains } from "./CRUD/Mains";
import { Routing } from "./CRUD-Context/Routing";
// import { Main } from './useEffect/main';
// import { Login } from './router/login';
// import { Routing } from './router/Routing';

let mytask;
let temp = [];
export const Index = memo(() => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [check, setCheck] = useState(false);

  let changeValues = (e) => {
    {
      e.target.name === "name"
        ? setName(e.target.value)
        : setDescription(e.target.value);
    }
  };

  let checkChange = () => {
    setCheck(!check);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setDescription("");
    setCheck(false)
    mytask = {
      name: name,
      description: description,
      isCompleted: check
    };

    console.log(mytask);
    temp.push(mytask);
    console.log(temp);

   // newArray();
  };

  // let newArray = () => {
  
  // };

  return (
    <div className="container">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type={"text"}
            value={name}
            name={"name"}
            onChange={(e) => changeValues(e)}
            placeholder={"Enter Task name"}
          />
          <br />
          <br />
          <input
            type={"text"}
            value={description}
            name={"description"}
            onChange={(e) => changeValues(e)}
            placeholder={"Enter description"}
          />
          <br />
          <br />
          <label>
            <input type={"checkbox"} checked={check} onChange={checkChange} />
            completed
          </label>
          <br />
          <br />
          <input type={"submit"} />
        </form>
      </div>
      <hr />
      <Main mytasks={temp} />
    </div>
  );
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Parent/>
  <>
    {/* <Routing/> */}
    {/* <Index /> */}
    {/* <Mains/> */}
    <Routing/>
  </>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
