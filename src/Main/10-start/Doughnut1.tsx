import { color } from 'framer-motion';  // framer-motion에서 임포트, 현재는 불필요
import React from 'react';

const DonutChart1 = () => {
  // 상태 및 날짜 정보
  const progress = 32; // 목표 달성률 나타내는 변수 
  const startDate = "2025.01.12"; // 각각 시작일, 종료일 문자열
  const endDate = "2026.01.12";
  
  // SVG 원형 진행 표시기 계산
  const radius = 70; // 원의 반지름
        // 원의 둘레를 계산하는 공식  
  const circumference = 2 * Math.PI * radius;
        // 진행률에 맞춰 원의 선을 얼마나 그릴 지 결정 progress에 맞춰서 진행
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const gradientStart = "#66a3ff"; // 보라색
  const gradientEnd = "#9966ff"; // 파란색
  
  return (
    <div>
      <div style={{
        fontSize: "20px",
        fontWeight: "bold",
        margin: "20px 0 0 20px"
        }}>목표 달성 현황</div>
      
      <div>
        {/* 배경 원  viewbox는 보이는 영역 설정 storke는 원의 테두리 색 width는 선 두께*/}
        <svg style={{
          width: "150px",
          height: "150px", 
          margin: "10 0 20 110"
          }} viewBox="0 0 180 180">
            {/*중심 좌표는 cx, cy이며 반지름은 r= radius로 설정한다.*/}
          <circle 
            cx="90" 
            cy="90" 
            r={radius} 
            fill="none" 
            stroke="#eaeaea" 
            strokeWidth="22"
          />
          
          {/* 그라디언트 정의                          그라디언트 방향을 왼쪽에서 오른쪽으로 지정*/}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={gradientStart} />
              <stop offset="100%" stopColor={gradientEnd} />
            </linearGradient>
          </defs>
          
          {/* 진행률 원 stroke= 그라디언트 색상 적용
           strokeDasharray= 원의 둘레 정의 
           strokeDashoffset= 진행 상태에 따라 원의 선을 잘라 표시 
           strokeLinecap= 원의 끝을 둥글게 처리한다. 
           transform="rotate(-90 90 90)"= 원을 위쪽부터 그리기 위해 원을 90도 회전 */}
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
            x="90" 
            y="95" 
            textAnchor="middle" 
            fontSize="30" 
            fontWeight="bold"
          >
            {progress}%
          </text>
        </svg>
        
        {/* 시작일과 종료일 */}
        <div style={{
          position: "absolute",
          left: "70px",
          top: "420px",
          transform: "translateX(-2px) translateY(-50%)",
          color: "gray",
          fontSize: "small"}}>
  {/* 내용 */}
          {startDate}
        </div>
        <div style={{
          position: "absolute",
          right: "70px", 
          top: "420px", 
          transform: "translateX(-2px) translateY(-50%)",
          color:"#3182F6",
          fontSize: "small"}}>
          {endDate}
        </div>
      </div>
      </div>
  );
};

export default DonutChart1;