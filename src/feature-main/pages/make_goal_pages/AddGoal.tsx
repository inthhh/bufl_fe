import React from "react";
import "../../style/AddGoal.css";
import pay from "../../images/pay.png";
import { useNavigate } from "react-router-dom";
import MoveBack from "../../../shared/MoveBack";
import Bottom from "../bottom_nav/bottom";
import RobotFace from "../../images/robot_face.png";
import Fade from "../../../shared/Fade";

const AddGoal: React.FC = () => {
  const navigate = useNavigate();
  const handlebox1 = () => {
    navigate("/main/pig");
  };
  const handlebox2 = () => {
    navigate("/main/account-selector1");
  };
  return (
    <Fade>
      <div>
        <div style={{ backgroundColor: "#f2f2f2" }}>
          <div>
            <MoveBack pageBefore="/add-goal" />
            <div className="pay1">저축 목표 세우기</div>
          </div>
          <div className="pay">
            <img src={pay} alt="pay" width={210} />
          </div>
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
          <button
            className="box1-btn"
            onClick={handlebox1}
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <img src={RobotFace} alt="" width={42} style={{ paddingBottom: "5px" }} /> <div>AI 추천 받기</div>
          </button>
          <button className="box2-btn" onClick={handlebox2}>
            ✍🏻 직접 설정
          </button>
        </div>
        <Bottom page="goal" />
      </div>
    </Fade>
  );
};

export default AddGoal;
