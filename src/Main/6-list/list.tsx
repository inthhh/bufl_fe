import React from "react";
import "./listStyle.css";
import log from "./img/log.png";
import { useNavigate } from "react-router-dom";

const List: React.FC = () => {
  const navigate = useNavigate();
  const handlelist = () => {
    navigate("/Main/loading");
  };
  return (
    <div>
      <div className="list">
        <div className="list1">AI 추천받기</div>
        <button className="list2">
          AI 추천 목표
          <br />
          "여행"을 위해 500만원 모으기
        </button>
        <button className="list3">
          AI가 도와주는 저축 목표 설정
          <br />
          한달에 얼마씩 모아야 1억이 될까?
        </button>
        <button className="list4">
          AI 추천 목표
          <br />
          "맥북"을 위해 300만원 모으기
        </button>
        <button className="list5">
          AI가 도와주는 저축 목표 설정
          <br />
          노후자금을 위한 최대 저축 금액은?
        </button>
      </div>
      <div>
        <img className="log" src={log} alt="log" />
        <button className="log-btn" onClick={handlelist}>
          새로고침
        </button>
      </div>
    </div>
  );
};

export default List;
