import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
      case "textarea":
        inputElement = (
          <textarea
            className={classes.InputElement}
            {...props}
            value={props.value}
            onChange={props.changed}
          />
        );
        break;
        case "select":
      inputElement = (
        <select
          className={classes.InputElement}
          {...props}
          value={props.value}
          onChange={props.changed}
        >

        {props.elementConfig.options.map(item=> {

          return <option value={item.value}>{item.displayValue}</option>
        })}


        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={classes.InputElement}
          {...props}
          value={props.value}
        />
      );
  }

  return (
    <div>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;
