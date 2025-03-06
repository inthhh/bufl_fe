import React from "react";
import "./pigStyle.css";
import pig from "./img/piggy.png";
import { useNavigate } from "react-router-dom";
import MoveBack from "../../MoneySplit/MoveBack";

const Pig: React.FC = () => {
  const navigate = useNavigate();
  const handlestart = () => {
    navigate("/Main/box1");
  };
  return (
    <div>
      <MoveBack pageBefore="/second" />
      <div className="start">
        AI가 추천해주는
        <br />
        저축 목표 세우기
      </div>
      <div className="pig">
        <img className="pig" src={pig} alt="pig" />
      </div>
      <button className="start-btn" onClick={handlestart}>
        시작하기
      </button>
    </div>
  );
};

export default Pig;
