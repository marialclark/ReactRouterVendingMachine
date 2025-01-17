import React from "react";
import { Link } from "react-router-dom";
import laysImage from "../assets/lays.jpg";

function Chips() {
  return (
    <div>
      <h1>Enjoy your Lays chips!</h1>
      <img src={laysImage} alt="Lays Chips" style={{ width: "300px" }} />
      <br />
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Chips;