import React from "react";
import ReactLoading from "react-loading";
import './spinner.css'

function Spinner() {
  return (
    <div className="spinner">
      <ReactLoading type="spinningBubbles" color="orange" />
    </div>
  );
}

export default Spinner;