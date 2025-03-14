import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/splitStyle.css";
import MoveBack from "../../../shared/MoveBack";
import Fade from "../../../shared/Fade";

const InputPin: React.FC = () => {
  const [pin, setPin] = useState<string[]>(Array(6).fill(""));
  const navigate = useNavigate();

  const handleKeyPress = (num: string) => {
    setPin((prev) => {
      const newPin = [...prev];
      const emptyIndex = newPin.findIndex((val) => val === "");
      if (emptyIndex !== -1) newPin[emptyIndex] = num;
      console.log(newPin);
      return newPin;
    });
  };

  const handleDelete = () => {
    setPin((prev) => {
      let newPin = [...prev];
      let lastIndex = 0;
      let found = false;
      newPin.map((x, i) => {
        if (x === "" && !found) {
          lastIndex = i;
          found = true;
        }
      });
      // console.log("*****", lastIndex);
      if (lastIndex > 0) newPin[lastIndex - 1] = "";
      return newPin;
    });
  };

  const comparePassword = async () => {
    try {
      const pinString = pin.join("");
      console.log(pinString);
      const response = await fetch("http://localhost:5000/api/users/pin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userPassword: pinString }),
        credentials: "include", // 쿠키 및 인증 정보 포함
      });

      if (!response.ok) {
        throw new Error("Failed to send data");
      }
      const data = await response.json();
      console.log("Success:", data);
      return true;
    } catch (error) {
      console.error("inputPin Error:", error);
      return false;
    }
  };

  const [isWrong, setIsWrong] = useState(false);
  useEffect(() => {
    if (pin.every((p) => p !== "")) {
      // if 비밀번호 비교 후 true일 때
      comparePassword().then((result) => {
        if (result) navigate("/money-split/split-loading");
        else {
          // 틀림 효과 (1초 동안 빨간색으로 변함 + 흔들림)
          setIsWrong(() => true);
          setTimeout(() => {
            setIsWrong(false);
            setPin(Array(6).fill("")); // PIN 초기화
          }, 700);
        }
      });
    }
  }, [pin]);

  return (
    <Fade>
      <div>
        <MoveBack pageBefore="/money-split/authentication" />
        <div className="center_wrapper">
          <div>
            <div className="black_title center_text">
              자동이체 등록을 위해 <br />
              PIN 번호를 입력해주세요.
            </div>
            <div className="center_wrapper" style={{ margin: "30px 0" }}>
              <div className={`pin-input-container ${isWrong ? "shake" : ""}`}>
                {pin.map((num, index) => (
                  <input
                    key={index}
                    type="password"
                    value={num}
                    className={`${isWrong ? "wrong" : "pin-input"}`}
                    required
                  />
                ))}
              </div>
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
              <div onClick={handleDelete}></div>
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
    </Fade>
  );
};

export default InputPin;
