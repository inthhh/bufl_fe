import React, { useState } from "react";
import "./secondStyle.css";
import { useNavigate } from "react-router-dom";
import MoveBack from "../../MoneySplit/MoveBack";

const AccountSelector1: React.FC = () => {
  const navigate = useNavigate();

  // 계좌 목록 (객체 형태로 수정)
  const accounts = [
    { bank: "토스뱅크", number: "1000-1210-XXXX" },
    { bank: "XX뱅크", number: "2000-3434-YYYY" },
    { bank: "OO뱅크", number: "3000-5656-ZZZZ" },
    { bank: "KK뱅크", number: "4000-7878-AAAA" },
    { bank: "AA뱅크", number: "5000-9090-BBBB" },
  ];

  // 선택된 계좌 상태 관리
  const [selectedAccount, setSelectedAccount] = useState<string>("");

  // 완료 버튼 클릭 시 실행
  const handleConfirm = () => {
    if (selectedAccount) {
      navigate("/main/choose");
    } else {
      alert("계좌를 선택해주세요!");
    }
  };
  // ✔
  return (
    <div>
      <MoveBack pageBefore="/add-goal" />
      <div className="bankbook">
        "저축" 목적으로 사용할
        <br />
        통장을 선택해주세요.
      </div>

      {/* 라디오 버튼을 활용한 계좌 선택 UI */}
      <div className="checkbox-container">
        {accounts.map((account) => (
          <label key={account.number} className="checkbox">
            <input
              className="input-type"
              type="radio"
              name="account"
              value={account.number}
              checked={selectedAccount === account.number}
              onChange={() => setSelectedAccount(account.number)}
            />
            {account.bank} {account.number}
            <span className="checkmark"></span>
          </label>
        ))}
      </div>

      {/* 완료 버튼 */}
      <button className="okay-btn" onClick={handleConfirm}>
        완료했어요.
      </button>
    </div>
  );
};

export default AccountSelector1;
