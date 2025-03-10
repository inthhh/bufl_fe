import React from "react";
import "./secondStyle.css";
import pay from "./img/pay.png";
import { useNavigate } from "react-router-dom";
import MoveBack from "../../MoneySplit/MoveBack";
import Bottom from "../bottom/bottom";

const Second: React.FC = () => {
  const navigate = useNavigate();
  const handlebox1 = () => {
    navigate("/Main/pig");
  };
  const handlebox2 = () => {
    navigate("/Main/AccountSelector1");
  };
  return (
    <div className="relative-parent">
      <div>
        <MoveBack pageBefore="/" />
        <div className="pay1">저축 목표 세우기</div>
      </div>
      <div className="pay">
        <img src={pay} alt="pay" />
      </div>
      <div className="pay2">
        마음껏 만들고,
        <br />
        부담없이 설정하세요
      </div>
      <div className="pay3">
        저축 목표를 직접 설정하거나,
        <br />
        AI를 통해 최적의 목표를 추천받으세요!
      </div>
      <div className="button_wrap">
        <button className="box1-btn" onClick={handlebox1}>
          🤖 AI 추천 받기
        </button>
        <button className="box2-btn" onClick={handlebox2}>
          ✍🏻 직접 설정
        </button>
      </div>
      <Bottom page="goal" />
    </div>
  );
};

export default Second;
