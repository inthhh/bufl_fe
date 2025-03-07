import React from "react";
import "./chooseStyle.css";
import MoveBack from "../../MoneySplit/MoveBack";

const Choose: React.FC = () => {
  return (
    <div>
      <MoveBack pageBefore="/Main/AccountSelector1" />
    </div>
  );
};

export default Choose;
