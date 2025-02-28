import React, { useEffect, useState } from "react";
import "./splitStyle.css"; // CSS 파일 import
import { useNavigate } from "react-router-dom";
import MoveBack from "./MoveBack";

const SelectAccountDetail: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [color, setColor] = useState<string>("#d0defa");
  const navigate = useNavigate();
  const clickForYes = () => {
    navigate("/money-split/select-account");
  };
  const clickForAccount = () => {
    navigate("/money-split/select-account/accounts");
  };

  return (
    <div>
      <MoveBack pageBefore="/money-split/select-account" />
      <div className="center_wrap">
        <div>
          <div className="black_title">카테고리 명</div>
          <form className="auth-form" style={{ width: "330px" }}>
            <div>
              <label htmlFor="name">카테고리 이름</label>
              <br />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=""
                className="category_input"
              />
            </div>

            <div>
              <label htmlFor="amount">목표 금액(선택)</label>
              <br />
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder=""
                className="category_input"
              />
            </div>

            <div>
              <label>연결 계좌</label>
              <button
                type="button"
                onClick={clickForAccount}
                className="light_blue_btn"
                style={{ width: "330px", height: "50px" }}
              >
                계좌 추가하기
              </button>
            </div>

            <div>
              <button type="button">카테고리 삭제</button>
            </div>
          </form>
          <div className="center_wrap">
            <div className="center_wrap btn">
              <button className="blue_big_btn" type="button" onClick={() => clickForYes()}>
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAccountDetail;
