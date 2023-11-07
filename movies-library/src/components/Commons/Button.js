import React from "react";

function Button(props) {
  return (
    <button
      aria-label={props.name}
      data-testid={props.testId}
      className={props.className}
      onClick={() => props.clickAction()}
    >
      {props.title}
    </button>
  );
}

export default Button;
