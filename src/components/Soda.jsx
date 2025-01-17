import React from "react";
import { Link } from "react-router-dom";
import cokeImage from "../assets/coke.jpg";

function Soda() {
  return (
    <div>
      <h1>Enjoy your Coke!</h1>
      <img src={cokeImage} alt="Coke" style={{ width: "300px" }} />
      <br />
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Soda;