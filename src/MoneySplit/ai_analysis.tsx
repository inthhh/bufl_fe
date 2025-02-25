import React from "react";
import "./splitStyle.css";
import { useNavigate } from "react-router-dom";
import RobotImg from "./robot.png";

function AI_analysis() {
  const navigate = useNavigate();
  const clickToNext = () => {
    // navigate("/MoneySplit/AI/Loading");
  };
  return (
    <div className="center_wrap">
      <div>
        <div>AI가 추천해주는 월급 쪼개기</div>
        <div>
          <img src={RobotImg} alt="" width={"150px"} />
        </div>

        <button className="blue_btn" type="button" onClick={() => clickToNext()}>
          시작하기
        </button>
      </div>
    </div>
  );
}

export default AI_analysis;
