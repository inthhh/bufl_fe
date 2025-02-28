import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/style.css";
import MoneyImg from "../images/money.png";
import DateImg from "../images/date.png";
import AccountImg from "../images/account.png";
import "../../MoneySplit/splitStyle.css";
import MoveBack from "../../MoneySplit/MoveBack";
import { accountList } from "./data"; // 계좌 데이터 가져오기

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
    <div>
      <MoveBack pageBefore="/sign/agreement" />
      {step === 1 ? (
        <div>
          <h3>
            월급 자동 분배를 위해
            <br /> 정보가 필요해요.
          </h3>
          <img src={MoneyImg} alt="money" width="45px" />
          <p>월 실수령</p>
          <p>실수령 월급을 입력해주세요.</p>

          <div>
            <button onClick={() => adjustSalary(-500000)}>-</button>
            <input
              type="text"
              value={formatSalary(salary)}
              onChange={handleSalaryChange}
            />
            <button onClick={() => adjustSalary(500000)}>+</button>
            <span>원</span>
          </div>

          <button onClick={() => setStep(2)}>다음</button>
        </div>
      ) : step === 2 ? (
        <div>
          <h3>
            월급 자동 분배를 위해
            <br /> 정보가 필요해요.
          </h3>
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
          <h3>
            월급 자동 분배를 위해
            <br /> 계좌 정보를 선택해주세요.
          </h3>
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
                  {account.name}
                  {account.account}
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
