import React from "react";
import "../splitStyle.css";
import { useNavigate } from "react-router-dom";
import GreenMoneyImg from "../img/green_money.png";

const SplitFinish: React.FC = () => {
  const navigate = useNavigate();
  const clickToNext = () => {
    navigate("/");
  };
  return (
    <div className="center_wrap">
      <div>
        <div className="center_wrap">
          <div className="black_title" style={{ fontSize: "24px" }}>
            월급 쪼개기 설정이 끝났어요!
          </div>
        </div>
        <div className="center_wrap" style={{ margin: "20px" }}>
          <img src={GreenMoneyImg} alt="" width={140} />
        </div>
        <div className="center_wrap center_text">
          다음 월급부터 자동으로 쪼개져요.
          <br />
          쪼개기 비율은 추후 수정할 수 있어요.
        </div>
        <div className="center_wrap">
          <div className="center_wrap btn" style={{ marginTop: "20px" }}>
            <button className="blue_big_btn" onClick={clickToNext}>
              메인 화면으로
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitFinish;
