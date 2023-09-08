import React from "react";

function Button(props) {
  return <button onClick={() => props.clickAction()}>{props.title}</button>;
}

export default Button;
