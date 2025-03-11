import React, { useState, useEffect } from "react";
import "./startStyle.css";
import payment from "./img/pay.png";
import present from "./img/piggy.png";
import ninja from "./img/start.png";
import Bottom from "../bottom/bottom";
import { useNavigate } from "react-router-dom";
import DonutChart from "./Doughnut1"; // 도넛 차트 컴포넌트 임포트

const Start: React.FC = () => {
  const navigate = useNavigate();
  const handleplusgoal = () => {
    navigate("/second");
  };

  const [goals, setGoals] = useState<any[]>([]); // 목표 리스트 상태

  // 목표 데이터를 가져오는 API 호출
  useEffect(() => {
    const fetchGoals = async () => {
      const response = await fetch("http://localhost:5000/api/goals", {
        method: "GET",
        credentials: "include", // 쿠키 인증 포함
      });

      if (response.ok) {
        const data = await response.json();
        setGoals(data.goals); // 목표 리스트 상태 업데이트
      } else {
        console.error("목표 데이터 가져오기 실패");
      }
    };

    fetchGoals();
  }, []);

  return (
    <div>
      <div>
        <div className="startlist">목표 목록</div>
      </div>
      <div className="plus-parents">
        <button className="plus-btn" onClick={handleplusgoal}>
          +
        </button>
        <div className="plus-list">추가 목표</div>
      </div>

      {/* 목표 목록 렌더링 */}
      <div className="parentsbox">
        {goals.map((goal, index) => (
          <div key={goal.goal_id || index}>
            {/* 고유한 key 추가 */}
            <img className="payment" src={payment} alt="payment" />
            <div className="nowgoal">목표</div>
            <div className="goaltext">{goal.goal_name}</div>
            <img className="present" src={present} alt="present" />
            <div className="nowmoney">현재 저축액</div>
            <div className="money4">{goal.current_amount}원</div>
            {/* 도넛 차트 추가, progress 값은 goal.probability */}
            <div style={{ margin: "10px" }}>
              <h2></h2>
              {/* <DonutChart progress={goal.probability} /> */}
            </div>
          </div>
        ))}
      </div>

      <div>
        <img className="ninja" src={ninja} alt="ninja" />
      </div>
      <div className="message">
        오늘도 목표를 향해 달려가는 "뱅크닌자"님 응원합니다!
      </div>
      <Bottom page="goal" />
    </div>
  );
};

export default Start;
