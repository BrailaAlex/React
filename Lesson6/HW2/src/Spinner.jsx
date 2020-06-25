import React from "react";

const Spinner = ({ spinnerSize }) => {
  const style = {
    width: `${spinnerSize}px`,
    height: `${spinnerSize}px`
  };
  return (
    <span style={style}
      className="spinner"></span>
  );
}

export default Spinner;