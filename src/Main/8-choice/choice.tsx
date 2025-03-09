import React from "react";
import "./choiceStyle.css";
import MoveBack from "../../MoneySplit/MoveBack";

const Choice: React.FC = () => {
  return (
    <div>
      <MoveBack pageBefore="/Main/choose" />
    </div>
  );
};

export default Choice;
