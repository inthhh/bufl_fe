import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../MoneySplit/style/splitStyle.css";
import MoveBack from "../../MoneySplit/MoveBack";

const PersonalInfoPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [idFront, setIdFront] = useState<string>("");
  const [idBack, setIdBack] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isComposing, setIsComposing] = useState(false);
  const [agreements, setAgreements] = useState({
    all: false,
    terms: false,
    privacy: false,
    marketing: false,
  });

  const handleAllAgreement = () => {
    const newValue = !agreements.all;
    setAgreements({
      all: newValue,
      terms: newValue,
      privacy: newValue,
      marketing: newValue,
    });
  };

  const handleAgreementChange = (key: keyof typeof agreements) => {
    const updatedAgreements = {
      ...agreements,
      [key]: !agreements[key],
    };

    updatedAgreements.all = updatedAgreements.terms && updatedAgreements.privacy && updatedAgreements.marketing;

    setAgreements(updatedAgreements);
  };

  const handleIdFrontChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    setIdFront(value);
  };

  const handleIdBackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 1);
    setIdBack(value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 11);
    setPhone(value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isComposing) {
      const value = e.target.value.replace(/[^a-zA-Z가-힣]/g, "");
      setName(value);
    } else {
      setName(e.target.value);
    }
  };

  const isFormValid =
    name && idFront.length === 6 && idBack.length === 1 && phone && agreements.terms && agreements.privacy;

  return (
    <div>
      <div className="underline">
        <MoveBack pageBefore="/sign" />
        <div className="center_wrap">
          <h2 className="text_info">개인정보 설정</h2>
        </div>
      </div>
      <p className="info_text2 center_wrap">
        안전한 저축 시작과 AI추천을 위하여, <br />
        개인정보를 입력해주세요.
      </p>

      <div>
        <div className="info_input_name">
          <label>이름</label>
          <input
            type="text"
            placeholder="성명"
            value={name}
            onChange={handleNameChange}
            onCompositionStart={() => setIsComposing(true)}
            onCompositionEnd={() => setIsComposing(false)}
          />
        </div>

        <div className="info_input_name info_input_id">
          <label>주민등록번호</label>
          <input
            className="input_id_1"
            type="text"
            placeholder="앞 6자리"
            value={idFront}
            onChange={handleIdFrontChange}
            maxLength={6}
          />
          <span>-</span>
          <input className="input_id_2" type="text" value={idBack} onChange={handleIdBackChange} maxLength={1} />
          <span>******</span>
        </div>

        <div className="info_input_name info_input_phone">
          <label>휴대폰 번호</label>
          <input type="text" placeholder="휴대폰 번호" value={phone} maxLength={11} onChange={handlePhoneChange} />
        </div>
      </div>

      <div className="center_wrap agree_down">
        <h3>이용약관 동의</h3>
        <div className="agree_container">
          <input type="checkbox" id="all" checked={agreements.all} onChange={handleAllAgreement} />
          <label htmlFor="all" className="all_agree_label">
            모두 동의합니다.
          </label>

          <input
            type="checkbox"
            id="terms"
            checked={agreements.terms}
            onChange={() => handleAgreementChange("terms")}
          />
          <label htmlFor="terms">
            이용약관 <span className="required">(필수)</span>
          </label>

          <input
            type="checkbox"
            id="privacy"
            checked={agreements.privacy}
            onChange={() => handleAgreementChange("privacy")}
          />
          <label htmlFor="privacy">
            개인정보 수집 및 이용 동의 <span className="required">(필수)</span>
          </label>

          <input
            type="checkbox"
            id="marketing"
            checked={agreements.marketing}
            onChange={() => handleAgreementChange("marketing")}
          />
          <label htmlFor="marketing">
            마케팅 정보 수신 동의 <span className="optional">(선택)</span>
          </label>
        </div>
      </div>

      <div className="center_wrap">
        <button
          disabled={!isFormValid}
          onClick={() => navigate("/sign/agreement")}
          className={`btn_start ${isFormValid ? "" : "disabled"}`}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoPage;
