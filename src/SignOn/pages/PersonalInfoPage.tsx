import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import {
  setName,
  setIdFront,
  setIdBack,
  setPhone,
  setAgreements,
} from "../../redux/reducers/personalInfoSlice";
import "../../MoneySplit/splitStyle.css";
import MoveBack from "../../MoneySplit/MoveBack";

const PersonalInfoPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux 상태 가져오기
  const { name, idFront, idBack, phone, agreements } = useSelector(
    (state: RootState) => state.personalInfo
  );

  // 한글 입력 문제 해결을 위한 로컬 상태
  const [localName, setLocalName] = useState(name);
  const [isComposing, setIsComposing] = useState(false);

  useEffect(() => {
    setLocalName(name);
  }, [name]);

  // 🔹 숫자 입력 방지 + 한글 & 영문만 입력 허용
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // 입력 중일 때는 로컬 상태만 변경 (Redux 업데이트 지연)
    if (isComposing) {
      setLocalName(value);
      return;
    }

    // 한글, 영문, 공백만 허용하고 Redux에 반영
    const filteredValue = value.replace(/[^a-zA-Z가-힣\s]/g, "");
    setLocalName(filteredValue);
    dispatch(setName(filteredValue));
  };

  // 🔹 포커스 아웃 시 Redux에 최종 반영
  const handleBlur = () => {
    dispatch(setName(localName));
  };

  const handleAllAgreement = () => {
    const newValue = !agreements.all;
    dispatch(
      setAgreements({
        all: newValue,
        terms: newValue,
        privacy: newValue,
        marketing: newValue,
      })
    );
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

    dispatch(setAgreements(updatedAgreements));
  };

  const handleIdFrontChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 6);
    dispatch(setIdFront(value));
  };

  const handleIdBackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 1);
    dispatch(setIdBack(value));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 11);
    dispatch(setPhone(value));
  };

  const isFormValid =
    localName &&
    idFront.length === 6 &&
    idBack.length === 1 &&
    phone &&
    agreements.terms &&
    agreements.privacy;

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
            value={localName}
            onChange={handleNameChange}
            onBlur={handleBlur} // 포커스 아웃 시 Redux에 저장
            onCompositionStart={() => setIsComposing(true)} // 한글 조합 시작
            onCompositionEnd={() => setIsComposing(false)} // 한글 조합 종료 후 Redux 저장
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
          <input
            className="input_id_2"
            type="text"
            value={idBack}
            onChange={handleIdBackChange}
            maxLength={1}
          />
          <span>******</span>
        </div>

        <div className="info_input_name info_input_phone">
          <label>휴대폰 번호</label>
          <input
            type="text"
            placeholder="휴대폰 번호"
            value={phone}
            maxLength={11}
            onChange={handlePhoneChange}
          />
        </div>
      </div>

      <div className="center_wrap agree_down">
        <h3>이용약관 동의</h3>
        <div className="agree_container">
          <input
            type="checkbox"
            id="all"
            checked={agreements.all}
            onChange={handleAllAgreement}
          />
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