import React from "react";
import "./splitStyle.css";
import { useNavigate } from "react-router-dom";
import RobotImg from "./robot.png";

function Authentication() {
  const [isFinish, setIsFinish] = React.useState(false);
  const navigate = useNavigate();
  const clickForYes = () => {
    navigate("/MoneySplit/Authentication");
  };
  return (
    <div className="center_wrap">
      <div>
        <div>자동이체 등록에는 인증서 확인이 필요해요.</div>
        <button>토스 인증서</button>
        <button>금융 인증서</button>
      </div>
    </div>
  );
}

export default Authentication;
