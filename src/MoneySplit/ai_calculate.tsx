import React from "react";
import "./splitStyle.css";
import { useNavigate } from "react-router-dom";

function AI_calculate() {
  const navigate = useNavigate();
  const clickForYes = () => {
    navigate("/MoneySplit/SelectAccount");
  };
  const clickForNo = () => {
    navigate("/MoneySplit/SelectRatio");
  };
  return (
    <div className="center_wrap">
      <div>
        <div>AI가 추천하는 월급 분배 비율이에요!</div>
        <div>
          <div>월급 2,000,000원에서</div>
          <div>
            <ul>
              <li>
                생활비 40% <span>(약 800,000원)</span>
              </li>
              <li>
                적금 30%<span>(약 600,000원)</span>
              </li>
              <li>
                비상금, 예비비 10%<span>(약 200,000원)</span>
              </li>
              <li>
                재테크 20%<span>(약 400,000원)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="center_wrap">
          <div className="center_wrap btn">
            <button className="gray_small_btn" type="button" onClick={() => clickForNo()}>
              수정할래요
            </button>
            <button className="blue_small_btn" type="button" onClick={() => clickForYes()}>
              좋아요!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AI_calculate;
