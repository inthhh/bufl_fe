import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// 데이터 예시
const data = [
  { name: "현재 저축액", value: 320 },
  { name: "달성액", value: 1000 - 320 },
];

// 색상 배열
const COLORS = ["#e4c3fe", "#989898"];

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
            fill="#9c9ac8"
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
        bottom: "600px"
      }}>{props.currentProgress}</div>
    </div >
  );
};

export default DonutChart;
