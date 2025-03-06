import React from "react";
import "./bottomStyle2.css";
import home from "./img/home_icon.png";
import goal from "./img/goal_icon.png";
import menu from "./img/menu_icon.png";

const Bottom2: React.FC = () => {
  return (
    <div className="bottom">
      <div className="bottombox">
        <img className="home" src={home} alt="home" />
        <div className="home-text">홈</div>
      </div>
      <div className="bottombox">
        <img className="goal" src={goal} alt="goal" />
        <div className="goal-text_">목표&관리</div>
      </div>
      <div className="bottombox">
        <img className="menu" src={menu} alt="menu" />
        <div className="menu-text">설정</div>
      </div>
    </div>
  );
};

export default Bottom2;
