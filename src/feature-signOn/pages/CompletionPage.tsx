import { useNavigate } from "react-router-dom";
import "../style/style.css";
import SuccessImg from "../images/success.png";

function CompletionPage() {
  const navigate = useNavigate();

  return (
    <div className="center_wrap">
      <img className="content_start" src={SuccessImg} alt="success" width="140px" />
      <h2 className="start_text">가입 완료!</h2>
      <div className="center_wrap">
        <button className="btn_start" onClick={() => navigate("/", { state: { from: "first-time" } })}>
          메인 화면으로
        </button>
      </div>
    </div>
  );
}

export default CompletionPage;
