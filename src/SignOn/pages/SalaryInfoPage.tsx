import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../style/style.css";
import MoneyImg from "../images/money.png";
import DateImg from "../images/date.png";
import AccountImg from "../images/account.png";
import "../../MoneySplit/style/splitStyle.css";
import MoveBack from "../../MoneySplit/MoveBack";
import { accountList } from "./data";

function SalaryInfoPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [salary, setSalary] = useState(2500000);
  const [payday, setPayday] = useState("20일");
  const [selectedAccount, setSelectedAccount] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const formatSalary = (value: number) => value.toLocaleString();

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    const rawValue = input.value.replace(/\D/g, "");
    const newValue = rawValue ? Number(rawValue) : 0;

    const prevFormatted = formatSalary(salary);
    const prevCommaCount = (prevFormatted.match(/,/g) || []).length;
    const cursorPosition = input.selectionStart || 0;

    setSalary(newValue);

    setTimeout(() => {
      if (inputRef.current) {
        const newFormatted = formatSalary(newValue);
        const newCommaCount = (newFormatted.match(/,/g) || []).length;
        let newCursorPosition = cursorPosition + (newCommaCount - prevCommaCount);
        newCursorPosition = Math.max(0, Math.min(newFormatted.length, newCursorPosition));

        inputRef.current.setSelectionRange(newCursorPosition, newCursorPosition);
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

  const paydayOptions = Array.from({ length: 31 }, (_, i) => `${i + 1}일`).concat("말일");

  return (
    <div className="container">
      <MoveBack pageBefore="/sign/agreement" />
      <h3 className="salary_text1">
        월급 자동 분배를 위해
        <br /> 정보가 필요해요.
      </h3>

      {step === 1 ? (
        //---------------------월급여---------------------------------
        <div>
          <div className="salary_flex">
            <img src={MoneyImg} alt="money" width="45px" height="45px" />
            <div className="salary_text_group">
              <p className="salary_text2">월 실수령</p>
              <p className="salary_text3">실수령 월급을 입력해주세요.</p>
            </div>
          </div>

          <div className="salary_input_container">
            <button className="salary_button" onClick={() => adjustSalary(500000)}>
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
            <button className="salary_button" onClick={() => adjustSalary(-500000)}>
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
        //----------------------------월급일-----------------------
        <div>
          <div className="salary_flex">
            <img src={DateImg} alt="date" width="45px" />
            <p className="salary_text2 salary2__title--move">월급일</p>
          </div>

          <div className="payday__container">
            <div className="payday__select-wrapper" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <span className="payday__select-text">{payday}</span>
              <div className="payday__select--icon">▼</div>
            </div>

            {isDropdownOpen && (
              <div className="payday__dropdown">
                {paydayOptions.map((day) => (
                  <div
                    key={day}
                    className="payday__dropdown-item"
                    onClick={() => {
                      setPayday(day);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {day}
                  </div>
                ))}
              </div>
            )}

            <p className="payday__description">매달 {payday} 새벽에 월급 쪼개기를 진행할게요.</p>
          </div>

          <div className="center_wrap">
            <button className="btn_start" onClick={() => setStep(3)}>
              다음
            </button>
          </div>
        </div>
      ) : (
        //------------------------월급계좌--------------------------------
        <div>
          <div className="salary_flex">
            <img src={AccountImg} alt="account" width="45px" />
            <p className="salary_text2 salary2__title--move">월급계좌</p>
          </div>

          <div className="account-list">
            <p className="account-title">내 계좌</p>
            {accountList.map((account) => (
              <div
                key={account.id}
                className={`account-item ${selectedAccount === account.id ? "selected" : ""}`}
                onClick={() => setSelectedAccount(account.id)}
              >
                <img src={require(`../images/${account.logo}`)} alt={account.name} />
                <span>
                  {account.name} {account.account}
                </span>
              </div>
            ))}
          </div>

          <div className="center_wrap">
            <button
              className={`btn_start ${selectedAccount === null ? "disabled" : ""}`}
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
