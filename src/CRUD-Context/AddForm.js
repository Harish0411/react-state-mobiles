import React, { useContext, useState } from "react";
import { stateContext } from "../context/createContext";
import { useNavigate } from "react-router-dom";


let arr = [];
export const AddForm = () => {
  const { state, dispatch } = useContext(stateContext);
  let navigate = useNavigate();
  const [name, setName] = useState(
    state.editTask.length>0 ? state?.editTask[0]?.name : ""
  );
  const [description, setDescription] = useState(
    state.editTask?.length>0 ? state?.editTask[0]?.description : ""
  );
  const [check, setCheck] = useState(
    state.editTask.length>0 ? state?.editTask[0]?.isCompleted : false
  );

  console.log(state.editTask);



  let changeValue = (e) => {
    {
      e.target.name === "name"
        ? setName(e.target.value)
        : setDescription(e.target.value);
    }
  };

  let checkChange = () => {
    setCheck(!check);
  };

  let updateValues = (e) => {
    e.preventDefault();
    navigate("/home");
    let my_task = {
      name: name,
      description: description,
      isCompleted: check,
    };
    if (state.editTask?.length > 0) {
      arr[state.editTask[1]] = my_task;
      console.log("edit");
      dispatch({
        type : 'edit',
        payload : [],
       }); 
    } else {
      arr.push(my_task);
      console.log("normal");
    }

    dispatch({
      type: "Task",
      payload: arr,
    });

    setName("");
    setDescription("");
    setCheck(false);
  };
  return (
    <div>
      <form onSubmit={updateValues}>
        <input
          type="text"
          value={name}
          name="name"
          placeholder="Task Name"
          onChange={changeValue}
        ></input>
        <br />
        <input
          type="text"
          value={description}
          name="description"
          placeholder="Description"
          onChange={changeValue}
        ></input>
        <br />
        <label>
          <input type={"checkbox"} checked={check} onChange={checkChange} />
          completed
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
