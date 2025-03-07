import React, { useState } from "react";
import "./settingStyle.css";
// import ninja from "./img/start.png";
import Bottom from "../bottom/bottom";
import { useNavigate } from "react-router-dom";
// import DoughnutChartWithGoal from "../DoughnutChartWithGoal"; // 도넛 차트 컴포넌트 임포트

const Setting: React.FC = () => {
  return (
    <div>
      <Bottom page="menu" />
    </div>
  );
};

export default Setting;
