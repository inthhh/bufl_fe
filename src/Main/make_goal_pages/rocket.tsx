import React, { useEffect, useState } from "react";
import "./rocketStyle.css";
import rocket from "./img/rocket.png";
import { useNavigate, useLocation } from "react-router-dom";

const Rocket: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // goal_id가 location.state에 전달되었는지 확인

  const goalId = location.state?.goal_id;
  const goalDataFromState = location.state?.goal || null; // goalData 확인
  const [goalData, setGoalData] = useState<any>(goalDataFromState); // 초기 goalData 상태 설정

  useEffect(() => {
    const fetchGoalDetails = async () => {
      try {
        const response = await fetch(`https://buflbe.vercel.app/api/goals/${goalId}`, {
          method: "GET",
          credentials: "include", // 세션 쿠키 전송
        });

        if (response.ok) {
          const data = await response.json();
          setGoalData(data.goal); // 서버에서 받은 goal 데이터
        } else {
          const errorData = await response.json();
          // alert(errorData.message || "목표 상세 정보를 가져오는 데 실패했습니다.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (!goalDataFromState) {
      fetchGoalDetails();
    }
  }, [goalId, goalDataFromState]);

  const handlerocket = () => {
    // if (!goalData) {
    //   // alert("목표 데이터가 없습니다.");
    //   return;
    // }

    navigate("/main/goals", {
      // state: { goalData }, // goalData를 메인 화면으로 전달
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
