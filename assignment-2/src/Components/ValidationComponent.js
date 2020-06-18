import React from "react";

const ValidationComponent = (props) => {
  let msg;
  if (props.length < 5) msg = "Text too short";
  else msg = "Text long enough";

  return (
    <React.Fragment>
      <p>{msg}</p>
    </React.Fragment>
  );
};

export default ValidationComponent;
