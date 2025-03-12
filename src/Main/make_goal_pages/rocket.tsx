import React, { useEffect, useState } from "react";
import "./rocketStyle.css";
import rocket from "./img/rocket.png";
import { useNavigate, useLocation } from "react-router-dom";

const Rocket: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // goal_id가 location.state에 전달되었는지 확인
  const goalId = location.state?.goal_id || location.state?.goal?.goal_id; // goal_id 확인
  const goalDataFromState = location.state?.goal || null; // goalData 확인
  const [goalData, setGoalData] = useState<any>(goalDataFromState); // 초기 goalData 상태 설정

  useEffect(() => {
    const fetchGoalDetails = async () => {
      if (!goalId) {
        alert("목표 ID가 없습니다.");
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:5000/api/goals/${goalId}`,
          {
            method: "GET",
            credentials: "include", // 세션 쿠키 전송
          }
        );

        if (response.ok) {
          const data = await response.json();
          setGoalData(data.goal); // 서버에서 받은 goal 데이터
        } else {
          const errorData = await response.json();
          alert(
            errorData.message || "목표 상세 정보를 가져오는 데 실패했습니다."
          );
        }
      } catch (error) {
        console.error("Error:", error);
        alert("서버 오류가 발생했습니다.");
      }
    };

    // goalData가 없다면 서버에서 데이터를 가져옴
    if (!goalDataFromState) {
      fetchGoalDetails();
    }
  }, [goalId, goalDataFromState]);

  const handlerocket = () => {
    if (!goalData) {
      alert("목표 데이터가 없습니다.");
      return;
    }

    navigate("/Main/start", {
      state: { goalData }, // goalData를 메인 화면으로 전달
    });
  };

  return (
    <div>
      <div className="rocket">
        <img className="rocket" src={rocket} alt="rocket" />
      </div>
      <div className="text">
        모으기 완주까지
        <br />
        응원할게요!
      </div>
      <button className="start1" onClick={handlerocket}>
        메인 화면으로
      </button>
    </div>
  );
};

export default Rocket;
