import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MoveBack from "../../MoneySplit/MoveBack";
import "./choiceStyle.css";

const Choice: React.FC = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");
  const placeholder = "매달 얼마씩 저금할까요?";
  const location = useLocation();

  // location.state에서 `account_id`받기
  const account_id = location.state?.account_id;

  // 숫자 버튼 클릭 시 실행되는 함수 + 백스페이스 처리
  const handleKeyPress = (key: string) => {
    if (key === "backspace") {
      setInputValue((prev) => prev.slice(0, -1));
    } else {
      const newValue = inputValue + key;
      const numericValue = parseInt(newValue.replace(/,/g, "")); // 콤마 제거 후 숫자 전환
      // 3,000,000원 이하일 시 입력 허용
      if (numericValue <= 3000000) {
        setInputValue(newValue);

        // input 요소의 값도 업데이트하여 천 단위 콤마 추가
        const inputElement = document.getElementById(
          "userInput"
        ) as HTMLInputElement;
        if (inputElement) {
          inputElement.value = (numericValue / 10000).toLocaleString() + "만원"; // 천 단위 콤마 추가하고 '만원' 단위로 표시
        }
      }
    }
  };

  // 사용자가 입력한 저축 금액을 저장하고, 선택한 금액을 choose 페이지로 전달
  const nexthandle = () => {
    if (!account_id) {
      alert("계좌를 선택해주세요!");
      return;
    }
    const amount = inputValue.replace(/,/g, "").replace("만원", ""); // 콤마와 '만원' 제거
    navigate("/Main/choose", {
      state: { account_id: account_id, saving_amount: amount }, // account_id와 saving_amount를 함께 전달
    });
  };

  return (
    <div>
      <MoveBack pageBefore="/Main/choose" />
      <div>
        <input
          className="money-pig"
          type="text"
          id="userInput"
          placeholder={inputValue === "" ? placeholder : ""}
          value={inputValue ? `${inputValue} 만원` : ""}
          readOnly
        />
        <div className="money-pig1">매달 최대 3,000,000원 가능</div>
      </div>

      {/* 숫자 키패드 */}
      <div className="numpad-container">
        <div className="numpad-grid">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              className="numpad-button"
              onClick={() => handleKeyPress(num.toString())}
            >
              {num}
            </button>
          ))}
          <div className="empty-cell"></div>
          <button className="numpad-button" onClick={() => handleKeyPress("0")}>
            0
          </button>
          <button
            className="numpad-button"
            onClick={() => handleKeyPress("backspace")}
          >
            ←
          </button>
        </div>
      </div>

      <button className="next-btn1" onClick={nexthandle}>
        확인
      </button>
    </div>
  );
};

export default Choice;
