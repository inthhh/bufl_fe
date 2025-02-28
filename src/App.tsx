import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./Main/first";
import MoneySplitFirst from "./MoneySplit/first";
import AI_1 from "./MoneySplit/ai_1";
import Self_1 from "./MoneySplit/self_1";
import Second from "./Main/second";
import Box1 from "./Main/box1";
import Box2 from "./Main/box2";
import Account from "./Main/account";

function App() {
  return (
    <Router>
      <div style={{ width: "400px", height: "800px", backgroundColor: "white" }}>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/MoneySplit" element={<MoneySplitFirst />} />
          <Route path="/MoneySplit/AI/1" element={<AI_1 />} />
          <Route path="/MoneySplit/Self/1" element={<Self_1 />} />
          <Route path="/Main" element={<First />} />
          <Route path="/Main/Second" element={<Second />} />
          <Route path="/Main/box1" element={<Box1 />} />
          <Route path="/Main/box2" element={<Box2 />} />
          <Route path="/Account" element={<Account />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
