import React, { useEffect, useState } from "react";
import "../splitStyle.css"; // CSS 파일 import
import { useNavigate } from "react-router-dom";
import MoveBack from "../MoveBack";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAccount } from "../../redux/actions/accountAction";
import { RootState } from "../../redux/store";

const SelectAccountAccounts: React.FC = () => {
  const allAccountList = ["토스뱅크 123", "토스뱅크 456", "토스뱅크 789", "토스뱅크 000"];
  const [accountId, setAccountId] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedAccount = useSelector((state: RootState) => state.account.selectedAccount);
  // 카테고리 id를 보내면 name, amount 리턴

  const clickForYes = () => {
    dispatch(setSelectedAccount(accountId));
    navigate("/money-split/select-account/detail");
  };

  useEffect(() => {
    dispatch(setSelectedAccount(accountId));
    console.log(selectedAccount);
  }, [accountId, dispatch]);

  return (
    <div>
      <MoveBack pageBefore="/money-split/select-account/detail" />
      <div className="center_wrap">
        <div>
          <div>“생활비” 목적으로 사용할 통장을 선택해주세요.</div>
          <div>
            <ul className="analysis_list">
              {allAccountList.map((accountName, index) => (
                <li>
                  <input
                    type="radio"
                    id={`account-${index}`}
                    name="account"
                    onClick={() => setAccountId(index)}
                    checked={index === accountId}
                  />{" "}
                  <label htmlFor={`account-${index}`}>{accountName}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className="center_wrap">
            <div className="center_wrap btn">
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
