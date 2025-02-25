import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./Main/first";
import MoneySplitFirst from "./MoneySplit/first";
import AI_1 from "./MoneySplit/ai_1";
import Self_1 from "./MoneySplit/self_1";

function App() {
  return (
    <Router>
      <div style={{ width: "400px", height: "800px", backgroundColor: "white" }}>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/MoneySplit" element={<MoneySplitFirst />} />
          <Route path="/MoneySplit/AI/1" element={<AI_1 />} />
          <Route path="/MoneySplit/Self/1" element={<Self_1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
