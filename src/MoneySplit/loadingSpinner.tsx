import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./splitStyle.css"; // CSS 파일 import
import { useNavigate } from "react-router-dom";

interface LoadingSpinnerProps {
  text: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ text }) => {
  const dots = [1, 2, 3, 4, 5, 6]; // 6개의 점

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text === "ana") navigate("/MoneySplit/AI/Analysis");
      if (text === "cal") navigate("/MoneySplit/AI/Calculate");
      if (text === "split") navigate("/MoneySplit/Finish");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="loader-container">
      <motion.div
        className="loader"
        animate={{ rotate: 360 }} // 부모 요소를 회전시킴
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }} // 무한 회전, 부드럽게
      >
        {dots.map((i) => (
          <motion.span
            key={i}
            className="dot"
            style={{
              transform: `rotate(${i * 60}deg) translate(30px)`,
            }}
          />
        ))}
      </motion.div>
      <p className="loading-text">
        {text === "ana" ? (
          <>내 소비 습관을 분석 중이에요.</>
        ) : text === "cal" ? (
          <>
            월급 쪼개기 AI 추천 비율을
            <br />
            계산 중이에요.
          </>
        ) : (
          <>
            월급 쪼개기를 위해 <br />
            자동이체 등록 중이에요.
          </>
        )}
      </p>
    </div>
  );
};

export default LoadingSpinner;
