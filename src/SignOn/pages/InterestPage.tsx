import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/style.css";

const InterestPage = () => {
  const [interests, setInterests] = useState<string[]>([]);
  const navigate = useNavigate();
  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  return (
    <div>
      <h2>관심사를 선택하세요</h2>
      {["빠르게 목표 만들기", "미래를 위한 투자", "교육 및 자기 개발"].map((interest) => (
        <button key={interest} onClick={() => toggleInterest(interest)}>
          {interest}
        </button>
      ))}

      <button>저장하기</button>
      <button onClick={() => navigate("/sign/completion")}>건너뛰기</button>
    </div>
  );
};

export default InterestPage;
