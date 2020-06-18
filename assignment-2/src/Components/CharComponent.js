import React from "react";

const CharComponent = (props) => {

  const inlineStyle = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    margin: "16px",
    border: "1px solid black",
    boxShadow: "0 2px 3px #ccc",
  };

  return (
    <div style={inlineStyle} onClick={props.clicked}>
      {props.character}
    </div>
  );

};

export default CharComponent;
