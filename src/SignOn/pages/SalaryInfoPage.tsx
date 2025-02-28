import { useState } from "react";
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

  const formatSalary = (value: number) => value.toLocaleString();

  const handleSalaryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    setSalary(Number(rawValue) || 0);
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
          {/* 월급 입력 UI */}
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
              onClick={() => adjustSalary(-500000)}
            >
              -
            </button>
            <input
              type="text"
              value={formatSalary(salary)}
              onChange={handleSalaryChange}
              className="salary_input"
              readOnly
            />
            <button
              className="salary_button"
              onClick={() => adjustSalary(500000)}
            >
              +
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

          <button onClick={() => setStep(3)}>다음</button>
        </div>
      ) : (
        <div>
          <img src={AccountImg} alt="account" width="45px" />
          <p>내 계좌</p>

          {/* 계좌 목록 표시 */}
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

          <button
            onClick={() => navigate("/sign/input-pin")}
            disabled={selectedAccount === null}
          >
            다음
          </button>
        </div>
      )}
    </div>
  );
}

export default SalaryInfoPage;
