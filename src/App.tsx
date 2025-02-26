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
import TossAuth from "./MoneySplit/TossAuth";
import InputPin from "./MoneySplit/InputPin";

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


const App: React.FC = () => {
  return (
    <Router>
      <div
        style={{ width: "400px", height: "800px", backgroundColor: "white" }}
      >
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
          <Route path="/MoneySplit/TossAuth" element={<TossAuth />} />
          <Route path="/MoneySplit/InputPin" element={<InputPin />} />
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
};

export default App;
