import React, { useState, useEffect } from "react";
import "./chooseStyle.css";
import pigmoney from "../img/piggy.png";
import { useNavigate, useLocation } from "react-router-dom";
import MoveBack from "../../../MoneySplit/MoveBack";

const Choose: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const account_id = location.state?.account_id || 1;
  const savingAmount = location.state?.saving_amount || 10; // 전달된 금액 (기본값 10)

  const [amount, setAmount] = useState<number>(Number(savingAmount)); // saving_amount 값을 받아서 초기화
  const [duration, setDuration] = useState(12); // 기본값 12개월

  const nexthandle = async () => {
    if (!account_id) {
      alert("계좌를 선택해주세요!");
      return;
    }
    try {
      const response = await fetch("https://buflbe.vercel.app/api/goals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          monthly_saving: amount * 10000, // amount는 만 원 단위로 설정되어 있음
          goal_duration: duration,
          account_id: 46,
        }),
        credentials: "include", // 쿠키 인증 정보를 포함
      });

      const data = await response.json();

      if (response.ok) {
        alert(`목표가 설정되었습니다. 목표 ID: ${data.goal_id}`);
        navigate("/Main/rocket", {
          state: { goal_id: data.goal_id }, // goal_id 전달
        });
      } else {
        alert(data.message || "목표 설정에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  const handleDirectInputClick = () => {
    // 직접 입력 버튼 클릭 시 Choice 페이지로 이동
    navigate("/Main/choice", {
      state: { account_id: account_id, saving_amount: amount }, // saving_amount 값을 전달
    });
  };

  useEffect(() => {
    setAmount(Number(savingAmount)); // `saving_amount` 값이 변경될 때마다 amount 갱신
  }, [savingAmount]);

  return (
    <div>
      <MoveBack pageBefore="/Main/choose" />
      <div>
        <img className="pigmoney" src={pigmoney} alt="pigmoney" />
      </div>
      <div className="winnermoney1">
        매달 {amount}만원씩
        <br />
        저축에 성공하면
      </div>
      <div className="winnermoney2">{duration}개월 만기했을 때 (원금+이자)</div>
      <div className="winnermoney3">
        <span style={{ color: "#3182F6", fontWeight: "bold" }}>
          {(amount * 10000 * duration).toLocaleString()}원
        </span>{" "}
        + a 받아요
      </div>
      <div>
        <div className="mybox-container">
          <div className="slider-container">
            <span className="min-value1">5만원</span>
            <label className="month10">한 달에 {amount}만원</label>
            <span className="max-value2">300만원</span>
            <input
              className="slider3"
              type="range"
              min="5"
              max="300"
              step="5"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div className="slider-container1">
            <span className="min-month1">3개월</span>
            <label className="month-money1">{duration}개월 모으기</label>
            <span className="max-month2">36개월</span>
            <input
              className="slider3"
              type="range"
              min="3"
              max="36"
              step="1"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
            />
          </div>
          <button className="winner-money4" onClick={handleDirectInputClick}>
            직접 입력
          </button>
          <button className="next-btn" onClick={nexthandle}>
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default Choose;
