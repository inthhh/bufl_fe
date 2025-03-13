import { Routes, Route } from "react-router-dom";
import StartPage from "../feature-signOn/pages/StartPage";
import PersonalInfoPage from "../feature-signOn/pages/PersonalInfoPage";
import AgreementPage from "../feature-signOn/pages/AgreementPage";
import SalaryInfoPage from "../feature-signOn/pages/SalaryInfoPage";
import InterestPage from "../feature-signOn/pages/InterestPage";
import CompletionPage from "../feature-signOn/pages/CompletionPage";
import InputPinPage from "../feature-signOn/pages/InputPinPage";

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
