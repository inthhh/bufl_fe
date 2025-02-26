import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TossAuth: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const navigate = useNavigate();
  const clickForYes = () => {
    navigate("/MoneySplit/InputPin");
  };

  return (
    <div>
      <h1 className="black_title">
        토스로 인증하기 위해
        <br /> 휴대폰 번호를 입력해주세요
      </h1>

      <form className="auth-form">
        <div className="form-group">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=""
            className="input-field"
          />
          <label htmlFor="name" className="input-label">
            이름
          </label>
        </div>

        <div className="form-group">
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder=""
            className="input-field"
          />
          <label htmlFor="phone" className="input-label">
            휴대폰번호
          </label>
        </div>

        <div className="form-group">
          <input
            type="number"
            id="birth"
            value={birth}
            onChange={(e) => setBirth(e.target.value)}
            placeholder=""
            className="input-field"
          />
          <label htmlFor="birth" className="input-label">
            생년월일 6자리
          </label>
        </div>
        <button type="button" className="blue_big_btn" onClick={() => clickForYes()}>
          동의하고 인증하기
        </button>
      </form>
    </div>
  );
};

export default TossAuth;
