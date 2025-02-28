import { useNavigate } from "react-router-dom";
import "../style/style.css";
import SuccessImg from "../images/success.png";

function CompletionPage() {
  const navigate = useNavigate();

  return (
    <div className="center">
      <img src={SuccessImg} alt="success" width="140px" />
      <h2>가입 완료!</h2>
      <button onClick={() => navigate("/")}>메인 화면으로</button>
    </div>
  );
}

export default CompletionPage;
