import React, { useEffect } from "react";
import "./loadingStyle.css";
import { useNavigate } from "react-router-dom";
import MoveBack from "../../MoneySplit/MoveBack";
import LoadingSpinner from "../../MoneySplit/loadingSpinner";

const Loading: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main/list");
    }, 1200);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate]);
  return (
    <div>
      <MoveBack pageBefore="/main/list" />
      <div className="load">
        <div className="spin">AI 추천받기</div>
        <div className="spin_container">
          <LoadingSpinner text="recommend" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
