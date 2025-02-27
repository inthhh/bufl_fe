import React from "react";
import "./splitStyle.css";
import { useNavigate } from "react-router-dom";
import RobotImg from "./robot.png";

const SelectRatio: React.FC = () => {
  const navigate = useNavigate();
  const clickForYes = () => {
    navigate("/MoneySplit/AI/SelectAccount");
  };
  const clickForNo = () => {
    navigate("/MoneySplit/AddCategory");
  };
  return (
    <div className="center_wrap">
      <div>
        <div>월급 쪼개기 비율을 설정해주세요.</div>
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
  );
};

export default SelectRatio;
