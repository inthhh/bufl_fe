import { Routes, Route } from "react-router-dom";
import StartPage from "../SignOn/pages/StartPage";
import PersonalInfoPage from "../SignOn/pages/PersonalInfoPage";
import AgreementPage from "../SignOn/pages/AgreementPage";
import SalaryInfoPage from "../SignOn/pages/SalaryInfoPage";
import InterestPage from "../SignOn/pages/InterestPage";
import CompletionPage from "../SignOn/pages/CompletionPage";
import InputPinPage from "../SignOn/pages/InputPinPage";

const SignRoutes = () => {
  return (
    <Routes>
      <Route path="/sign" element={<StartPage />} />
      <Route path="/sign/personal-info" element={<PersonalInfoPage />} />
      <Route path="/sign/agreement" element={<AgreementPage />} />
      <Route path="/sign/salary-info" element={<SalaryInfoPage />} />
      <Route path="/sign/interest" element={<InterestPage />} />
      <Route path="/sign/completion" element={<CompletionPage />} />
      <Route path="/sign/input-pin" element={<InputPinPage />} />
    </Routes>
  );
};

export default SignRoutes;
