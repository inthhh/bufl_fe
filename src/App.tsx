import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./Main/first";
import MoneySplitFirst from "./MoneySplit/SplitFirst";

import AI_home from "./MoneySplit/ai_Pages/ai_home";
import AI_anaLoading from "./MoneySplit/ai_Pages/ai_anaLoading";
import AI_calLoading from "./MoneySplit/ai_Pages/ai_calLoading";
import AI_calculate from "./MoneySplit/ai_Pages/ai_calculate";
import SelectAccount from "./MoneySplit/SelectAccount";
import SelectRatio from "./MoneySplit/SelectRatio";
import Self_home from "./MoneySplit/self_home";
import AI_analysis from "./MoneySplit/ai_Pages/ai_analysis";
import Authentication from "./MoneySplit/Authentication";
import TossAuth from "./MoneySplit/TossAuth";
import InputPin from "./MoneySplit/InputPin";
import SplitLoading from "./MoneySplit/SplitLoading";

import Account from "./Main/account";
import Second from "./Main/second";

import StartPage from "./SignOn/pages/StartPage";
import PersonalInfoPage from "./SignOn/pages/PersonalInfoPage";
import AgreementPage from "./SignOn/pages/AgreementPage";
import SalaryInfoPage from "./SignOn/pages/SalaryInfoPage";
import InterestPage from "./SignOn/pages/InterestPage";
import CompletionPage from "./SignOn/pages/CompletionPage";

import AddCategory from "./MoneySplit/AddCategory";
import SplitFinish from "./MoneySplit/SplitFinish";
import SelectAccountDetail from "./MoneySplit/SelectAccountDetail";
import SelectAccountAccounts from "./MoneySplit/SelectAccountAccounts";

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ width: "400px", height: "800px", backgroundColor: "white" }}>
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/money-split" element={<MoneySplitFirst />} />

          <Route path="/money-split/ai" element={<AI_home />} />
          <Route path="/money-split/ai/analysis-loading" element={<AI_anaLoading />} />
          <Route path="/money-split/ai/calculate-loading" element={<AI_calLoading />} />
          <Route path="/money-split/ai/analysis" element={<AI_analysis />} />
          <Route path="/money-split/ai/calculate" element={<AI_calculate />} />
          <Route path="/money-split/self" element={<Self_home />} />
          <Route path="/money-split/select-account" element={<SelectAccount />} />
          <Route path="/money-split/select-ratio" element={<SelectRatio />} />
          <Route path="/money-split/authentication" element={<Authentication />} />
          <Route path="/money-split/toss-auth" element={<TossAuth />} />
          <Route path="/money-split/input-pin" element={<InputPin />} />
          <Route path="/money-split/split-loading" element={<SplitLoading />} />
          <Route path="/money-split/finish" element={<SplitFinish />} />
          <Route path="/money-split/select-account/detail" element={<SelectAccountDetail />} />
          <Route path="/money-split/select-account/accounts" element={<SelectAccountAccounts />} />
          <Route path="/money-split/add-category" element={<AddCategory />} />

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
