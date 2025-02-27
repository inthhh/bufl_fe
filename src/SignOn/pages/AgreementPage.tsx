import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/style.css";
import AgreeImg from "../images/agree.png";

function AgreementPage() {
  const navigate = useNavigate();
  const [isAgreementOpen, setIsAgreementOpen] = useState(false); 
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <div>
      {!isAgreementOpen ? (
        <div className="center">
          <img src={AgreeImg} width="255px" alt="agree" />
          <h3>
            자산 연결을 위해
            <br />
            마이데이터 동의가 필요해요.
          </h3>
          <p>
            마이데이터 서비스는 신뢰할 수 있는 보안 기술을 적용하고 있어요.
            <br />
            필요하지 않은 정보 제공은 언제든지 거부할 수 있습니다.
            <br />
            등록된 자산 정보는 금융포털에서 직접 관리할 수 있어요.
          </p>
          <span onClick={() => setIsAgreementOpen(true)}>
            [필수]마이데이터 서비스 이용약관
          </span>
          <button
            onClick={() => navigate("/sign/salary-info")}
            disabled={!isAgreed}
          >
            동의하고 다음
          </button>
        </div>
      ) : (
        <div>
          <h2>마이데이터 기본약관</h2>
          <p>
            제1조 (목적) <br />
            이 약관은 “OOOO주식회사”(이하 “회사”라 한다)가 제공하는 마이데이터
            서비스 (이하 “서비스”라 한다)의 이용과 관련하여 회사와 이용자 간의
            권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
            <br />
            <br />
            제2조 (용어의 정의) <br />
            (1) 본 약관에서 사용하는 용어의 뜻은 다음과 같으며, 본 약관에서
            정하지 않은 용어는 「신용정보의 이용 및 보호에 관한 법률」(이하
            “신정법”) 및 「전자금융거래법」 등 관련법령이 정하는 바에 따릅니다.
            <br />
            <br />
            1. “마이데이터”란 회사가 정보주체로서 이용자의 개인정보를 전송요구에
            의해 수집한 이용자의 개인신용정보를 말합니다.
            <br />
            <br />
            2. “개인신용정보”란 금융거래 등에 의해 개인의 신용정보로서의 신용,
            거래내역, 특성 등을 분석할 수 있는 정보를 말합니다.
            <br />
            <br />
            3. “마이데이터 사업자”란 본인의신용정보관리업에 대하여
            금융위원회로부터 허가를 받은 자로서 서비스를 제공하는 회사를
            의미합니다.
            <br />
            <br />※ 이하 약관 내용 추가 가능
          </p>
          <button
            onClick={() => {
              setIsAgreed(true);
              setIsAgreementOpen(false);
            }}
          >
            동의하기
          </button>
        </div>
      )}
    </div>
  );
}

export default AgreementPage;
