import React from "react";
import { Routes, Route } from "react-router-dom";
import VendingMachine from "./components/VendingMachine";
import Chips from "./components/Chips";
import Soda from "./components/Soda";
import Candy from "./components/Candy";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/candy" element={<Candy />} />
      </Routes>
    </div>
  )
}

export default App
