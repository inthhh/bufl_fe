import React, { useEffect, useState } from "react";
import "./firstStyle.css";
import BellImg from "./img/Frame 20.png";
import BankIcon1 from "./img/toss.png";
import BankIcon2 from "./img/shinhan.png";
import BankIcon3 from "./img/hana.png";
import BankIcon4 from "./img/kb.png";
import Bufl from "./img/BUFL.png";
import DoughnutChart from "./DoughnutChart.js";
import Account from "./account";
import Bottom from "../bottom/bottom";
import { AccountsInterface } from "../../MoneySplit/pages/interfaces";

const First: React.FC = () => {
  const [accounts, setAccounts] = useState<AccountsInterface[]>([]);
  const [viewMore, setViewMore] = useState<boolean>(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/accounts", {
      method: "GET", // 기본값이지만 명시적으로 써도 됨
      credentials: "include", // 쿠키 및 인증 정보 포함
    })
      .then((response) => response.json())
      .then((data) => {
        setAccounts(data.accounts);
        console.log(data.accounts);
      })
      .catch((error) => console.error("SelectAccountAccounts error:", error));
  }, []);

  return (
    <div style={{ height: "730px", backgroundColor: "#F3F3F3" }}>
      <img className="bufl" src={Bufl} alt="bufl" />
      <img className="bell" src={BellImg} alt="Bell" />
      <div style={{ height: "690px", overflowY: "scroll", overflowX: "hidden", marginTop: "15px" }}>
        <div className="bank-icon">
          <div className="bank-icon1">
            <img
              className="main_icons"
              src={accounts.length > 0 ? require(`../../SignOn/images/${accounts[0]?.logo}`) : BankIcon1}
              alt="icon"
            />
            <div className="money">{accounts[0]?.balance ? Number(accounts[0]?.balance).toLocaleString() : 0}원</div>
          </div>
          <div className="bank-icon2">
            <img
              className="main_icons"
              src={accounts.length > 0 ? require(`../../SignOn/images/${accounts[1]?.logo}`) : BankIcon1}
              alt="icon"
            />
            <div className="money">{accounts[1]?.balance ? Number(accounts[1]?.balance).toLocaleString() : 0}원</div>
          </div>
          <div className="bank-icon3">
            <img
              className="main_icons"
              src={accounts.length > 0 ? require(`../../SignOn/images/${accounts[2]?.logo}`) : BankIcon1}
              alt="icon"
            />
            <div className="money">{accounts[2]?.balance ? Number(accounts[2]?.balance).toLocaleString() : 0}원</div>
          </div>
          <div className="bank-icon4">
            <img
              className="main_icons"
              src={accounts.length > 0 ? require(`../../SignOn/images/${accounts[3]?.logo}`) : BankIcon1}
              alt="icon"
            />
            <div className="money">{accounts[3]?.balance ? Number(accounts[3]?.balance).toLocaleString() : 0}원</div>
          </div>
          {viewMore ? (
            <>
              <div className="bank-icon5">
                <img
                  className="main_icons"
                  src={accounts.length > 0 ? require(`../../SignOn/images/${accounts[4]?.logo}`) : BankIcon1}
                  alt="icon"
                />
                <div className="money">
                  {accounts[4]?.balance ? Number(accounts[4]?.balance).toLocaleString() : 0}원
                </div>
              </div>
            </>
          ) : undefined}
          <div className="more" onClick={() => setViewMore(!viewMore)}>
            {viewMore ? <>접기 ▲</> : <>더 보기 ▼</>}
          </div>
        </div>
        <div className="month_">
          <div className="month1_">2월 총 지출</div>
          <div className="month2_">326,510 원</div>
        </div>
        <div className="asset-box">
          <div className="donut">
            <DoughnutChart />
          </div>
          <div className="asset">자산</div>
          <div className="asset1">비상금</div>
          <div className="asset2">예비비</div>
          <div className="asset3">생활비</div>
          <div className="asset4">저축</div>
          <div className="asset5">내 월급 :</div>
          <div className="asset6">당신은 " "입니다.</div>
        </div>

        <Account />
      </div>
      <Bottom page="home" />
    </div>
  );
};
export default First;
