import React from "react";
import astronaut from "../../assets/images/astronaut.png";
import "./Loader.css"

export const Loader = () => {
  return (
    <div className="loader-container fade-in">
      <img className="floating" src={astronaut} alt="floating astronaut" />
    </div>
  );
};
