import React, { useState, useEffect } from "react";
import styles from "./AccountTree.module.css";

const AccountTree: React.FC = () => {
  const [name, setName] = useState<string[]>([]);
  const [bankName, setBankName] = useState<number[]>([]);
  const [accNum, setAccNum] = useState<string[]>([]);
  const [amount, setAmount] = useState<number[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [logo, setLogo] = useState<string[]>([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    // 카테고리 정보 api
    fetch(`https://buflbe.vercel.app/api/salary/info`, {
      method: "GET", // 기본값이지만 명시적으로 써도 됨
      credentials: "include", // 쿠키 및 인증 정보 포함
    })
      .then((response) => response.json())
      .then((data) => {
        const names = data.map((c: any) => c.name);
        const banknames = data.map((c: any) => c.bankName);
        const accnums = data.map((c: any) => c.accountNumber);
        const amounts = data.map((c: any) => c.balance);
        const logos = data.map((c: any) => c.logo);
        console.log(names);
        setName(names);
        setBankName(banknames);
        setAccNum(accnums);
        setLogo(logos);
        setAmount(amounts);
        setIsDataLoaded(true);
      })
      .catch((error) => console.error("tree error:", error));
  }, []);

  useEffect(() => {
    if (!isDataLoaded) return; // 데이터가 로드되지 않았으면 실행 안 함

    fetch(`https://buflbe.vercel.app/api/salary/category`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setName((prev) => ["💰 월급 통장", ...prev]);
        setBankName((prev) => [data.categories[0].bank_name, ...prev]);
        setAccNum((prev) => [data.categories[0].account_number, ...prev]);
        setAmount((prev) => [Number(data.categories[0].amount), ...prev]);
        setLogo((prev) => [data.categories[0].bank_name + ".png", ...prev]);
        console.log(data.categories[0].bank_name);
        const bgcolors = data.categories.map((c: any) => c.background_color);
        setColor(bgcolors);
      })
      .catch((error) => console.error("tree error:", error));
  }, [isDataLoaded]); // isDataLoaded가 true일 때 실행됨

  useEffect(() => {
    console.log(logo);
  }, [logo]);

  return (
    <div className={styles.accountContainer}>
      <h2 className={styles.accountTitle}>계좌</h2>
      <div className={styles.accountTree}>
        {/* 최상위 계좌 */}
        <div className={`${styles.accountNode}`} style={{ backgroundColor: `${color[0]}` }}>
          <img src={logo[0] ? require(`../../SignOn/images/${logo[0]}`) : ""} alt="" width={20} />
          <div>
            <p className={styles.accountInfo}>
              {bankName[0]} {accNum[0]}
            </p>
            <p className={styles.accountBalance}>
              {amount[0] > 0 ? <>{amount[0].toLocaleString()}원</> : <>201,000원</>}
            </p>
          </div>
        </div>
        {/* 하위 계좌 */}
        <div className={styles.accountBranch}>
          {name.map((n, index) =>
            index == 0 ? undefined : (
              <div>
                {n}
                <div className={`${styles.accountNode}`} style={{ backgroundColor: `${color[index]}` }}>
                  <img
                    src={
                      logo[index]
                        ? require(`../../SignOn/images/${logo[index]}`)
                        : require("../../SignOn/images/토스뱅크.png")
                    }
                    alt="logo"
                    width={20}
                  />
                  <div>
                    <p className={styles.accountInfo}>
                      {bankName[index]} {accNum[index]}
                    </p>
                    <p className={styles.accountBalance}>{amount[index]?.toLocaleString()}원</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountTree;
