import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./Main/first";
import MoneySplitFirst from "./MoneySplit/first";
import AI_1 from "./MoneySplit/ai_1";
import Self_1 from "./MoneySplit/self_1";
import Account from "./Main/account";
import Second from "./Main/second";

import StartPage from "./SignOn/pages/StartPage";
import PersonalInfoPage from "./SignOn/pages/PersonalInfoPage";
import AgreementPage from "./SignOn/pages/AgreementPage";
import SalaryInfoPage from "./SignOn/pages/SalaryInfoPage";
import InterestPage from "./SignOn/pages/InterestPage";
import CompletionPage from "./SignOn/pages/CompletionPage";

function App() {
  return (
    <Router>
      <div
        style={{ width: "400px", height: "800px", backgroundColor: "white" }}
      >
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/MoneySplit" element={<MoneySplitFirst />} />
          <Route path="/MoneySplit/AI/1" element={<AI_1 />} />
          <Route path="/MoneySplit/Self/1" element={<Self_1 />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Second" element={<Second />} />

          <Route path="/sign" element={<StartPage />} />
          <Route path="/sign/personal-info" element={<PersonalInfoPage />} />
          <Route path="/sign/agreement" element={<AgreementPage />} />
          <Route path="/sign/salary-info" element={<SalaryInfoPage />} />
          <Route path="/sign/interest" element={<InterestPage />} />
          <Route path="/sign/completion" element={<CompletionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
