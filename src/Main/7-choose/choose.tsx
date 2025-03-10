import React, { useState } from "react";
import "./chooseStyle.css";
import pigmoney from "./img/piggy.png";
import { useNavigate } from "react-router-dom";
import MoveBack from "../../MoneySplit/MoveBack";

const Choose: React.FC = () => {
  const navigate = useNavigate();

  // ✅ 상태 추가 (저축 금액과 기간)
  const [amount, setAmount] = useState(10); // 기본값 10만원
  const [duration, setDuration] = useState(12); // 기본값 12개월

  const selfhandle = () => {
    navigate("/Main/choice");
  };
  const nexthandle = () => {
    navigate("/Main/rocket");
  };
  return (
    <div>
      <MoveBack pageBefore="/Main/AccountSelector1" />
      <div>
        <img className="pigmoney" src={pigmoney} alt="pigmoney" />
      </div>
      <div className="winnermoney1">매달 {amount}만원씩<br />저축에 성공하면</div>
      <div className="winnermoney2">{duration}개월 만기했을 때 (원금+이자)</div>                                             {/* 천 단위 쉼표 추가 */}
      <div className="winnermoney3"><span style={{ color: "#3182F6", fontWeight: "bold" }}>{(amount * 10000 * duration).toLocaleString()}원</span> + a 받아요</div>
      <div>
        {/* 저축 금액 조절 슬라이더 */}
        <div className="mybox-container">
          <div className="slider-container">
            <span className="min-value1">5만원</span>
            <label className="month10">한 달에 {amount}만원</label>
            <span className="max-value2">300만원</span>
            <input
              className="slider3"
              type="range"
              min="5"
              max="300"
              step="5"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          {/* 저축 기간 조절 슬라이더 */}
          <div className="slider-container1">
            <span className="min-month1">3개월</span>
            <label className="month-money1">{duration}개월 모으기</label>
            <span className="max-month2">36개월</span>
            <input
              className="slider3"
              type="range"
              min="3"
              max="36"
              step="1"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
            />
          </div>
          <button className="winner-money4" onClick={selfhandle}>직접 입력</button>
          <button className="next-btn" onClick={nexthandle}>다음</button>
        </div>
      </div>
    </div>
  );
};

export default Choose;
