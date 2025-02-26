import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/style.css";
import MoneyImg from "../images/money.png";
import DateImg from "../images/date.png";
function SalaryInfoPage() {
  const navigate = useNavigate();
  const [salary, setSalary] = useState(2500000);
  const [payday, setPayday] = useState("매달 20일");

  return (
    <div>
      <h3>
        월급 자동 분배를 위해
        <br /> 정보가 필요해요.
      </h3>
      <img src={MoneyImg} alt="money" width="45px"/>
      <img src={DateImg} alt="date" width="45px"/>
      <input
        type="number"
        value={salary}
        onChange={(e) => setSalary(Number(e.target.value))}
      />
      <select value={payday} onChange={(e) => setPayday(e.target.value)}>
        <option>매달 10일</option>
        <option>매달 15일</option>
        <option>매달 20일</option>
        <option>매달 25일</option>
      </select>

      <button onClick={() => navigate("/sign/interest")}>다음</button>
    </div>
  );
}

export default SalaryInfoPage;
