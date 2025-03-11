import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./goalStyle.css";
import MoveBack from "../../MoneySplit/MoveBack";
import "../../MoneySplit/style/splitStyle.css";
import BellImg from "./img/bell.png";
import Bottom from "../bottom/bottom";

const Goal = () => {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  const [goalAmount, setGoalAmount] = useState(10000000);
  const [currentAmount, setCurrentAmount] = useState(3800000);

  const progressPercentage = Math.min(100, (currentAmount / goalAmount) * 100);

  const [savingHistory, setSavingHistory] = useState([
    {
      date: "2월 19일",
      description: "입금자명",
      amount: 200000,
      total: 3800000,
    },
    {
      date: "1월 19일",
      description: "입금자명",
      amount: 200000,
      total: 3600000,
    },
    {
      date: "12월 19일",
      description: "입금자명",
      amount: 200000,
      total: 3400000,
    },
    {
      date: "11월 19일",
      description: "입금자명",
      amount: 200000,
      total: 3200000,
    },
    {
      date: "10월 19일",
      description: "입금자명",
      amount: 200000,
      total: 3000000,
    },
    {
      date: "9월 19일",
      description: "입금자명",
      amount: 200000,
      total: 2800000,
    },
  ]);

  const [startDate, setStartDate] = useState("2025.01.12");
  const [endDate, setEndDate] = useState("2026.01.12");

  return (
    <div className={`goal-container ${showNotification ? "blurred" : ""}`}>
      <MoveBack pageBefore="/Main/start" />

      <div className="alarm-img" onClick={() => setShowNotification(true)}>
        <img src={BellImg} alt="bell" className="bell-icon" />
      </div>

      <div className="goal-header">
        <p className="goal-title">
          💰 1년 안에 {goalAmount.toLocaleString()}원 모으기
        </p>
      </div>

      <div className="goal-progress">
        <p className="goal-progress-title">
          <strong>{currentAmount.toLocaleString()}</strong> /{" "}
          {goalAmount.toLocaleString()}원
        </p>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="goal-dates">
          <span>{startDate}</span>
          <span>{endDate}</span>
        </div>
      </div>

      <div className="saving-history-container">
        <div className="saving-history">
          <h4>저축 내역</h4>
          {savingHistory.map((item, index) => (
            <li key={index} className="history-item">
              <div className="history-date">{item.date}</div>
              <div className="history-description">{item.description}</div>
              <div className="history-wrap">
                <div className="history-amount">
                  + {item.amount.toLocaleString()}
                </div>
                <div className="history-total">
                  {item.total.toLocaleString()}
                </div>
              </div>
            </li>
          ))}
        </div>
      </div>

      <Bottom page="goal" />

      {showNotification && (
        <div
          className="notification-backdrop"
          onClick={() => setShowNotification(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="notification-wrap"
          >
            <p className="notification-modal">
              이번 달 목표 달성까지 20만원
              <br /> 더 필요합니다!
            </p>
            <br />
            <p className="notification-modal">
              현재 속도로 10개월 정도면 목표에 <br />
              도달할 수 있습니다!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Goal;
