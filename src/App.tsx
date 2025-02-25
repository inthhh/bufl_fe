import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./Main/first";
import MoneySplitFirst from "./MoneySplit/first";
import AI_home from "./MoneySplit/ai_home";
import AI_loader from "./MoneySplit/ai_loader";
import Self_home from "./MoneySplit/self_home";
import AI_analysis from "./MoneySplit/ai_analysis";

function App() {
  return (
    <Router>
      <div style={{ width: "400px", height: "800px", backgroundColor: "white" }}>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/MoneySplit" element={<MoneySplitFirst />} />
          <Route path="/MoneySplit/AI" element={<AI_home />} />
          <Route path="/MoneySplit/AI/loading" element={<AI_loader />} />
          <Route path="/MoneySplit/AI/Analysis" element={<AI_analysis />} />
          <Route path="/MoneySplit/Self" element={<Self_home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
