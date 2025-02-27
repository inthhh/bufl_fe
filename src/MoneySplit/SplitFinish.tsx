import React from "react";
import "./splitStyle.css";
import { useNavigate } from "react-router-dom";

const SplitFinish: React.FC = () => {
  const navigate = useNavigate();
  const clickToNext = () => {
    navigate("/");
  };
  return (
    <div className="center_wrap">
      <div>fin</div>
    </div>
  );
};

export default SplitFinish;
