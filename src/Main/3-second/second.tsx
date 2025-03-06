import React from "react";
import "./secondStyle.css";
import pay from "./img/pay.png";
import home from "./img/home_icon.png";
import goal from "./img/goal_icon.png";
import menu from "./img/menu_icon.png";
import { useNavigate } from "react-router-dom";

const Second: React.FC = () => {
  const navigate = useNavigate();
  const handlebox1 = () => {
    navigate("/Main/pig");
  };
  const handlebox2 = () => {
    navigate("/Main/box2");
  };
  return (
    <div>
      <img className="pay" src={pay} alt="pay" />
      <div className="pay1">저축 목표 세우기</div>
      <div className="pay2">
        마음껏 만들고,
        <br />
        부담없이 설정하세요
      </div>
      <div className="pay3">
        저축 목표를 직접 설정하거나,
        <br />
        AI를 통해 최적의 목표를 추천받으세요!
      </div>
      <button className="box1-btn" onClick={handlebox1}>
        AI 추천 받기
      </button>
      <button className="box2-btn" onClick={handlebox2}>
        목표 설정하기
      </button>
      <div className="bottom">
        <img className="home" src={home} alt="home" />
        <div className="home-text">홈</div>
        <img className="goal" src={goal} alt="goal" />
        <div className="goal-text">목표&관리</div>
        <img className="menu" src={menu} alt="menu" />
        <div className="menu-text">설정</div>
      </div>
    </div>
  );
};

export default Second;
