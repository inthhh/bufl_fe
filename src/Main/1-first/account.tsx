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
        <div className="account4">
          <img className="toss1" src={toss} alt="toss" />
          <div className="account-t">
            토스뱅크 0000-00000
            <br />
            3,000,000원
          </div>
        </div>
        <div className="account5">
          <img className="toss1" src={toss} alt="toss" />
          <div className="account-t">
            토스뱅크 0000-00000
            <br />
            3,000,000원
          </div>
        </div>
        <div className="account6">
          <img className="toss1" src={toss} alt="toss" />
          <div className="account-t">
            토스뱅크 0000-00000
            <br />
            3,000,000원
          </div>
        </div>
        <div className="account7">
          <img className="toss1" src={toss} alt="toss" />
          <div className="account-t">
            토스뱅크 0000-00000
            <br />
            3,000,000원
          </div>
        </div>
        <div className="account8">
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
        <div className="budget3">저축비</div>
        <div className="budget4">예비비</div>
        <div className="budget5">비상금</div>
        <div className="budget6">매달</div>
        <div className="budget7">매달</div>
        <div className="budget8">매달</div>
        <div className="budget9">매달</div>
        <div className="budget10">00000원</div>
        <div className="budget11">00000원</div>
        <div className="budget12">00000원</div>
        <div className="budget13">00000원</div>
        <div className="line"></div>
        <div className="budget14">45%</div>
        <div className="budget15">45%</div>
        <div className="budget16">45%</div>
        <div className="budget17">45%</div>
      </div>
    </div>
  );
};

export default Account;
