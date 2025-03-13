import React, { useEffect, useState } from "react";
import "./bottomStyle.css";
import home from "./img/home_icon.png";
import goal from "./img/goal_icon.png";
import menu from "./img/menu_icon.png";
import { useNavigate } from "react-router-dom";

interface BottomProps {
  page: string;
  isFirstTime?: boolean;
}

const Bottom: React.FC<BottomProps> = ({ page, isFirstTime }) => {
  const [isHome, setIsHome] = useState<boolean>(false);
  const [isGoal, setIsGoal] = useState<boolean>(false);
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [goalLen, setGoalLen] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (page === "home") {
      setIsHome(true);
    }
    if (page === "goal") {
      setIsGoal(true);
    }
    if (page === "menu") {
      setIsMenu(true);
    }
  }, []);

  const moveTo = (where: string) => {
    if (where === "home") navigate("/");
    if (where === "goal" && !isFirstTime) {
      if (goalLen > 0) navigate("/main/goals");
      else navigate("/add-goal");
    } // 현재 목표가 없을때, 있을 때 목표페이지 경로 수정 필요
    if (where === "menu" && !isFirstTime) navigate("/setting");
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/goals", {
      method: "GET", // 기본값이지만 명시적으로 써도 됨
      credentials: "include", // 쿠키 및 인증 정보 포함
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.goals) setGoalLen(data.goals.length);
      });
  }, []);

  return (
    <div className="bottom">
      <div className="bottombox" onClick={() => moveTo("home")}>
        <img
          className="home"
          src={home}
          alt="home"
          style={isHome ? { opacity: "1" } : undefined}
        />
        <div
          className="home-text"
          style={isHome ? { color: "black" } : undefined}
        >
          홈
        </div>
      </div>
      <div className="bottombox" onClick={() => moveTo("goal")}>
        <img
          className="goal"
          src={goal}
          alt="goal"
          style={isGoal ? { opacity: "1" } : undefined}
        />
        <div
          className="goal-text_"
          style={isGoal ? { color: "black" } : undefined}
        >
          목표&관리
        </div>
      </div>
      <div className="bottombox" onClick={() => moveTo("menu")}>
        <img
          className="menu"
          src={menu}
          alt="menu"
          style={isMenu ? { opacity: "1" } : undefined}
        />
        <div
          className="menu-text"
          style={isMenu ? { color: "black" } : undefined}
        >
          설정
        </div>
      </div>
    </div>
  );
};

export default Bottom;
