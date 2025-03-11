import React from "react";
import "../../style/splitStyle.css";
import { useNavigate } from "react-router-dom";
import RobotImg from "../../images/robot.png";
import MoveBack from "../../MoveBack";

const AI_home: React.FC = () => {
  const navigate = useNavigate();
  const clickToNext = () => {
    navigate("/money-split/ai/analysis");
  };
  return (
    <div>
      <MoveBack pageBefore="/money-split" />
      <div className="center_wrapper">
        <div>
          <div className="black_title_big">
            <p className="center_text" style={{ margin: "50px 0 40px 0" }}>
              AI가 추천해주는
              <br />
              월급 쪼개기
            </p>
          </div>
          <div className="center_wrapper">
            <img src={RobotImg} alt="" width={"150px"} />
          </div>
          <div className="center_wrapper" style={{ marginTop: "220px" }}>
            <p className="center_text">
              지난 소비 습관을 분석하고,
              <br />
              적절한 월급 쪼개기 비율을 자동으로 추천해 드릴게요.
              <br />
              나중에 비율을 수정할 수 있어요.
            </p>
          </div>
          <div className="center_wrapper">
            <div className="center_wrapper btn">
              <button className="blue_big_btn" type="button" onClick={() => clickToNext()}>
                시작하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI_home;
