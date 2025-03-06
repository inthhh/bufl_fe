import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../MoneySplit/style/splitStyle.css";
import MoveBack from "../../MoneySplit/MoveBack";

const InputPinPage: React.FC = () => {
  const [pin, setPin] = useState<string[]>(Array(6).fill(""));
  const [firstPin, setFirstPin] = useState<string | null>(null);
  const [step, setStep] = useState<"set" | "confirm">("set");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();
  const userPhone = localStorage.getItem("userPhone");

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
      if (lastIndex > 0) {
        newPin[lastIndex - 1] = "";
      } else {
        newPin[newPin.length - 1] = "";
      }
      return newPin;
    });
  };

  useEffect(() => {
    if (pin.every((p) => p !== "")) {
      if (step === "set") {
        setFirstPin(pin.join(""));
        setPin(Array(6).fill(""));
        setStep("confirm");
      } else if (step === "confirm") {
        if (firstPin === pin.join("")) {
          updateUserPassword(firstPin);
        } else {
          setErrorMessage("PIN 번호가 일치하지 않습니다. 다시 입력해주세요.");
          setPin(Array(6).fill(""));
        }
      }
    }
  }, [pin]);

  const updateUserPassword = async (pin: string) => {
    try {
      await axios.put("http://localhost:5000/api/users/set-pin", {
        userPhone,
        userPassword: pin,
      });
      alert("PIN 설정 완료!");
      navigate("/sign/interest");
    } catch (error) {
      console.error("PIN 설정 오류:", error);
      setErrorMessage("PIN 설정 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <MoveBack pageBefore="/sign/salary-info" />
      <div className="center_wrap">
        <div className="black_title center_text">
          {step === "set" ? "PIN 번호를 설정해주세요." : "확인을 위해 한 번 더 입력해주세요."}
        </div>

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <div className="pin-input-container">
          {pin.map((num, index) => (
            <div key={index} className={`pin-dot ${num ? "filled" : ""}`}></div>
          ))}
        </div>

        <div className="keypad">
          {[...Array(9)].map((_, index) => (
            <button key={index + 1} className="keypad-button" onClick={() => handleKeyPress((index + 1).toString())}>
              {index + 1}
            </button>
          ))}
          <div></div>
          <button className="keypad-button" onClick={() => handleKeyPress("0")}>0</button>
          <button className="keypad-button" onClick={handleDelete}>⬅</button>
        </div>
      </div>
    </div>
  );
};

export default InputPinPage;
