import React from "react";
import "../../style/splitStyle.css";
import { useNavigate } from "react-router-dom";
import GreenMoneyImg from "../../images/pay.png";

const SplitFinish: React.FC = () => {
  const navigate = useNavigate();
  const clickToNext = () => {
    navigate("/");
  };
  return (
    <div className="center_wrapper">
      <div>
        <div className="center_wrapper">
          <div className="black_title_big center_text" style={{ marginTop: "150px" }}>
            월급 쪼개기 설정이
            <br />
            끝났어요!
          </div>
        </div>
        <div className="center_wrapper" style={{ margin: "20px" }}>
          <img src={GreenMoneyImg} alt="" width={140} />
        </div>
        <div className="center_wrapper center_text">
          다음 월급부터 자동으로 쪼개져요.
          <br />
          쪼개기 비율은 추후 수정할 수 있어요.
        </div>
        <div className="center_wrapper">
          <div className="center_wrapper btn" style={{ marginTop: "20px" }}>
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
