import React from "react";

interface DonutChartProps {
  progress: number;
}

const DonutChart1: React.FC<DonutChartProps> = ({ progress }) => {
  const radius = 70; // 원의 반지름
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const gradientStart = "#66a3ff";
  const gradientEnd = "#9966ff";

  return (
    <div>
      <div>
        {/* 배경 원 */}
        <svg
          style={{ width: "150px", height: "150px", margin: "10px auto" }}
          viewBox="0 0 180 180"
        >
          <circle
            cx="90"
            cy="90"
            r={radius}
            fill="none"
            stroke="#eaeaea"
            strokeWidth="22"
          />

          {/* 그라디언트 정의 */}
          <defs>
            <linearGradient
              id="progressGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor={gradientStart} />
              <stop offset="100%" stopColor={gradientEnd} />
            </linearGradient>
          </defs>

          {/* 진행률 원 */}
          <circle
            cx="90"
            cy="90"
            r={radius}
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="22"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 90 90)"
          />

          {/* 가운데 텍스트 */}
          <text
            x="95"
            y="100"
            textAnchor="middle"
            fontSize="30"
            fontWeight="bold"
          >
            {progress}%
          </text>
        </svg>
      </div>
    </div>
  );
};

export default DonutChart1;
