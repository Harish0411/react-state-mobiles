import React, { useState, useEffect, memo } from "react";

let timer;
export const Child = memo(() => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [selectedFruit, setSelectedFruit] = useState("orange");
  const [selectedVegs, setSelectedVegs] = useState(["corn", "tomato"]);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    console.log("Child componentDidMount");
    // timer = setInterval(() => {
    //     console.log('count updated');
    //    setCount((pre) => pre+1)
    // },1000)

    // return () =>{
    //     console.log('will unmount');
    //     clearInterval(timer)
    // }
  }, []);

  console.log("Child");

 let submitForm = () =>{
    setIsSubmit(true)
  }

  return (
    <div>
      Child
      <p>
        {count}
        <button onClick={() => setCount(count + 1)}>click</button>
      </p>
      <form onSubmit={() => submitForm()}>
      <label>
        Enter Name{": "}
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input type={'submit'} value={'submit'} />
       { isSubmit && <div>Must fill the name</div>}
        <p>Hello {name}!</p>
      </label>
      </form>
      <hr />
      <label>
        Pick a fruit:
        <select
          value={selectedFruit}
          onChange={(e) => setSelectedFruit(e.target.value)}
        >
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </label>
      <hr />
      <label>
        Pick all your favorite vegetables:
        <select
          multiple={true}
          value={selectedVegs}
          onChange={(e) => {
            const options = [...e.target.selectedOptions];
            console.log(options);
            const values = options.map((option) => option.value);
            setSelectedVegs(values);
          }}
        >
          <option value="cucumber">Cucumber</option>
          <option value="corn">Corn</option>
          <option value="tomato">Tomato</option>
        </select>
      </label>
      <hr />
      <p>Your favorite fruit: {selectedFruit}</p>
      <p>Your favorite vegetables: {selectedVegs.join(", ")}</p>
    </div>
  );
});
