import React, { useState, useEffect } from "react";
import styles from "./AccountTree.module.css";

interface Account {
  id: number;
  bankName: string;
  accountNumber: string;
  balance: number;
}

const AccountTree: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    // 예제 데이터 (API 요청 대체)
    const fetchAccounts = async () => {
      const data: Account[] = [
        { id: 0, bankName: "토스뱅크", accountNumber: "0000-00000", balance: 3000000 },
        { id: 1, bankName: "토스뱅크", accountNumber: "0000-00000", balance: 3000000 },
        { id: 2, bankName: "토스뱅크", accountNumber: "0000-00000", balance: 3000000 },
        { id: 3, bankName: "토스뱅크", accountNumber: "0000-00000", balance: 3000000 },
        { id: 4, bankName: "토스뱅크", accountNumber: "0000-00000", balance: 3000000 },
        { id: 5, bankName: "토스뱅크", accountNumber: "0000-00000", balance: 3000000 },
      ];
      setAccounts(data);
    };
    fetchAccounts();
  }, []);

  if (accounts.length === 0) return <p>Loading...</p>;

  return (
    <div className={styles.accountContainer}>
      <h2 className={styles.accountTitle}>계좌</h2>
      <div className={styles.accountTree}>
        {/* 최상위 계좌 */}
        <div className={`${styles.accountNode} ${styles.topNode}`}>
          <span className={styles.accountIcon} />
          <div>
            <p className={styles.accountInfo}>
              {accounts[0].bankName} {accounts[0].accountNumber}
            </p>
            <p className={styles.accountBalance}>{accounts[0].balance.toLocaleString()}원</p>
          </div>
        </div>
        {/* 하위 계좌 */}
        <div className={styles.accountBranch}>
          {accounts.slice(1).map((account, index) => (
            <div key={account.id} className={`${styles.accountNode} ${getColorClass(index)}`}>
              <span className={styles.accountIcon} />
              <div>
                <p className={styles.accountInfo}>
                  {account.bankName} {account.accountNumber}
                </p>
                <p className={styles.accountBalance}>{account.balance.toLocaleString()}원</p>
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
