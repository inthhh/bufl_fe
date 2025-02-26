import React from "react";
import "./splitStyle.css";
import { useNavigate } from "react-router-dom";
import RobotImg from "./robot.png";

function SelectRatio() {
  const navigate = useNavigate();
  const clickForYes = () => {
    navigate("/MoneySplit/AI/SelectAccount");
  };
  return (
    <div className="center_wrap">
      <div>
        <div>월급 쪼개기 비율을 설정해주세요.</div>
      </div>
    </div>
  );
}

export default SelectRatio;
