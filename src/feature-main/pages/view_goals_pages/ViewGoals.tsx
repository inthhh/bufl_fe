import React, { useState, useEffect, useRef } from "react";
import "../../style/ViewGoals.css";
import payment from "../../images/pay.png";
import present from "../../images/piggy.png";
import profile from "../../images/profile.jpeg";
import Bottom from "../bottom_nav/bottom";
import { useNavigate } from "react-router-dom";
import DonutChart from "./Doughnut1";
import LoadingSpinner from "../../../shared/loadingSpinner";

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
      id: 1,
      goal_name: "Loading...",
      current_amount: 0,
      probability: 0,
    },
  ]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://buflbe.vercel.app/api/goals", {
      method: "GET", // 기본값이지만 명시적으로 써도 됨
      credentials: "include", // 쿠키 및 인증 정보 포함
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.goals) setGoals(data.goals);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

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
          <div key={goal.id} className="goal-box" onClick={() => navigate("/main/goal")}>
            <img className="payment" src={payment} alt="payment" />
            <div className="nowgoal">목표</div>
            <div className="goaltext">{goal.goal_name}</div>
            <img className="present" src={present} alt="present" />
            <div className="nowmoney">현재 저축액</div>
            <div className="money4">{Number(goal.current_amount).toLocaleString()}원</div>
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
