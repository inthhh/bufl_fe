import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./splitStyle.css";

const InputPin: React.FC = () => {
  const [pin, setPin] = useState<string[]>(Array(6).fill(""));
  const navigate = useNavigate();

  const handleKeyPress = (num: string) => {
    setPin((prev) => {
      const newPin = [...prev];
      const emptyIndex = newPin.findIndex((val) => val === "");
      if (emptyIndex !== -1) newPin[emptyIndex] = num;
      return newPin;
    });
  };

  const handleDelete = () => {
    setPin((prev) => {
      const newPin = [...prev];
      const lastIndex = newPin.lastIndexOf("");
      const targetIndex = lastIndex === -1 ? 5 : lastIndex - 1;
      if (targetIndex >= 0) newPin[targetIndex] = "";
      return newPin;
    });
  };

  useEffect(() => {
    if (pin.every((p) => p !== "")) navigate("/MoneySplit/SplitLoading");
  }, [pin]);

  return (
    <div className="center_wrap">
      <div>
        <div className="black_title center_text">
          자동이체 등록을 위해 <br />
          PIN 번호를 입력해주세요.
        </div>
        <div className="center_wrap" style={{ margin: "30px 0" }}>
          <div className="pin-input-container">
            {pin.map((num, index) => (
              <input key={index} type="password" value={num} className="pin-input" required />
            ))}
          </div>
        </div>
        <div className="keypad">
          {[...Array(9)].map((_, index) => (
            <button key={index + 1} className="keypad-button" onClick={() => handleKeyPress((index + 1).toString())}>
              {index + 1}
            </button>
          ))}
          <div onClick={handleDelete}></div>
          <button className="keypad-button" onClick={() => handleKeyPress("0")}>
            0
          </button>
          <button className="keypad-button" onClick={handleDelete}>
            ⬅
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputPin;
