import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div>
      <h1>Vending Machine</h1>
      <p>Pick your snack:</p>
      <ul>
        <li><Link to="/chips">Lays</Link></li>
        <li><Link to="/soda">Coke</Link></li>
        <li><Link to="/candy">Twix</Link></li>
      </ul>
    </div>
  );
}

export default VendingMachine;
