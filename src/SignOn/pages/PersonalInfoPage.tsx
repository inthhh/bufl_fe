import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../MoneySplit/splitStyle.css";
import MoveBack from "../../MoneySplit/MoveBack";

const PersonalInfoPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [idFront, setIdFront] = useState<string>("");
  const [idBack, setIdBack] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [agreements, setAgreements] = useState<{
    all: boolean;
    terms: boolean;
    privacy: boolean;
    marketing: boolean;
  }>({
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

    updatedAgreements.all =
      updatedAgreements.terms &&
      updatedAgreements.privacy &&
      updatedAgreements.marketing;

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

  const isFormValid =
    name &&
    idFront.length === 6 &&
    idBack.length === 1 &&
    phone &&
    agreements.terms &&
    agreements.privacy;

  return (
    <div>
      <MoveBack pageBefore="/sign" />
      <h2>개인정보 설정</h2>
      <p>
        안전한 저축 시작과 AI추천을 위하여, <br />
        개인정보를 입력해주세요.
      </p>

      <div>
        <div>
          <label>
            이름
            <input
              type="text"
              placeholder="성명"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            주민등록번호
            <input
              type="text"
              placeholder="앞 7자리"
              value={idFront}
              onChange={handleIdFrontChange}
              maxLength={6}
            />
            <span>-</span>
            <input
              type="text"
              placeholder="첫 숫자"
              value={idBack}
              onChange={handleIdBackChange}
              maxLength={1}
            />
            <span>******</span>
          </label>
        </div>

        <div>
          <label>
            휴대폰 번호
            <input
              type="text"
              placeholder="휴대폰 번호"
              value={phone}
              maxLength={11}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
        </div>
      </div>

      <h3>이용약관 동의</h3>
      <div>
        <label>
          <input
            type="checkbox"
            checked={agreements.all}
            onChange={handleAllAgreement}
          />
          모두 동의합니다.
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={agreements.terms}
            onChange={() => handleAgreementChange("terms")}
          />
          이용약관 (필수)
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={agreements.privacy}
            onChange={() => handleAgreementChange("privacy")}
          />
          개인정보 수집 및 이용 동의 (필수)
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={agreements.marketing}
            onChange={() => handleAgreementChange("marketing")}
          />
          마케팅 정보 수신 동의 (선택)
        </label>
      </div>
      <div>
        <button
          disabled={!isFormValid}
          onClick={() => navigate("/sign/agreement")}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoPage;
