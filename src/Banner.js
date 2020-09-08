import React from "react";
import Alert from "react-bootstrap/Alert";

function Banner({ nominationList }) {
  if (nominationList.length === 5) {
    return (
      <Alert variant="primary">
        Congratulations! You have nominated 5 movies!
      </Alert>
    );
  } else {
    return null
  }
}

export default Banner;
