import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./Main/1-first/first";
import MoneySplitFirst from "./MoneySplit/SplitFirst";

import AI_home from "./MoneySplit/pages/ai_pages/ai_home";
import AI_anaLoading from "./MoneySplit/pages/ai_pages/ai_anaLoading";
import AI_calLoading from "./MoneySplit/pages/ai_pages/ai_calLoading";
import AI_calculate from "./MoneySplit/pages/ai_pages/ai_calculate";
import SelectAccount from "./MoneySplit/pages/control_accounts/SelectAccount";
import SelectRatio from "./MoneySplit/pages/control_categorys/SelectRatio";
import AI_analysis from "./MoneySplit/pages/ai_pages/ai_analysis";
import Authentication from "./MoneySplit/pages/final_process/Authentication";
import TossAuth from "./MoneySplit/pages/final_process/TossAuth";
import InputPin from "./MoneySplit/pages/final_process/InputPin";
import SplitLoading from "./MoneySplit/pages/final_process/SplitLoading";

import DoughnutChart from "./Main/1-first/DoughnutChart";
import Account from "./Main/1-first/account";
import AccountSelector from "./Main/3-second/AccountSelector";
import AccountSelector1 from "./Main/3-second/AccountSelector1";
import Second from "./Main/3-second/second";
import Pig from "./Main/4-pig/pig";
import Loading from "./Main/5-loading/loading";
import List from "./Main/6-list/list";
import Choose from "./Main/7-choose/choose";
import Choice from "./Main/8-choice/choice";
import Rocket from "./Main/9-rocket/rocket";
import Start from "./Main/10-start/start";

import StartPage from "./SignOn/pages/StartPage";
import PersonalInfoPage from "./SignOn/pages/PersonalInfoPage";
import AgreementPage from "./SignOn/pages/AgreementPage";
import SalaryInfoPage from "./SignOn/pages/SalaryInfoPage";
import InterestPage from "./SignOn/pages/InterestPage";
import CompletionPage from "./SignOn/pages/CompletionPage";
import InputPinPage from "./SignOn/pages/InputPinPage";

import AddCategory from "./MoneySplit/pages/control_categorys/AddCategory";
import SplitFinish from "./MoneySplit/pages/final_process/SplitFinish";
import SelectAccountDetail from "./MoneySplit/pages/control_accounts/SelectAccountDetail";
import SelectAccountAccounts from "./MoneySplit/pages/control_accounts/SelectAccountAccounts";
import TossTerms from "./MoneySplit/pages/final_process/TossTerms";
import AI_Cancel from "./MoneySplit/pages/ai_pages/ai_cancel";
import Setting from "./Main/settingPage/Setting";

const App: React.FC = () => {
  return (
    <Router>
      <div
        style={{
          width: "400px",
          height: "800px",
          backgroundColor: "white",
          borderRadius: "15px",
        }}
      >
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/money-split" element={<MoneySplitFirst />} />
          <Route path="/money-split/ai" element={<AI_home />} />
          <Route path="/money-split/ai/analysis-loading" element={<AI_anaLoading />} />
          <Route path="/money-split/ai/calculate-loading" element={<AI_calLoading />} />
          <Route path="/money-split/ai/analysis" element={<AI_analysis />} />
          <Route path="/money-split/ai/calculate" element={<AI_calculate />} />
          <Route path="/money-split/select-account" element={<SelectAccount />} />
          <Route path="/money-split/select-ratio" element={<SelectRatio />} />
          <Route path="/money-split/authentication" element={<Authentication />} />
          <Route path="/money-split/toss-auth" element={<TossAuth />} />
          <Route path="/money-split/input-pin" element={<InputPin />} />
          <Route path="/money-split/split-loading" element={<SplitLoading />} />
          <Route path="/money-split/finish" element={<SplitFinish />} />
          <Route path="/money-split/select-account/detail/:categoryId" element={<SelectAccountDetail />} />
          <Route path="/money-split/select-account/accounts/:categoryId" element={<SelectAccountAccounts />} />
          <Route path="/money-split/add-category" element={<AddCategory />} />
          <Route path="/money-split/toss/terms" element={<TossTerms />} />
          <Route path="/money-split/ai/cancel" element={<AI_Cancel />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/Second" element={<Second />} />
          <Route path="/Main/AccountSelector" element={<AccountSelector />} />
          <Route path="/Main/AccountSelector1" element={<AccountSelector1 />} />
          <Route path="/Main/pig" element={<Pig />} />
          <Route path="/Main/loading" element={<Loading />} />
          <Route path="/Main/choose" element={<Choose />} />
          <Route path="/Main/list" element={<List />} />
          <Route path="/Main/choice" element={<Choice />} />
          <Route path="/Main/rocket" element={<Rocket />} />
          <Route path="/Main/start" element={<Start />} />
          <Route path="/sign" element={<StartPage />} />
          <Route path="/sign/personal-info" element={<PersonalInfoPage />} />
          <Route path="/sign/agreement" element={<AgreementPage />} />
          <Route path="/sign/salary-info" element={<SalaryInfoPage />} />
          <Route path="/sign/interest" element={<InterestPage />} />
          <Route path="/sign/completion" element={<CompletionPage />} />
          <Route path="/sign/input-pin" element={<InputPinPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
