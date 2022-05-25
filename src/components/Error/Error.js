import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

export const Error = ({ errorMessage }) => {
  return (
    <div className="error">
      <h1>Sorry, we're unable to get that. Please try again!</h1>
      <Link to="/">
        <button className="go-back-button">Home</button>
      </Link>
    </div>
  );
};
