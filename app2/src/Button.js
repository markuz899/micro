import React, { useState } from "react";

const Button = ({ children }) => {
  const [state, setState] = useState(false);
  const buttonStyle = {
    color: "white",
    backgroundColor: state ? "black" : "DodgerBlue",
    padding: "10px",
    borderRadius: 10,
  };

  const onClick = () => {
    setState(!state);
  };

  return (
    <button onClick={onClick} style={buttonStyle}>
      {(children && children) || "-"}
    </button>
  );
};

export default Button;
