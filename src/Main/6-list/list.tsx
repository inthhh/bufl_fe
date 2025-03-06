import React, { useState } from "react";
import "./listStyle.css";
import log from "./img/log.png";
import { useNavigate } from "react-router-dom";

const List: React.FC = () => {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>(50); // 기본값 50만원
  const [duration, setDuration] = useState<number>(10); // 기본값 10개월

  // 모달 열기
  const openModal = (goal: string) => {
    setSelectedGoal(goal);
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedGoal(null);
  };

  // 확인 버튼 클릭 시 페이지 이동
  const handleConfirm = () => {
    navigate("/Main/rocket");
  };

  return (
    <div className="list-container">
      <div className="list">
        <div className="list1">AI 추천받기</div>
        <button
          className="list2"
          onClick={() => openModal("여행을 위해 500만원 모으기")}
        >
          AI 추천 목표
          <br />
          "여행"을 위해 500만원 모으기
        </button>
        <button
          className="list3"
          onClick={() => openModal("한달에 얼마씩 모아야 1억이 될까?")}
        >
          AI가 도와주는 저축 목표 설정
          <br />
          한달에 얼마씩 모아야 1억이 될까?
        </button>
        <button
          className="list4"
          onClick={() => openModal("맥북을 위해 300만원 모으기")}
        >
          AI 추천 목표
          <br />
          "맥북"을 위해 300만원 모으기
        </button>
        <button
          className="list5"
          onClick={() => openModal("노후자금을 위한 최대 저축 금액은?")}
        >
          AI가 도와주는 저축 목표 설정
          <br />
          노후자금을 위한 최대 저축 금액은?
        </button>
      </div>

      {/* 모달 창 */}
      {selectedGoal && (
        <div className="modal-content">
          <h3>선택한 목표가 맞나요?</h3>
          <p className="goal-text">"{selectedGoal}"</p>
          {/* 저축 금액 조절 슬라이더 */}
          <div className="slider-container">
            <label>한 달에 {amount}만원</label>
            <input
              type="range"
              min="5"
              max="300"
              step="5"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          {/* 저축 기간 조절 슬라이더 */}
          <div className="slider-container1">
            <label>{duration}개월 모으기</label>
            <input
              type="range"
              min="1"
              max="36"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
            />
          </div>
          {/* 버튼 영역 */}
          <div className="modal-buttons">
            <button className="cancel-btn" onClick={closeModal}>
              다시 선택
            </button>
            <button className="confirm-btn" onClick={handleConfirm}>
              확인
            </button>
          </div>
        </div>
      )}

      {/* 새로고침 버튼 */}
      <div>
        <button className="log-btn" onClick={() => navigate("/Main/loading")}>
          <img className="log" src={log} alt="log" />
          새로고침
        </button>
      </div>
    </div>
  );
};

export default List;
