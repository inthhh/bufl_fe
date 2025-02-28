import React, { useState } from "react";
import "../splitStyle.css";
import { useNavigate } from "react-router-dom";
import MoveBack from "../MoveBack";

interface CategoryProps {
  category: string;
  ratio: number;
  amount: number;
}

const Category: React.FC<CategoryProps> = (props) => {
  const [value, setValue] = useState<number>(50);
  return (
    <div className="account_list">
      <div>{props.category}</div>
      <div>{props.amount}원</div>
      <input
        type="range"
        id="ratio"
        name="ratio"
        min="0"
        max="100"
        step="1"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      ></input>
      <div>{value}%</div>
    </div>
  );
};

const SelectRatio: React.FC = () => {
  const navigate = useNavigate();
  const clickForYes = () => {
    navigate("/money-split/select-account");
  };
  const clickForNo = () => {
    navigate("/money-split/add-category");
  };
  return (
    <div>
      <MoveBack pageBefore="/money-split" now="ratio" />
      <div className="center_wrap">
        <div>
          <div>
            <div>월급 쪼개기 비율을 설정해주세요.</div>
            <div>월 소득</div>
            <div>3,000,000원 중,</div>
          </div>
          <div>
            <Category category="💰 월급 통장" ratio={20} amount={600000} />
            <Category category="💰 월급 통장" ratio={20} amount={600000} />
          </div>
          <div className="center_wrap">
            <div className="center_wrap btn">
              <button className="gray_small_btn" type="button" onClick={() => clickForNo()}>
                카테고리 추가
              </button>
              <button className="blue_small_btn" type="button" onClick={() => clickForYes()}>
                완료했어요
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectRatio;
