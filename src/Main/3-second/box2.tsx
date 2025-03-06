import React, { useState } from "react";
import "./secondStyle.css";
import { useNavigate } from "react-router-dom";

const accountNumbers = [
  "토스뱅크 1000-1210-XXXX",
  "XX뱅크 1000-1210-XXXX",
  "OO뱅크 1000-1210-XXXX",
  "KK뱅크 1000-1210-XXXX",
  "AA뱅크 1000-1210-XXXX",
  "토스뱅크 1000-1210-XXXX",
  "토스뱅크 1000-1210-XXXX",
  "토스뱅크 1000-1210-XXXX",
];

const Box2: React.FC = () => {
  const navigate = useNavigate();
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

  const handlebox4 = () => {
    if (selectedAccount) {
      navigate("/Main/choose");
    } else {
      alert("계좌를 선택해주세요!");
    }
  };

  return (
    <div>
      <div className="bankbook">
        "저축" 목적으로 사용할
        <br />
        통장을 선택해주세요.
      </div>
      <div className="checkbox-container">
        {accountNumbers.map((account) => (
          <label key={account} className="checkbox">
            <input
              type="radio"
              name="account"
              value={account}
              checked={selectedAccount === account}
              onChange={() => setSelectedAccount(account)}
            />
            <span className="checkmark"></span>
          </label>
        ))}
      </div>
      <button className="okay-btn" onClick={handlebox4}>
        완료했어요.
      </button>
    </div>
  );
};

export default Box2;
