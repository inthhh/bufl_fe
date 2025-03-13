import React, { useEffect, useState } from "react";
import "./firstStyle.css";
import BellImg from "./img/bell.png";
import BankIcon1 from "./img/toss.png";
import Bufl from "./img/BUFL.png";
import DoughnutChart from "./DoughnutChart.js";
import Account from "./account";
import Bottom from "../bottom_nav/bottom";
import { AccountsInterface } from "../../MoneySplit/utils/interfaces";
import { useLocation, useNavigate } from "react-router-dom";
import AccountTree from "./AccountTree";
import LoadingSpinner from "../../MoneySplit/utils/loadingSpinner";

const First: React.FC = () => {
  const [accounts, setAccounts] = useState<AccountsInterface[]>([]);
  const [viewMore, setViewMore] = useState<boolean>(false);
  const location = useLocation();
  const isFromCompletion = location.state?.from === "first-time";
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true); // ✅ 로딩 상태 추가
  const [total, setTotal] = useState<number>(12345);
  const [name, setName] = useState<string[]>([]);
  const [ratio, setRatio] = useState<number[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true); // ✅ API 호출 전 로딩 시작
    setErrorMessage(null); // ✅ 기존 에러 초기화

    const fetchAccounts = fetch("https://buflbe.vercel.app/api/accounts", {
      method: "GET",
      credentials: "include",
    }).then((res) => res.json());

    const fetchCategory = fetch("https://buflbe.vercel.app/api/salary/category", {
      method: "GET",
      credentials: "include",
    }).then((res) => res.json());

    const fetchSalary = fetch("https://buflbe.vercel.app/api/users/salary", {
      method: "GET",
      credentials: "include",
    }).then((res) => res.json());

    const apiCalls = isFromCompletion
      ? [fetchAccounts] // ✅ `isFromCompletion === true`이면 accounts API만 호출
      : [fetchAccounts, fetchCategory, fetchSalary]; // ✅ `false`일 때 3개 모두 호출

    Promise.all(apiCalls)
      .then(([accountsData, categoryData, salaryData]) => {
        setAccounts(accountsData.accounts);
        if (!isFromCompletion) {
          setName(categoryData.categories.map((c: any) => c.name));
          setRatio(categoryData.categories.map((c: any) => Number(c.ratio)));
          setColor(categoryData.categories.map((c: any) => c.background_color));
          setTotal(Number(salaryData.amount));
        }
      })
      .catch((error) => {
        console.error("Error loading data:", error);
        setAccounts([]); // ✅ 오류 발생 시 안전한 기본값 설정
        setErrorMessage("/sign으로 접속하여 회원가입을 진행하세요.");
      })
      .finally(() => setIsLoading(false)); // ✅ 모든 요청 완료 후 로딩 상태 해제
  }, []);

  if (errorMessage) {
    return (
      <div style={{ textAlign: "center", fontSize: "18px", color: "red", lineHeight: "50px" }}>
        세션 없음
        <br />
        {errorMessage}
      </div>
    );
  }

  if (isLoading) return <LoadingSpinner />; // ✅ 로딩 중이면 스피너 표시

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
        {!isFromCompletion ? (
          <>
            <AccountTree />
            <Account total={total} />
          </>
        ) : undefined}
      </div>
      <Bottom page="home" isFirstTime={isFromCompletion ? true : false} />
    </div>
  );
};
export default First;
