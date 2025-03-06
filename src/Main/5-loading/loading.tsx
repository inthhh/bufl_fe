import React from "react";
import "./loadingStyle.css";

const Loading: React.FC = () => {
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
