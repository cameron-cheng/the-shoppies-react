import React from "react";
import Alert from "react-bootstrap/Alert";
import "./App.css";

function Banner({ nominationList }) {
  if (nominationList.length === 5) {
    return (
      <Alert className="alert-position" variant="success">
        Congratulations! You have nominated 5 movies!
      </Alert>
    );
  } else {
    return null
  }
}

export default Banner;
