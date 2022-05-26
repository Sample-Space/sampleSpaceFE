import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

export const Error = ({ errorMessage, noMatch }) => {
  const message = noMatch ? (
    <h1>Sorry, this part of space is empty!</h1>
  ) : (
    <h1>Sorry, we're unable to get that. Please try again!</h1>
  )
  return (
    <div className="error">
      {message}
      <Link to="/">
        <button className="go-back-button">Home</button>
      </Link>
    </div>
  );
};
