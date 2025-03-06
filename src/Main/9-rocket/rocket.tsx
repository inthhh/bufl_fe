import React from "react";
import "./rocketStyle.css";
import rocket from "./img/rocket.png";
import { useNavigate } from "react-router-dom";

const Rocket: React.FC = () => {
  const navigate = useNavigate();
  const handlerocket = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="x">X</div>
      <img className="rocket" src={rocket} alt="rocket" />
      <div className="text">
        모으기 완주까지
        <br />
        응원할게요!
      </div>
      <button className="start1" onClick={handlerocket}>
        메인 화면으로
      </button>
    </div>
  );
};

export default Rocket;
