import React, { useEffect, useState } from "react";
import "./accountStyle.css";
import line1 from "./img/lines.png";
import toss from "./img/toss.png";
import Bottom from "../bottom_nav/bottom";

interface AccountProps {
  total: number;
}

const Account: React.FC<AccountProps> = ({ total }) => {
  const [name, setName] = useState<string[]>([]);
  const [ratio, setRatio] = useState<number[]>([]);
  const [color, setColor] = useState<string[]>([]);

  useEffect(() => {
    // 카테고리 정보 api
    fetch(`https://buflbe.vercel.app/api/salary/category`, {
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

  return (
    <div>
      <div>
        <div className="budget_container">
          <div className="budget-title">항목별 예산</div>
          {/* <div className="line"></div> */}

          {ratio.map((r, i) => (
            <div className="budget_wrapper">
              <div className="budget_name">{name[i]}</div>
              <div
                className="budget_percent"
                style={
                  color[i]
                    ? { backgroundColor: `${color[i]}` }
                    : { backgroundColor: "#dddddd" }
                }
              >
                {r}%
              </div>
              <div className="budget_month">매달</div>
              <div className="budget_amount">
                {(r * total * 0.01).toLocaleString()}원
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Account;
