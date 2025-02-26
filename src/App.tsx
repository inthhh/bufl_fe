import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./Main/first";
import MoneySplitFirst from "./MoneySplit/first";
import AI_home from "./MoneySplit/ai_home";
import AI_anaLoading from "./MoneySplit/ai_anaLoading";
import AI_calLoading from "./MoneySplit/ai_calLoading";
import AI_calculate from "./MoneySplit/ai_calculate";
import SelectAccount from "./MoneySplit/SelectAccount";
import SelectRatio from "./MoneySplit/SelectRatio";
import Self_home from "./MoneySplit/self_home";
import AI_analysis from "./MoneySplit/ai_analysis";
import Authentication from "./MoneySplit/Authentication";

function App() {
  return (
    <Router>
      <div style={{ width: "400px", height: "800px", backgroundColor: "white" }}>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/MoneySplit" element={<MoneySplitFirst />} />
          <Route path="/MoneySplit/AI" element={<AI_home />} />
          <Route path="/MoneySplit/AI/AnalysisLoading" element={<AI_anaLoading />} />
          <Route path="/MoneySplit/AI/CalculateLoading" element={<AI_calLoading />} />
          <Route path="/MoneySplit/AI/Analysis" element={<AI_analysis />} />
          <Route path="/MoneySplit/AI/Calculate" element={<AI_calculate />} />
          <Route path="/MoneySplit/Self" element={<Self_home />} />
          <Route path="/MoneySplit/SelectAccount" element={<SelectAccount />} />
          <Route path="/MoneySplit/SelectRatio" element={<SelectRatio />} />
          <Route path="/MoneySplit/Authentication" element={<Authentication />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
