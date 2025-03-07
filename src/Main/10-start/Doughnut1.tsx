import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// 데이터 예시
const data = [
  { name: "식비", value: 400 },
  { name: "교통비", value: 300 },
];

// 색상 배열
const COLORS = ["#3182F6", "#9e2222"];

interface DounutProps {
  // progress: number;
  goal: number;
  currentProgress: number;
}

const DonutChart: React.FC<DounutProps> = (props) => {
  return (
    <div style={{ width: "100%", height: "200px" }}>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={45} // 🚨 도넛 차트를 만들려면 여기를 추가해야 함!
            outerRadius={70} // 외곽 반지름
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div style={{
        position: "absolute",
        marginLeft: "180px",
        bottom: "580px"
      }}>{props.currentProgress}</div>
    </div >
  );
};

export default DonutChart;
