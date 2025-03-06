import React, { useEffect } from "react";
import "./loadingStyle.css";
import { useNavigate } from "react-router-dom";

const Loading: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Main/list");
    }, 2000); //2초 뒤에 이동

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate]);
  return (
    <div className="load">
      <div className="spin">AI 추천받기</div>
      <div className="spinner">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="dot"></div>
        ))}
      </div>
      <div className="loading">
        새 추천 목록
        <br />
        로딩 중
      </div>
    </div>
  );
};

export default Loading;
