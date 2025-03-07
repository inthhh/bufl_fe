import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// 데이터 예시
const data = [
  { name: "식비", value: 400 },
  { name: "교통비", value: 300 },
  { name: "주거비", value: 300 },
  { name: "기타", value: 200 },
];

// 색상 배열
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const DonutChart = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70} // 🚨 도넛 차트를 만들려면 여기를 추가해야 함!
            outerRadius={100} // 외곽 반지름
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
    </div>
  );
};

export default DonutChart;
