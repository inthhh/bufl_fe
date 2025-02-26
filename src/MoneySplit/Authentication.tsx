import React from "react";
import "./splitStyle.css";
import { useNavigate } from "react-router-dom";
import RobotImg from "./robot.png";

function Authentication() {
  const [isFinish, setIsFinish] = React.useState(false);
  const navigate = useNavigate();
  const clickForToss = () => {
    navigate("/MoneySplit/TossAuth");
  };
  return (
    <div className="center_wrap">
      <div>
        <div className="black_title">
          자동이체 등록에는 <br />
          인증서 확인이 필요해요.
        </div>
        <button className="big_btn" type="button" onClick={() => clickForToss()}>
          토스 인증서
        </button>
        <button className="big_btn" type="button">
          금융 인증서
        </button>
      </div>
    </div>
  );
}

export default Authentication;
