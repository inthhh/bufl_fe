import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MoveBack from "../../MoveBack";
import "../../style/splitStyle.css";

const TossAuth: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const navigate = useNavigate();
  const clickForYes = () => {
    navigate("/money-split/input-pin");
  };
  const clickForNo = () => {
    navigate("/money-split/authentication");
  };
  const clickForTerms = () => {
    navigate("/money-split/toss/terms");
  };

  return (
    <div>
      <MoveBack pageBefore="/money-split/authentication" />
      <div style={{ marginLeft: "35px" }}>
        <h1 className="black_title">
          토스로 인증하기 위해
          <br /> 휴대폰 번호를 입력해주세요
        </h1>
      </div>

      <div className="center_wrapper">
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
        </form>
      </div>
      <div className="center_wrapper">
        <div>
          <div className="center_wrapper" style={{ marginBottom: "10px" }}>
            <button type="button" className="no_border_btn" onClick={() => clickForTerms()}>
              개인정보 수집·이용 동의 &gt;
            </button>
          </div>
          <button type="button" className="blue_big_btn" onClick={() => clickForYes()} style={{ marginBottom: "10px" }}>
            동의하고 인증하기
          </button>
          <div className="center_wrapper">
            <button type="button" className="no_border_btn" onClick={() => clickForNo()}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TossAuth;
