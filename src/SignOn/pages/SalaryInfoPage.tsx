import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../style/style.css";
import MoneyImg from "../images/money.png";
import DateImg from "../images/date.png";
import AccountImg from "../images/account.png";
import "../../MoneySplit/splitStyle.css";
import MoveBack from "../../MoneySplit/MoveBack";
import { accountList } from "./data";

function SalaryInfoPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [salary, setSalary] = useState(2500000);
  const [payday, setPayday] = useState("20일");
  const [selectedAccount, setSelectedAccount] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const formatSalary = (value: number) => value.toLocaleString();

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const rawValue = input.value.replace(/\D/g, ""); // 숫자만 남기기
    const newValue = rawValue ? Number(rawValue) : 0;

    // 기존 입력 값 저장
    const prevFormatted = formatSalary(salary);
    const prevCommaCount = (prevFormatted.match(/,/g) || []).length;

    // 전체 선택 후 입력 여부 감지
    const isFullReplace =
      input.selectionStart === 0 && input.selectionEnd === prevFormatted.length;

    // 기존 커서 위치 저장
    const cursorPosition = input.selectionStart || 0;

    // 상태 업데이트
    setSalary(newValue);

    setTimeout(() => {
      if (inputRef.current) {
        const newFormatted = formatSalary(newValue);
        const newCommaCount = (newFormatted.match(/,/g) || []).length;

        let newCursorPosition;

        if (isFullReplace) {
          // 전체 선택 후 입력한 경우: 커서를 맨 끝으로 이동
          newCursorPosition = newFormatted.length;
        } else {
          // 일반 입력인 경우 쉼표 변화량에 따라 커서 보정
          newCursorPosition = cursorPosition + (newCommaCount - prevCommaCount);
        }

        // 커서 위치가 올바른 범위 내에 있도록 조정
        newCursorPosition = Math.max(
          0,
          Math.min(newFormatted.length, newCursorPosition)
        );

        inputRef.current.setSelectionRange(
          newCursorPosition,
          newCursorPosition
        );
      }
    }, 0);
  };

  const handleBlur = () => {
    if (!salary) {
      setSalary(2500000);
    }
  };

  const adjustSalary = (amount: number) => {
    setSalary((prevSalary) => Math.max(0, prevSalary + amount));
  };

  const paydayOptions = Array.from(
    { length: 31 },
    (_, i) => `${i + 1}일`
  ).concat("말일");

  return (
    <div className="container">
      <MoveBack pageBefore="/sign/agreement" />
      <h3 className="salary_text1">
        월급 자동 분배를 위해
        <br /> 정보가 필요해요.
      </h3>

      {step === 1 ? (
        <div>
          <div className="salary_flex">
            <img src={MoneyImg} alt="money" width="45px" height="45px" />
            <div className="salary_text_group">
              <p className="salary_text2">월 실수령</p>
              <p className="salary_text3">실수령 월급을 입력해주세요.</p>
            </div>
          </div>

          <div className="salary_input_container">
            <button
              className="salary_button"
              onClick={() => adjustSalary(500000)}
            >
              +
            </button>
            <input
              ref={inputRef}
              type="text"
              value={formatSalary(salary)}
              onChange={handleSalaryChange}
              onBlur={handleBlur}
              className="salary_input"
            />
            <button
              className="salary_button"
              onClick={() => adjustSalary(-500000)}
            >
              -
            </button>
            <span className="currency">원</span>
          </div>

          <div className="center_wrap">
            <button className="btn_start" onClick={() => setStep(2)}>
              다음
            </button>
          </div>
        </div>
      ) : step === 2 ? (
        <div>
          <img src={DateImg} alt="date" width="45px" />
          <p>월급일</p>

          <span>매달</span>
          <select value={payday} onChange={(e) => setPayday(e.target.value)}>
            {paydayOptions.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>

          <p>{payday} 새벽에 월급 쪼개기를 진행할게요.</p>
          <div className="center_wrap">
            <button className="btn_start" onClick={() => setStep(3)}>
              다음
            </button>
          </div>
        </div>
      ) : (
        <div>
          <img src={AccountImg} alt="account" width="45px" />
          <p>내 계좌</p>
          <div className="account-list">
            {accountList.map((account) => (
              <div
                key={account.id}
                className={`account-item ${
                  selectedAccount === account.id ? "selected" : ""
                }`}
                onClick={() => setSelectedAccount(account.id)}
              >
                <img
                  src={require(`../images/${account.logo}`)}
                  alt={account.name}
                  width="20px"
                />
                <span>
                  {account.name} {account.account}
                </span>
              </div>
            ))}
          </div>
          <div className="center_wrap">
            <button
              className="btn_start"
              onClick={() => navigate("/sign/input-pin")}
              disabled={selectedAccount === null}
            >
              다음
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SalaryInfoPage;
