import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MoveBack from "../../MoneySplit/MoveBack";
import "../../MoneySplit/style/splitStyle.css";

interface Account {
  bankName: string;
  accountNumber: string;
}

const SalaryInfoPage: React.FC = () => {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

  useEffect(() => {
    // 계좌 정보 불러오기
    const fetchAccounts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users/accounts");
        setAccounts(response.data);
      } catch (error) {
        console.error("계좌 정보 불러오기 오류:", error);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <div className="container">
      <MoveBack pageBefore="/sign/agreement" />
      <h3 className="salary_text1">월급 자동 분배를 위해 정보가 필요해요.</h3>

      <div className="salary_flex">
        <p className="salary_text2">월급계좌</p>
      </div>

      <div className="account-list">
        <p className="account-title">내 계좌</p>
        {accounts.length > 0 ? (
          accounts.map((account, index) => (
            <div
              key={index}
              className={`account-item ${selectedAccount === account.accountNumber ? "selected" : ""}`}
              onClick={() => setSelectedAccount(account.accountNumber)}
            >
              <span>{account.bankName} {account.accountNumber}</span>
            </div>
          ))
        ) : (
          <p className="no-accounts">등록된 계좌가 없습니다.</p>
        )}
      </div>

      <div className="center_wrap">
        <button
          className={`btn_start ${!selectedAccount ? "disabled" : ""}`}
          onClick={() => navigate("/sign/input-pin")}
          disabled={!selectedAccount}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default SalaryInfoPage;
