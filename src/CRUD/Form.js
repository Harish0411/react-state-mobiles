import React, { useState } from "react";
import userData from "../Userdata.json";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

let empty = [];

export const Form = () => {
  let locationState = useLocation();
  let param = locationState.state;
//   console.log(param);

  const [name, setName] = useState(param ? param.name : "");
  const [description, setDescription] = useState(
    param ? param.description : ""
  );
  const [inner, setInner] = useState("ADD");
  const [check, setCheck] = useState(param ? param.isCompleted : false);
  const [arr, setArr] = useState([]);

  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  let navigate = useNavigate();

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
   // console.log(e.nativeEvent.submitter.innerHTML);
    setName("");
    setDescription("");
    setCheck(false);

    let mytask = {
      id: small_id,
      name: name,
      description: description,
      isCompleted: check,
    };

    // if (param !== null) {
    //   let filterID = empty.filter((e) => e.id == param.id);
    //   let index = empty.indexOf(filterID[0]);
    //   console.log(index);
    //   empty[index] = mytask;
    //   setInner("save");
    //   // e.nativeEvent.submitter.innerHTML = {};
    // } else {
    //   empty.push(mytask);
    // }

    empty.push(mytask);

    // setArr([...arr,mytask])

    localStorage.setItem("tasks", JSON.stringify(empty));

    navigateHome();
  };

  let navigateHome = () => {
    navigate("/home");
  };

  let saveChanges = () => {
      if(param.hasOwnProperty('id')){
          let filterID = empty.filter((e) => e.id == param.id)
             let index = empty.indexOf(filterID[0])
             navigate('/home')

             let newObj = {
              id : param.id,
              name : name,
              description : description,
              isCompleted : check
             }
            //  console.log(empty);
            //  console.log(filterID);
            //  console.log(param.id);
            //  console.log(index);
             empty.splice(index, 1 , newObj)

             localStorage.setItem('tasks', JSON.stringify(empty))

      }
  }

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
          <button type={"submit"}>{inner}</button>
          {param && <button onClick={saveChanges}>Save</button>}
        </form>
        
      </div>
    </div>
  );
};
