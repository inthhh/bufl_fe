import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./goalStyle.css";
import MoveBack from "../../MoneySplit/MoveBack";
import "../../MoneySplit/style/splitStyle.css";import BellImg from "./img/bell.png"; // 알림 아이콘
import Bottom from "../bottom/bottom";

const Goal = () => {
  const navigate = useNavigate();
  const [savingHistory, setSavingHistory] = useState([
    { date: "2월 19일", description: "입금자명", amount: 200000, total: 3200000 },
    { date: "1월 19일", description: "입금자명", amount: 200000, total: 3200000 },
    { date: "12월 19일", description: "입금자명", amount: 200000, total: 3200000 },
  ]);

  return (
    <div>
      <MoveBack pageBefore="/Main/start" />
      <div className="goal-header">
        <h3 className="goal-title">💰1년 안에 10,000,000원 모으기</h3>
        <img src={BellImg} alt="bell" className="bell-icon" />
      </div>

      <div className="goal-progress">
        <p>
          <strong>0 / 10,000,000원</strong>
        </p>
        <div className="progress-bar">
          <div className="progress" style={{ width: "0%" }}></div>
        </div>
        <div className="goal-dates">
          <span>2025.01.12</span>
          <span>2026.01.12</span>
        </div>
      </div>

      <div className="saving-history">
        <h4>저축 내역</h4>
        <ul>
          {savingHistory.map((item, index) => (
            <li key={index} className="history-item">
              <div className="history-date">{item.date}</div>
              <div className="history-description">{item.description}</div>
              <div className="history-amount">+ {item.amount.toLocaleString()}</div>
              <div className="history-total">{item.total.toLocaleString()}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="goal-footer">
        <div className="nav-icons">
          <span>🏠 홈</span>
          <span className="active">🎯 목표관리</span>
          <span>🛍️ 상점</span>
        </div>
      </div>
    </div>
  );
};

export default Goal;
