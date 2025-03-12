import React, { useState, useEffect, useRef } from "react";
import "./ViewGoals.css";
import payment from "./img/pay.png";
import present from "./img/piggy.png";
import profile from "./img/profile.jpeg";
import Bottom from "../bottom_nav/bottom";
import { useNavigate } from "react-router-dom";
import DonutChart from "./Doughnut1";

const Start: React.FC = () => {
  const navigate = useNavigate();
  const parentsboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parentsbox = parentsboxRef.current;
    if (!parentsbox) return;

    const handleWheelScroll = (event: WheelEvent) => {
      event.preventDefault();

      const goalBox = parentsbox.querySelector(".goal-box") as HTMLElement;
      if (!goalBox) return;

      const goalBoxHeight = goalBox.clientHeight + 26;
      const scrollAmount = Math.sign(event.deltaY) * goalBoxHeight;

      parentsbox.scrollBy({ top: scrollAmount, behavior: "smooth" });
    };

    parentsbox.addEventListener("wheel", handleWheelScroll, { passive: false });

    return () => {
      parentsbox.removeEventListener("wheel", handleWheelScroll);
    };
  }, []);

  // 목표 데이터
  const [goals, setGoals] = useState([
    {
      goal_id: 1,
      goal_name: "여행 자금 모으기",
      current_amount: 150000,
      probability: 40,
    },
    {
      goal_id: 2,
      goal_name: "노트북 구매",
      current_amount: 500000,
      probability: 70,
    },
    {
      goal_id: 3,
      goal_name: "비상금 저축",
      current_amount: 80000,
      probability: 20,
    },
    {
      goal_id: 4,
      goal_name: "운동기구 구매",
      current_amount: 200000,
      probability: 30,
    },
    {
      goal_id: 5,
      goal_name: "책 구입",
      current_amount: 50000,
      probability: 10,
    },
  ]);

  return (
    <div>
      <div>
        <div className="startlist">목표 목록</div>
      </div>
      <div className="plus-parents">
        <button className="plus-btn" onClick={() => navigate("/add-goal")}>
          +
        </button>
        <div className="plus-list" onClick={() => navigate("/add-goal")}>
          <div className="plus-text">추가 목표</div>
        </div>
      </div>

      <div className="parentsbox" ref={parentsboxRef}>
        {goals.map((goal) => (
          <div key={goal.goal_id} className="goal-box" onClick={() => navigate("/main/goal")}>
            <img className="payment" src={payment} alt="payment" />
            <div className="nowgoal">목표</div>
            <div className="goaltext">{goal.goal_name}</div>
            <img className="present" src={present} alt="present" />
            <div className="nowmoney">현재 저축액</div>
            <div className="money4">{goal.current_amount.toLocaleString()}원</div>
            <div className="donutWrap">
              <DonutChart progress={goal.probability || 0} />
            </div>
          </div>
        ))}
      </div>

      <div style={{ paddingTop: "10px" }}>
        <img className="ninja" src={profile} alt="ninja" width={150} />
      </div>
      <div className="message">
        오늘도 목표를 향해 <br /> 달려가는 "뱅크닌자"님 <br /> 응원합니다!
      </div>
      <Bottom page="goal" />
    </div>
  );
};

export default Start;
