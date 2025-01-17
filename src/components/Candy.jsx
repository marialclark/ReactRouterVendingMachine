import React from "react";
import { Link } from "react-router-dom";
import twixImage from "../assets/twix.jpg";

function Candy() {
  return (
    <div>
      <h1>Enjoy your Twix!</h1>
      <img src={twixImage} alt="Twix" style={{ width: "300px" }} />
      <br />
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Candy;