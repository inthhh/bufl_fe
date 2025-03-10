import React, { useState } from "react";
import "./choiceStyle.css";
import { useNavigate } from "react-router-dom";
import MoveBack from "../../MoneySplit/MoveBack";

const Choice: React.FC = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState<string>("");
        // 사용자가 입력한 저축 금액 저장                     기본 값
  const nexthandle = () => {
    navigate("/Main/rocket");
  };
   //  숫자버튼이나 뒤로 가는 버튼 클릭 시 실행 + 백스페이스 버튼 클릭은 입력 값 중 마지막 값 삭제
  const handleKeyPress = (key: string) => {
    if (key === 'backspace') {
      setInputValue(prev => prev.slice(0, -1));
    } else {
      // 기존 inputvalue에 새로운 숫자 추가 
      const newValue = inputValue + key;
      const numericValue = parseInt(newValue.replace(/,/g, ''));
      // 콤마 제거 후 숫자 전환  (3,000,000원 이하일 시 입력 허용)
      if (numericValue <= 3000000) {
        setInputValue(newValue);
        
        // input 요소의 값도 업데이트
        const inputElement = document.getElementById('userInput') as HTMLInputElement;
        if (inputElement) {
                                            // 천 단위 콤마 추가
          inputElement.value = numericValue.toLocaleString();
        }
      }
    }
  };
{/* readOnly 사용자가 직접 입력 불가능(버튼으로만) */}
  return ( 
    <div>
      <MoveBack pageBefore="/Main/choose" />
      <div>
        <input
          className="money-pig"
          type="text"
          id="userInput"
          placeholder="매달 얼마씩 저금할까요?"
          value={inputValue}
          readOnly  
        />
        <div className="money-pig1">매달 최대 3,000,000원 가능</div>
      </div>

      {/* 숫자 키패드 */}
      <div className="numpad-container">
        <div className="numpad-grid">  {/* map()을 통해 숫자 버튼 자동 생성 */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              className="numpad-button"
              onClick={() => handleKeyPress(num.toString())}
            >                {/* 버튼 클릭 시 실행 */}
              {num}
            </button>
          ))}  {/* 추가 키패드 버튼 */}
          <div className="empty-cell"></div>
          <button
            className="numpad-button"
            onClick={() => handleKeyPress('0')}
          >
            0
          </button>
          <button
            className="numpad-button"
            onClick={() => handleKeyPress('backspace')}
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