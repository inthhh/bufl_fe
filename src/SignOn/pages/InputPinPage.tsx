import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../MoneySplit/splitStyle.css";
import MoveBack from "../../MoneySplit/MoveBack";

const InputPinPage: React.FC = () => {
  const [pin, setPin] = useState<string[]>(Array(6).fill(""));
  const [firstPin, setFirstPin] = useState<string | null>(null);
  const [step, setStep] = useState<"set" | "confirm">("set"); // PIN 설정 단계
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
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
        setFirstPin(pin.join("")); // 첫 번째 입력 저장
        setPin(Array(6).fill("")); // 입력 초기화
        setStep("confirm"); // 확인 단계로 변경
      } else if (step === "confirm") {
        if (firstPin === pin.join("")) {
          navigate("/sign/interest"); // PIN이 일치하면 다음 페이지로 이동
        } else {
          setErrorMessage("PIN 번호가 일치하지 않습니다. 다시 입력해주세요.");
          setPin(Array(6).fill("")); // 입력 초기화
        }
      }
    }
  }, [pin]);

  return (
    <div>
      <MoveBack pageBefore="/sign/salary-info" />
      <div className="center_wrap">
        <div className= "pin-input--relative">
          <div className="black_title center_text">
            {step === "set" ? (
              <>
                간편로그인 및 <br />
                자동이체 등록을 위해 <br />
                PIN 번호를 설정해주세요.
              </>
            ) : (
              <>
                확인을 위해 한 번 더 <br />
                입력해주세요. <br />
                <br />
              </>
            )}
          </div>

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          {/* 🔹 PIN 입력 UI (동그라미) */}
          <div className="pin-input-container">
            {pin.map((num, index) => (
              <div
                key={index}
                className={`pin-dot ${num ? "filled" : ""}`}
              ></div>
            ))}
          </div>

          <div className="keypad">
            {[...Array(9)].map((_, index) => (
              <button
                key={index + 1}
                className="keypad-button"
                onClick={() => handleKeyPress((index + 1).toString())}
              >
                {index + 1}
              </button>
            ))}
            <div></div>
            <button
              className="keypad-button"
              onClick={() => handleKeyPress("0")}
            >
              0
            </button>
            <button className="keypad-button" onClick={handleDelete}>
              ⬅
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputPinPage;
