import React from "react";
import "../../../style/ai_first.css";
import pig from "../../../images/piggy.png";
import { useNavigate } from "react-router-dom";
import MoveBack from "../../../../shared/MoveBack";
import RobotImg from "../../../images/robot.png";
import Fade from "../../../../shared/Fade";

const Pig: React.FC = () => {
  const navigate = useNavigate();
  const handlestart = () => {
    navigate("/main/account-selector");
  };
  return (
    <Fade>
      <div>
        <MoveBack pageBefore="/add-goal" />
        <div className="start">
          AI가 추천해주는
          <br />
          저축 목표 세우기
        </div>
        <div className="pig">
          <img src={RobotImg} alt="robot" width={280} />
        </div>
        <button
          className="start-btn"
          onClick={handlestart}
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <img src={pig} alt="" width={40} />
          <div> 시작하기</div>
        </button>
      </div>
    </Fade>
  );
};

export default Pig;
