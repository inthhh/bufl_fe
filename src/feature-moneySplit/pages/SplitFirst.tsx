import React from "react";
import "../style/splitStyle.css";
import MoneyImg from "../images/money.png";
import { useNavigate } from "react-router-dom";
import MoveBack from "../../shared/MoveBack";
import RobotFace from "../images/robot_face.png";
import Fade from "../../shared/Fade";

const SplitFirst: React.FC = () => {
  const navigate = useNavigate();
  const clickToAI = () => {
    navigate("/money-split/ai");
  };
  const clickToSelf = () => {
    navigate("/money-split/select-ratio");
  };
  return (
    <Fade>
      <div>
        <MoveBack pageBefore="/" />
        <div className="center_wrapper">
          <div>
            <div className="center_wrapper" style={{ margin: "50px 0 10px 0" }}>
              <p className="black_title_big">통장 쪼개기 비율 설정</p>
            </div>
            <div className="center_wrapper">
              <img src={MoneyImg} alt="money" width={"120px"} />
            </div>
            <div className="center_wrapper" style={{ margin: "80px 0 20px 0" }}>
              <strong>자유롭게 비율을 설정하고 추천받고</strong>
            </div>
            <div className="center_wrapper" style={{ margin: "10px 0 40px 0" }}>
              <p className="center_text">
                통장 쪼개기 비율을 직접 설정하거나
                <br /> AI를 통해 최적의 비율을 추천받으세요!
              </p>
            </div>
            <div className="center_wrapper">
              <div>
                <button
                  className="blue_btn"
                  type="button"
                  onClick={() => clickToAI()}
                  style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                  <img src={RobotFace} alt="" width={42} style={{ paddingBottom: "5px" }} /> <div>AI 추천 받기</div>
                </button>
                <button className="light_blue_btn" type="button" onClick={() => clickToSelf()}>
                  ✍️ 직접 설정
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default SplitFirst;
