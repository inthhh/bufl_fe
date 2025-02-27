import React, { useEffect, useState } from "react";
import "./splitStyle.css"; // CSS 파일 import
import { useNavigate } from "react-router-dom";
import MoveBack from "./MoveBack";

const AddCategory: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [color, setColor] = useState<string>("#d0defa");
  const navigate = useNavigate();
  const clickForYes = () => {
    navigate("/MoneySplit/SelectRatio");
  };

  return (
    <div>
      <MoveBack pageBefore="/MoneySplit/SelectRatio" />
      <div className="center_wrap">
        <div>
          <div className="black_title">카테고리 추가</div>
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

            <div className="space_between">
              <label htmlFor="birth">저축 시작일</label>
              <input
                type="date"
                id="birth"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="space_between">
              <p className="">배경색</p>
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="" />
            </div>
          </form>
          <div className="center_wrap">
            <button className="blue_big_btn" type="button" onClick={() => clickForYes()}>
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
