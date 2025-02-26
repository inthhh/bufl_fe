import React from "react";
import "./splitStyle.css";
import { useNavigate } from "react-router-dom";
import RobotImg from "./robot.png";

interface AccountProps {
  category: string;
  account?: string;
  ratio: number;
  amount: number;
}

const Account: React.FC<AccountProps> = (props) => {
  return (
    <div className="account_list">
      <div>{props.category}</div>
      <div>{props.account ? props.account : "계좌 연결하기"}</div>
      <div>{props.ratio}%</div>
      <div>{props.amount}원</div>
    </div>
  );
};

function SelectAccount() {
  const [isFinish, setIsFinish] = React.useState(true);
  const navigate = useNavigate();
  const clickForYes = () => {
    navigate("/MoneySplit/Authentication");
  };
  return (
    <div className="center_wrap">
      <div>
        <div>카테고리별 계좌를 선택해주세요.</div>
        <div>
          <Account category="💰 월급 통장" ratio={20} amount={600000} />
          <Account category="💰 월급 통장" ratio={20} amount={600000} />
        </div>
        <button
          className={isFinish ? "blue_big_btn" : "gray_big_btn"}
          type="button"
          onClick={isFinish ? () => clickForYes() : undefined}
        >
          완료했어요.
        </button>
      </div>
    </div>
  );
}

export default SelectAccount;
