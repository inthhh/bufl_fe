import React, { useState, useEffect } from "react";
import "./listStyle.css";
import log from "./img/log.png";
import { useNavigate } from "react-router-dom";
import MoveBack from "../../MoneySplit/MoveBack";

// 추천 목록의 타입 정의
interface Recommendation {
  goal_name: string;
  goal_amount: number;
  goal_duration: number;
  monthly_saving: number;
}

// API 응답 타입 정의
interface ApiResponse {
  message: string;
  recommendations: Recommendation[];
}

const List: React.FC = () => {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null); // 사용자가 선택한 목표를 저장함, null이면 모달 닫힘, 특정 값 = 모달 열림
  const [amount, setAmount] = useState<number>(50); // 기본값 50만원 사용자가 설정한 월 저축 금액
  const [duration, setDuration] = useState<number>(10); // 기본값 10개월 사용자가 설정한 저축 기간
  const [recommendations, setRecommendations] = useState<string[]>([]); // AI 추천 리스트 상태 배열로 저장 ex) 해외여행 맥북구매 등
  const [loading, setLoading] = useState<boolean>(true); // 데이터 로딩인지 확인 여부
  const [error, setError] = useState<string | null>(null); // 에러 발생 시 에러 메시지 저장

  // 모달 열기 사용자가 추천 목표 클릭 -> selectedgoal = 해당 목표로 변경 -> 모달 창 오픈
  const openModal = (goal: string) => {
    setSelectedGoal(goal);
  };

  // 모달 닫기 사용자가 다시 선택 누르면 selectedgoal을 null로 설정 -> 모달 창 닫힘.
  const closeModal = () => {
    setSelectedGoal(null);
  };

  // 확인 버튼 클릭 시 페이지 이동
  const handleConfirm = () => {
    navigate("/Main/rocket");
  };

  // 새로고침 버튼 클릭 시 새 추천 목록 가져오기
  const handleRefresh = (): void => {
    setLoading(true); // 로딩 상태 표시
    fetchRecommendations(); // 추천 목록을 다시 가져옴
  };

  // AI 추천 리스트 가져오는 함수
  const fetchRecommendations = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:5000/Main/api/ai-goals");
      if (!response.ok) {
        throw new Error("데이터를 불러오는 데 실패했습니다.");
      }
      const data: ApiResponse = await response.json();
      console.log("API 응답 데이터:", data);
      
      // API 응답 형식에 맞게 처리
      if (data.recommendations && Array.isArray(data.recommendations)) {
        // 각 추천 객체에서 goal_name 추출
        const goalNames: string[] = data.recommendations.map(rec => rec.goal_name);
        setRecommendations(goalNames);
      } else {
        setRecommendations([]);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  // 컴포넌트 마운트 시 데이터 가져오기
  useEffect(() => {
    fetchRecommendations();
  }, []);

  return (
    <div>
      <MoveBack pageBefore="/Main/AccountSelector" />
      <div className="list-container">
        <div className="list">
          <div className="list1">AI 추천받기</div>

          {/* AI 추천 리스트 불러오기 */}
          {loading ? (
            <p>추천 목표 로딩 중...</p>
          ) : error ? (
            <p>오류 발생: {error}</p>
          ) : (
            recommendations.map((goal, index) => (
              <button key={index} className={`list${index + 2}`} onClick={() => openModal(goal)}>
                AI 추천 목표
                <br />
                "{goal}"
              </button>
            ))
          )}
        </div>

        {/* 새로고침 버튼 - 변경된 부분 */}
        <div>
          <button className="log-btn" onClick={handleRefresh}>
            <img className="log" src={log} alt="log" />
            새로고침
          </button>
        </div>
      </div>

      {/* 모달 창 - 기존 코드 그대로 유지 */}
      {selectedGoal && (
        <div className="modal-content">
          <h2 className="content-right">선택한 목표가 맞나요?</h2>
          <p className="goal-text">"{selectedGoal}"</p>

          {/* 저축 금액 조절 슬라이더 */}
          <div className="slider-container">
            <label className="month">한 달에 {amount}만원</label>
            <div className="text-space-btw">
              <span className="min-value">5만원</span>
              <span className="max-value">300만원</span>
            </div>
            <input
              className="slider1"
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
            <label className="month-money">{duration}개월 모으기</label>
            <div className="text-space-btw">
              <span className="min-value">1개월</span>
              <span className="max-value">36개월</span>
            </div>
            <input
              className="slider1"
              type="range"
              min="1"
              max="36"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
            />
          </div>

          {/* 버튼 영역 */}
          <div className="modal-buttons" style={{ marginTop: "40px", width: "360px", marginLeft: "10px" }}>
            <button className="cancel-btn" onClick={closeModal}>
              다시 선택
            </button>
            <button className="confirm-btn" onClick={handleConfirm}>
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;