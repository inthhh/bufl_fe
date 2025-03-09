import React from "react";
import "./accountStyle.css";
import line1 from "./img/lines.png";
import toss from "./img/toss.png";
import Bottom from "../bottom/bottom";

const Account: React.FC = () => {
  return (
    <div>
      <div className="account">
        <div className="account1">계좌</div>
        <div className="account2">+</div>
        <img className="line1" src={line1} alt="line1" />
        <div className="account3">
          <img className="toss1" src={toss} alt="toss" />
          <div className="account-t">
            토스뱅크 0000-00000
            <br />
            3,000,000원
          </div>
        </div>
      </div>
      <div className="budget">
        <div className="budget1">항목별 예산</div>
        <div className="budget2">생활비</div>
      </div>
    </div>
  );
};

export default Account;
