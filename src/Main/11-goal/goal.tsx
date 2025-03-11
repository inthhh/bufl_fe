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
  const [savingHistory, setSavingHistory] = useState([
    {
      date: "2월 19일",
      description: "입금자명",
      amount: 200000,
      total: 3200000,
    },
    {
      date: "1월 19일",
      description: "입금자명",
      amount: 200000,
      total: 3200000,
    },
    {
      date: "12월 19일",
      description: "입금자명",
      amount: 200000,
      total: 3200000,
    },
  ]);

  return (
    <div className={`goal-container ${showNotification ? "blurred" : ""}`}>
      <MoveBack pageBefore="/Main/start" />

      <div className="alarm-img" onClick={() => setShowNotification(true)}>
        <img src={BellImg} alt="bell" className="bell-icon" />
      </div>

      <div className="goal-header">
        <p className="goal-title">💰1년 안에 10,000,000원 모으기</p>
      </div>

      <div className="goal-progress">
        <p className="goal-progress-title">
          <strong>3,200,000</strong> / 10,000,000원
        </p>
        <div className="progress-bar">
          <div className="progress" style={{ width: "32%" }}></div>
        </div>
        <div className="goal-dates">
          <span>2025.01.12</span>
          <span>2026.01.12</span>
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
            </p>{" "}
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
