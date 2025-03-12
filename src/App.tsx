import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./Main/first_main/first";
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

import AccountSelector from "./Main/make_goal_pages/make_ai_goal/AccountSelector";
import AccountSelector1 from "./Main/make_goal_pages/make_self/AccountSelector1";
import AddGoal from "./Main/make_goal_pages/AddGoal";
import Pig from "./Main/make_goal_pages/make_ai_goal/ai_first";
import List from "./Main/make_goal_pages/make_ai_goal/list";
import Choose from "./Main/make_goal_pages/make_self/choose";
import Choice from "./Main/make_goal_pages/make_self/choice";
import Rocket from "./Main/make_goal_pages/rocket";
import ViewGoals from "./Main/view_goals_pages/ViewGoals";
import Goal from "./Main/view_goals_pages/goal";
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
          <Route path="/add-goal" element={<AddGoal />} />
          <Route path="/main/account-selector" element={<AccountSelector />} />
          <Route path="/main/account-selector1" element={<AccountSelector1 />} />
          <Route path="/main/pig" element={<Pig />} />
          <Route path="/main/choose" element={<Choose />} />
          <Route path="/main/list" element={<List />} />
          <Route path="/main/choice" element={<Choice />} />
          <Route path="/main/rocket" element={<Rocket />} />
          <Route path="/main/goals" element={<ViewGoals />} />
          <Route path="/main/goal" element={<Goal />} />
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
