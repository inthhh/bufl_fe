import React, { useEffect, useState } from "react";
import "./firstStyle.css";
import BellImg from "./img/Frame 20.png";
import BankIcon1 from "./img/toss.png";
import Bufl from "./img/BUFL.png";
import DoughnutChart from "./DoughnutChart.js";
import Account from "./account";
import Bottom from "../bottom_nav/bottom";
import { AccountsInterface } from "../../MoneySplit/pages/interfaces";
import { useLocation, useNavigate } from "react-router-dom";
import AccountTree from "./AccountTree";

const First: React.FC = () => {
  const [accounts, setAccounts] = useState<AccountsInterface[]>([]);
  const [viewMore, setViewMore] = useState<boolean>(false);
  const location = useLocation();
  const isFromCompletion = location.state?.from === "first-time";
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/accounts", {
      method: "GET", // 기본값이지만 명시적으로 써도 됨
      credentials: "include", // 쿠키 및 인증 정보 포함
    })
      .then((response) => response.json())
      .then((data) => {
        setAccounts(data.accounts);
        // console.log(data.accounts);
      })
      .catch((error) => console.error("SelectAccountAccounts error:", error));
  }, []);

  const [name, setName] = useState<string[]>([]);
  const [ratio, setRatio] = useState<number[]>([]);
  const [color, setColor] = useState<string[]>([]);

  useEffect(() => {
    // 카테고리 정보 api
    fetch(`http://localhost:5000/api/salary/category`, {
      method: "GET", // 기본값이지만 명시적으로 써도 됨
      credentials: "include", // 쿠키 및 인증 정보 포함
    })
      .then((response) => response.json())
      .then((data) => {
        const names = data.categories.map((c: any) => c.name);
        const ratios = data.categories.map((c: any) => Number(c.ratio));
        const colors = data.categories.map((c: any) => c.background_color);
        setName(names);
        setRatio(ratios);
        setColor(colors);
        // console.log("***", names, ratios);
      })
      .catch((error) => console.error("SelectAccountDetail error:", error));
  }, []);

  const [total, setTotal] = useState<number>(12345);
  useEffect(() => {
    // 월급 정보 api
    fetch("http://localhost:5000/api/users/salary", {
      method: "GET", // 기본값이지만 명시적으로 써도 됨
      credentials: "include", // 쿠키 및 인증 정보 포함
    })
      .then((response) => response.json())
      .then((data) => {
        setTotal(Number(data.amount));
      })
      .catch((error) => console.error("SelectRatio error:", error));
  }, []);

  return (
    <div style={{ height: "730px", backgroundColor: "#F3F3F3" }}>
      <img className="bufl" src={Bufl} alt="bufl" />
      <img className="bell" src={BellImg} alt="Bell" />
      <div className="main-wrap">
        <div className="bank-icon">
          <div className="bank-icon1">
            <img
              className="main_icons"
              src={accounts?.length > 0 ? require(`../../SignOn/images/${accounts[0]?.logo}`) : BankIcon1}
              alt="icon"
            />
            <div className="money">{accounts[0]?.balance ? Number(accounts[0]?.balance).toLocaleString() : 0}원</div>
          </div>
          <div className="bank-icon2">
            <img
              className="main_icons"
              src={accounts?.length > 0 ? require(`../../SignOn/images/${accounts[1]?.logo}`) : BankIcon1}
              alt="icon"
            />
            <div className="money">{accounts[1]?.balance ? Number(accounts[1]?.balance).toLocaleString() : 0}원</div>
          </div>
          <div className="bank-icon3">
            <img
              className="main_icons"
              src={accounts?.length > 0 ? require(`../../SignOn/images/${accounts[2]?.logo}`) : BankIcon1}
              alt="icon"
            />
            <div className="money">{accounts[2]?.balance ? Number(accounts[2]?.balance).toLocaleString() : 0}원</div>
          </div>
          <div className="bank-icon4">
            <img
              className="main_icons"
              src={accounts?.length > 0 ? require(`../../SignOn/images/${accounts[3]?.logo}`) : BankIcon1}
              alt="icon"
            />
            <div className="money">{accounts[3]?.balance ? Number(accounts[3]?.balance).toLocaleString() : 0}원</div>
          </div>
          {viewMore ? (
            <>
              {accounts.slice(4).map((account, index) => (
                <div key={index} className="bank-icon5">
                  <img
                    className="main_icons"
                    src={account?.logo ? require(`../../SignOn/images/${account.logo}`) : BankIcon1}
                    alt="icon"
                  />
                  <div className="money">{account?.balance ? Number(account.balance).toLocaleString() : 0}원</div>
                </div>
              ))}
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
        {isFromCompletion ? (
          <div className="start-service-box">
            <div>
              <div style={{ margin: "30px 0", textAlign: "center" }}>
                월급 쪼개기를
                <br />
                시작해볼까요?
              </div>
            </div>
            <button className="blue_big_btn" type="button" onClick={() => navigate("/money-split")}>
              바로가기
            </button>
          </div>
        ) : undefined}
        <div className="asset-box">
          <div className="donut-title">자산</div>
          <div className="donut1">
            <DoughnutChart name={name} ratio={ratio} color={color} />
          </div>

          <div className="asset5">
            내 월급 :<br /> {(total / 10000).toLocaleString()}만원
          </div>
          <div className="asset6">
            당신은 "성실형"
            <br />
            입니다.
          </div>
        </div>
        <AccountTree />
        <Account total={total} />
      </div>
      <Bottom page="home" />
    </div>
  );
};
export default First;
