import React from "react";
import "./splitStyle.css";
import { useNavigate } from "react-router-dom";
import RobotImg from "./img/robot.png";

function AI_home() {
  const navigate = useNavigate();
  const clickToNext = () => {
    navigate("/MoneySplit/AI/AnalysisLoading");
  };
  return (
    <div className="center_wrap">
      <div>
        <div>AI가 추천해주는 월급 쪼개기</div>
        <div>
          <img src={RobotImg} alt="" width={"150px"} />
        </div>
        <div>
          <p>
            지난 소비 습관을 분석하고,
            <br />
            적절한 월급 쪼개기 비율을 자동으로 추천해 드릴게요.
            <br />
            나중에 비율을 수정할 수 있어요.
          </p>
        </div>
        <button className="blue_btn" type="button" onClick={() => clickToNext()}>
          시작하기
        </button>
      </div>
    </div>
  );
}

export default AI_home;
