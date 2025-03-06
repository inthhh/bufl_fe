import React, { useState } from "react";
import "./startStyle.css";
import payment from "./img/pay.png";
import present from "./img/piggy.png";
import ninja from "./img/start.png";
import Bottom1 from "../bottom1/bottom1";
// import DoughnutChartWithGoal from "../DoughnutChartWithGoal"; // 도넛 차트 컴포넌트 임포트

const Start: React.FC = () => {
  // const [goal, setGoal] = useState(100); // 목표 설정
  // const [currentProgress, setCurrentProgress] = useState(50); // 현재 진행 상황 설정

  return (
    <div>
      <div>
        <div className="startlist">목표 목록</div>
      </div>
      <button className="plus-btn">+</button>
      <div className="plus-list">추가 목표</div>
      <div>
        <img className="payment" src={payment} alt="payment" />
        <div className="nowgoal">목표</div>
      </div>
      <div>
        <img className="present" src={present} alt="present" />
        <div className="nowmoney">현재 저축액</div>
      </div>
      <div className="goal-list">목표 달성 현황</div>
      {/* <DoughnutChartWithGoal
        goal={goal}
        currentProgress={currentProgress}
      />{" "}
      도넛 차트 추가 
      <input
        type="range"
        min="0"
        max={goal}
        value={currentProgress}
        onChange={(e) => setCurrentProgress(Number(e.target.value))} */}
      <div>
        <img className="ninja" src={ninja} alt="ninja" />
      </div>
      <div className="message">
        오늘도 목표를 향해 달려가는 "뱅크닌자"님 응원합니다!
      </div>
      <Bottom1 />
    </div>
  );
};

export default Start;
