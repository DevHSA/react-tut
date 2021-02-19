import React from "react";
import "./Person.css";


const person = (props) => {
  const rnd = Math.random();

  
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm a {props.name} person and i am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
