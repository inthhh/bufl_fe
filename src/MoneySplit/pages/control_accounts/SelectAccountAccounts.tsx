import React, { useEffect, useState } from "react";
import "../../style/splitStyle.css"; // CSS 파일 import
import { useNavigate } from "react-router-dom";
import MoveBack from "../../MoveBack";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAccount } from "../../../redux/actions/accountAction";
import { RootState } from "../../../redux/store";

interface AccountsInterface {
  account_id: number;
  user_id: number;
  account_number: number;
  bank_name: number;
  balance: number;
}

const SelectAccountAccounts: React.FC = () => {
  // const allAccountList = ["토스뱅크 123", "토스뱅크 456", "토스뱅크 789", "토스뱅크 000"];
  const [accountId, setAccountId] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedAccount = useSelector((state: RootState) => state.account.selectedAccount);
  // 카테고리 id를 보내면 name, amount 리턴

  const clickForYes = async () => {
    console.log(accountId);
    dispatch(setSelectedAccount(accountId));
    navigate("/money-split/select-account/detail");
  };

  const [accounts, setAccounts] = useState<AccountsInterface[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/accounts")
      .then((response) => response.json())
      .then((data) => setAccounts(data.accounts))
      .catch((error) => console.error("SelectAccountAccounts error:", error));
  }, []);

  useEffect(() => {
    dispatch(setSelectedAccount(accountId));
    console.log(selectedAccount);
  }, [accountId, dispatch]);

  return (
    <div>
      <MoveBack pageBefore="/money-split/select-account/detail" />
      <div className="center_wrapper">
        <div>
          <div>“생활비” 목적으로 사용할 통장을 선택해주세요.</div>
          <div>
            <ul className="analysis_list">
              {accounts.map((account, index) => (
                <li>
                  <input
                    type="radio"
                    id={`account-${index}`}
                    name="account"
                    onClick={() => setAccountId(account.account_id)}
                    onChange={() => {}}
                  />{" "}
                  <label htmlFor={`account-${index}`}>{account.bank_name + account.account_number}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className="center_wrapper">
            <div className="center_wrapper btn">
              <button className="blue_big_btn" type="button" onClick={() => clickForYes()}>
                완료했어요.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAccountAccounts;
