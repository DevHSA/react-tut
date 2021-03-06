import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  let inputElement = null;

  const inputClasses = [classes.InputElement]

  if(props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid)
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
      case "textarea":
        inputElement = (
          <textarea
            className={inputClasses.join(' ')}
            {...props}
            value={props.value}
            onChange={props.changed}
          />
        );
        break;
        case "select":
      inputElement = (
        <select
          className={inputClasses.join(' ')}
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
          className={inputClasses.join(' ')}
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
