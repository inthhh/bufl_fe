import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/style.css";
import AgreeImg from "../images/agree.png";
import "../../feature-moneySplit/style/splitStyle.css";
import MoveBack from "../../shared/MoveBack";
import Fade from "../../shared/Fade";

function AgreementPage() {
  const navigate = useNavigate();
  const [isAgreementOpen, setIsAgreementOpen] = useState(false); // 약관 창 열림 여부
  const [isAgreed, setIsAgreed] = useState(false); // 동의 여부 상태

  return (
    <Fade>
      <div>
        <MoveBack pageBefore="/sign/input-pin" />
        {!isAgreementOpen ? (
          <div className="center_wrap">
            {/* 동의 안내 화면 */}
            <img src={AgreeImg} width={220} alt="agree" className="agree_img" />
            <h3 className="agree_text1">
              자산 연결을 위해
              <br />
              마이데이터 동의가 필요해요.
            </h3>
            <p className="agree_text2">
              마이데이터 서비스는 신뢰할 수 있는 보안 기술을 적용하고 있어요.
              <br />
              필요하지 않은 정보 제공은 언제든지 거부할 수 있습니다.
              <br />
              등록된 자산 정보는 금융포털에서 직접 관리할 수 있어요.
            </p>
            <span
              className="agree_text3"
              onClick={() => setIsAgreementOpen(true)}
            >
              [필수] 마이데이터 서비스 이용약관
            </span>
            <br />
            <br />
            {/* 동의 후 다음 단계로 이동 */}
            <button
              onClick={() => navigate("/sign/salary-info")}
              disabled={!isAgreed}
              className={`btn_start ${isAgreed ? "" : "disabled"}`}
            >
              동의하고 다음
            </button>
          </div>
        ) : (
          <div className="center_wrap">
            {/* 이용약관 내용 */}
            <div className="agree_box">
              <p className="agree_text4">
                <span className="agree_text5">마이데이터 기본약관</span>
                <br />
              <br />
              제1조 (목적) <br />
              이 약관은 “OOOO주식회사”(이하 “회사”라 한다)가 제공하는 마이데이터 서비스 (이하 “서비스”라 한다)의 이용과
              관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
              <br />
              <br />
              제2조 (용어의 정의) <br />
              (1) 본 약관에서 사용하는 용어의 뜻은 다음과 같으며, 본 약관에서 정하지 않은 용어는 「신용정보의 이용 및
              보호에 관한 법률」(이하 “신정법”) 및 「전자금융거래법」 등 관련법령이 정하는 바에 따릅니다.
              <br />
              <br />
              1. “마이데이터”란 회사가 정보주체로서 이용자의 개인정보를 전송요구에 의해 수집한 이용자의 개인신용정보를
              말합니다.
              <br />
              <br />
              2. “개인신용정보”란 금융거래 등에 의해 개인의 신용정보로서의 신용, 거래내역, 특성 등을 분석할 수 있는
              정보를 말합니다.
              <br />
              <br />
              3. “마이데이터 사업자”란 본인의신용정보관리업에 대하여 금융위원회로부터 허가를 받은 자로서 서비스를
              제공하는 회사를 의미합니다.
              <br />
              <br />
              4.“정보제공자”란 이용자의 전송요구에 따라 이용자의 신용정보를 마이데이터 사업자에게 전송하는 자를
              말합니다.
              <br />
              <br />
              5.“전송요구”란 「신용정보법」제33조의2등에 의거하여 이용자가 정보 제공자를 상대로 그가 보유하고 있는
              이용자의 개인신용정보를 마이데이 터 사업자인 회사에 전송해 줄 것을 요구하는 행위를 말합니다.
              <br />
              <br />
              6.“마이데이터 서비스”라 함은 이용자의 전송요구에 따라 회사가 정보제공 자로부터 전송받은 이용자의
              신용정보를 수집하여 이용자에게 제공하는 개인 신용정보 통합 조회 관리서비스 등 제3조의 서비스를 말합니다.
              6“이용자”란 이 약관에 동의하고 회사가 제공하는 마이데이터 서비스를 이 용하는 자를 의미합니다.
              <br />
              <br />
              7.“본인인증”이란 이용자가 정보제공자에게 정보의 전송을 요구할 때,이 용자가 해당 정보의 전송을 요구한
              정보주체인지를 정보제공자가 확인하는 방법을 말합니다.이용자가 직접 개별인증 혹은 통합인증의 방식을 선택할
              수 있습니다.각 기관별로 요구되는 본인인증 정보는 해당 기관의 정책에 따라 상이할 수 있습니다.
              <br />
              <br />
              8.“개별인증”이란 정보제공자가 자율적으로 제공하는 인증수단을 이용한 본인인증방법으로 고객이 개인신용정보
              전송을 요구하는 정보제공자의 수만큼 인증이 이루어지는 방식을 말합니다.
              <br />
              <br />
              9.“통합인증”이란 고객이 공용의 인증수단을 이용하여 인증행위를 1회 수 행함으로서 다수의 정보제공자에 인증이
              가능한 방식을 말합니다.
              <br />
              <br />
              10.“중계기관”이란 종합신용정보기관,금융결제원 및 상호저축은행중앙회 등
              <br />
              <br />
              11.“접근매체”란 마이데이터서비스와 관련하여 거래지시를 하거나 이용자 및 거래내용의 진실성과 정확성을
              확보하기 위해 사용되는 다음 각 목의 어 느 하나에 해당하는 수단 또는 정보를 말합니다. 가.전자식 카드 및
              이에 준하는 전자적 정보 나.「전자서명법」제2조 제3호에 따른 전자서명생성정보 및 같은 조 제6호에 따른
              인증서 다.등록된 이용자번호 라.이용자의 생체정보 마.가목 또는 나목의 수단이나 정보를 사용하는데 필요한
              비밀번호
              <br />
              <br />
              제1조(시행일)이 약관은 2022년 월 일부터 시행합니다.
            </p>
            </div>
            {/* 동의 버튼 */}
            <button
              className="btn_start"
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
    </Fade>
  );
}

export default AgreementPage;
