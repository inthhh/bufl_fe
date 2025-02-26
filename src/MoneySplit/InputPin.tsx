import React from "react";
import "./splitStyle.css";
import { useNavigate } from "react-router-dom";

const InputPin: React.FC = () => {
  const navigate = useNavigate();
  const clickToNext = () => {
    navigate("/");
  };
  return (
    <div className="center_wrap">
      <div>
        자동이체 등록을 위해
        <br />
        PIN 번호를 입력해주세요.
      </div>
    </div>
  );
};

export default InputPin;
