import React from "react";
import "./splitStyle.css";
import MoneyImg from "./img/money.png";
import { useNavigate } from "react-router-dom";
import MoveBack from "./MoveBack";

const SplitFirst: React.FC = () => {
  const navigate = useNavigate();
  const clickToAI = () => {
    navigate("/money-split/ai");
  };
  const clickToSelf = () => {
    navigate("/money-split/select-ratio");
  };
  return (
    <div>
      <MoveBack pageBefore="/" />
      <div className="center_wrap">
        <div>
          <div className="center_wrap" style={{ margin: "50px 0 10px 0" }}>
            <p className="black_title_big">통장 쪼개기 비율 설정</p>
          </div>
          <div className="center_wrap">
            <img src={MoneyImg} alt="money" width={"120px"} />
          </div>
          <div className="center_wrap" style={{ margin: "40px" }}>
            <strong>자유롭게 비율을 설정하고 추천받고</strong>
          </div>
          <div className="center_wrap" style={{ margin: "10px 0 80px 0" }}>
            <p className="center_text">
              통장 쪼개기 비율을 직접 설정하거나
              <br /> AI를 통해 최적의 비율을 추천받으세요!
            </p>
          </div>
          <div className="center_wrap">
            <div>
              <button className="blue_btn" type="button" onClick={() => clickToAI()}>
                🤖 AI 추천 받기
              </button>
              <button className="light_blue_btn" type="button" onClick={() => clickToSelf()}>
                ✍️ 직접 설정
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitFirst;
