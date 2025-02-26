import { useNavigate } from "react-router-dom";
import "../style/style.css";
import AgreeImg from "../images/agree.png";
function AgreementPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="center">
        <img src={AgreeImg} width="255px" alt="agree" />
        <h3 onClick={() => console.log("g")}>
          자산 연결을 위해
          <br />
          마이데이터 동의가 필요해요.
        </h3>
        <p>
          마이데이터 서비스는 신뢰할 수 있는 보안 기술을 적용하고 있어요
          <br />
          필요하지 않은 정보 제공은 언제든지 거부할 수 있습니다. <br />
          등록된 자산 정보는 금융포털에서 직접 관리할 수 있어요.
        </p>
        <a href="#">[필수]마이데이터 서비스 이용약관</a>
        <button onClick={() => navigate("/sign/salary-info")}>
          동의하고 다음
        </button>
      </div>
    </div>
  );
}

export default AgreementPage;
