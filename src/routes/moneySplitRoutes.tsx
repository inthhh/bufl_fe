import { Routes, Route } from "react-router-dom";
import MoneySplitFirst from "../feature-moneySplit/pages/SplitFirst";
import AI_home from "../feature-moneySplit/pages/ai_pages/ai_home";
import AI_anaLoading from "../feature-moneySplit/pages/ai_pages/ai_anaLoading";
import AI_calLoading from "../feature-moneySplit/pages/ai_pages/ai_calLoading";
import AI_calculate from "../feature-moneySplit/pages/ai_pages/ai_calculate";
import AI_analysis from "../feature-moneySplit/pages/ai_pages/ai_analysis";
import AI_Cancel from "../feature-moneySplit/pages/ai_pages/ai_cancel";
import SelectAccount from "../feature-moneySplit/pages/control_accounts/SelectAccount";
import SelectRatio from "../feature-moneySplit/pages/control_categorys/SelectRatio";
import Authentication from "../feature-moneySplit/pages/final_process/Authentication";
import TossAuth from "../feature-moneySplit/pages/final_process/TossAuth";
import InputPin from "../feature-moneySplit/pages/final_process/InputPin";
import SplitLoading from "../feature-moneySplit/pages/final_process/SplitLoading";
import SplitFinish from "../feature-moneySplit/pages/final_process/SplitFinish";
import SelectAccountDetail from "../feature-moneySplit/pages/control_accounts/SelectAccountDetail";
import SelectAccountAccounts from "../feature-moneySplit/pages/control_accounts/SelectAccountAccounts";
import AddCategory from "../feature-moneySplit/pages/control_categorys/AddCategory";
import TossTerms from "../feature-moneySplit/pages/final_process/TossTerms";

const MoneySplitRoutes = () => {
  return (
    <Routes>
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
    </Routes>
  );
};

export default MoneySplitRoutes;
