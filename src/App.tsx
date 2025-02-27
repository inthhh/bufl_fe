import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./Main/first";
import MoneySplitFirst from "./MoneySplit/first";

import SelectAccount from "./MoneySplit/SelectAccount";
import SelectRatio from "./MoneySplit/SelectRatio";

import Authentication from "./MoneySplit/Authentication";
import TossAuth from "./MoneySplit/TossAuth";
import InputPin from "./MoneySplit/InputPin";

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

          <Route path="/MoneySplit/SelectAccount" element={<SelectAccount />} />
          <Route path="/MoneySplit/SelectRatio" element={<SelectRatio />} />
          <Route
            path="/MoneySplit/Authentication"
            element={<Authentication />}
          />
          <Route path="/MoneySplit/TossAuth" element={<TossAuth />} />
          <Route path="/MoneySplit/InputPin" element={<InputPin />} />
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
