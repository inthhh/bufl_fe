import React, { useState, useEffect } from "react";
import styles from "./AccountTree.module.css";

const AccountTree: React.FC = () => {
  const [name, setName] = useState<string[]>([]);
  const [bankName, setBankName] = useState<number[]>([]);
  const [accNum, setAccNum] = useState<string[]>([]);
  const [amount, setAmount] = useState<number[]>([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/salary/account`, {
      method: "GET", // 기본값이지만 명시적으로 써도 됨
      credentials: "include", // 쿠키 및 인증 정보 포함
    })
      .then((response) => response.json())
      .then((data) => {
        const names = data.map((c: any) => c.name);
        const banknames = data.map((c: any) => c.bankName);
        const accnums = data.map((c: any) => c.accountNumber);
        setName(names);
        setBankName(banknames);
        setAccNum(accnums);
        console.log("***", names, banknames, accnums);
        setIsDataLoaded(true);
      })
      .catch((error) => console.error("tree error:", error));
  }, []);

  useEffect(() => {
    // 카테고리 정보 api
    fetch(`http://localhost:5000/api/salary/category`, {
      method: "GET", // 기본값이지만 명시적으로 써도 됨
      credentials: "include", // 쿠키 및 인증 정보 포함
    })
      .then((response) => response.json())
      .then((data) => {
        const amounts = data.categories.map((c: any) => Number(c.amount));
        setAmount(amounts);
        // console.log(amounts);
      })
      .catch((error) => console.error("tree error:", error));
  }, []);

  useEffect(() => {
    if (!isDataLoaded) return; // 데이터가 로드되지 않았으면 실행 안 함

    fetch(`http://localhost:5000/api/users/salary`, {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setBankName((prev) => prev.map((n, index) => (index === 0 ? data.salaryAccount.bank_name : n)));
        setAccNum((prev) => prev.map((a, index) => (index === 0 ? data.salaryAccount.account_number : a)));
        setAmount((prev) => prev.map((a, index) => (index === 0 ? Number(data.amount) : a)));
      })
      .catch((error) => console.error("tree error:", error));
  }, [isDataLoaded]); // isDataLoaded가 true일 때 실행됨

  useEffect(() => {
    console.log(amount);
  }, [amount]);

  if (amount.length === 0) return <p>Loading...</p>;

  return (
    <div className={styles.accountContainer}>
      <h2 className={styles.accountTitle}>계좌</h2>
      <div className={styles.accountTree}>
        {/* 최상위 계좌 */}
        <div className={`${styles.accountNode} ${styles.topNode}`}>
          <span className={styles.accountIcon} />
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
          {name.slice(1).map((n, index) => (
            <div>
              {n}
              <div className={`${styles.accountNode} ${getColorClass(index)}`}>
                <span className={styles.accountIcon} />
                <div>
                  <p className={styles.accountInfo}>
                    {bankName[index]} {accNum[index]}
                  </p>
                  <p className={styles.accountBalance}>{amount[index]?.toLocaleString()}원</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getColorClass = (index: number) => {
  const colors = ["greenNode", "cyanNode", "blueNode", "orangeNode", "redNode"];
  return styles[colors[index % colors.length]];
};

export default AccountTree;
