import React, { useState } from "react";
import "./startStyle.css";
import payment from "./img/pay.png";
import present from "./img/piggy.png";
import ninja from "./img/start.png";
import Bottom from "../bottom/bottom";
import { useNavigate } from "react-router-dom";
import DonutChart from "./Doughnut1"; // 도넛 차트 컴포넌트 임포트

const Start: React.FC = () => {
  const navigate = useNavigate();
  const handleplusgoal = () => {
    navigate("/second");
  };

  const [goal, setGoal] = useState(100); // 목표 설정
  const [currentProgress, setCurrentProgress] = useState(50); // 현재 진행 상황 설정

  return (
    <div>
      <div>
        <div className="startlist">목표 목록</div>
      </div>
      <div className="plus-parents">
        <button className="plus-btn" onClick={handleplusgoal}>
          +
        </button>
        <div className="plus-list">추가 목표</div>
      </div>
      <div className="parentsbox">
        <div>
          <img className="payment" src={payment} alt="payment" />
          <div className="nowgoal">목표</div>
          <div className="goaltext">1년 안에 10,000,000원 모으기</div>
        </div>
        <div>
          <img className="present" src={present} alt="present" />
          <div className="nowmoney">현재 저축액</div>
          <div className="money4">3,200,000원</div>
        </div>
        <div className="goal-list">목표 달성 현황</div>
        {/* 도넛 차트 추가 */}
        <DonutChart goal={goal} currentProgress={currentProgress} />
        <input
          type="range"
          min="0"
          max={goal}
          value={currentProgress}
          onChange={(e) => setCurrentProgress(Number(e.target.value))}
        />
      </div>
      <div>
        <img className="ninja" src={ninja} alt="ninja" />
      </div>
      <div className="message">오늘도 목표를 향해 달려가는 "뱅크닌자"님 응원합니다!</div>
      <Bottom page="goal" />
    </div>
  );
};

export default Start;
