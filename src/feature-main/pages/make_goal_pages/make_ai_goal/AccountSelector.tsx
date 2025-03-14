import React, { useState, useEffect } from "react";
import "../../../style/AddGoal.css";
import { useNavigate } from "react-router-dom";
import MoveBack from "../../../../shared/MoveBack";
import Fade from "../../../../shared/Fade";

const AccountSelector1: React.FC = () => {
  const navigate = useNavigate();

  // 계좌 목록 상태
  const [accounts, setAccounts] = useState<any[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<string>("");

  // 서버에서 계좌 목록 가져오기
  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/accounts", {
          method: "GET",
          credentials: "include", // 쿠키를 포함하여 요청
        });
        if (!response.ok) {
          throw new Error("계좌 목록을 가져오는 데 실패했습니다.");
        }
        const data = await response.json();
        setAccounts(data.accounts); // 받은 데이터로 상태 업데이트
      } catch (error) {
        console.error(error);
      }
    };

    fetchAccounts(); // 컴포넌트가 마운트될 때 호출
  }, []);

  // 완료 버튼 클릭 시 실행
  const handleConfirm = () => {
    if (selectedAccount) {
      navigate("/main/list");
    } else {
      alert("계좌를 선택해주세요!");
    }
  };

  return (
    <Fade>
      <div>
        <MoveBack pageBefore="/main/pig" />
        <div className="bankbook">
          저축을 위해 매달 돈을 가져올
          <br />
          통장을 선택해주세요.
        </div>

        {/* 라디오 버튼을 활용한 계좌 선택 UI */}
        <div className="checkbox-container">
          {accounts.map((account) => (
            <label key={account.account_id} className="checkbox">
              <input
                className="input-type"
                type="radio"
                name="account"
                value={account.account_id}
                checked={selectedAccount === account.account_id.toString()}
                onChange={() =>
                  setSelectedAccount(account.account_id.toString())
                }
              />
              {account.bank_name} {account.account_number}
              <span className="checkmark"></span>
            </label>
          ))}
        </div>

        {/* 완료 버튼 */}
        <button className="okay-btn" onClick={handleConfirm}>
          완료했어요.
        </button>
      </div>
    </Fade>
  );
};

export default AccountSelector1;
