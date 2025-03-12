import React from "react";
import "./ai_first.css";
import pig from "../img/piggy.png";
import { useNavigate } from "react-router-dom";
import MoveBack from "../../../MoneySplit/MoveBack";
import RobotImg from "../img/robot.png";

const Pig: React.FC = () => {
  const navigate = useNavigate();
  const handlestart = () => {
    navigate("/main/account-selector");
  };
  return (
    <div>
      <MoveBack pageBefore="/add-goal" />
      <div className="start">
        AI가 추천해주는
        <br />
        저축 목표 세우기
      </div>
      <div className="pig">
        <img src={RobotImg} alt="robot" width={280} />
      </div>
      <button
        className="start-btn"
        onClick={handlestart}
        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src={pig} alt="" width={40} />
        <div> 시작하기</div>
      </button>
    </div>
  );
};

export default Pig;
