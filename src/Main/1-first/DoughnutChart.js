import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels"; // 추가

const DoughnutChart = (props) => {
  const data = {
    labels: props.name, // 각 섹션의 이름
    datasets: [
      {
        data: props.ratio,
        backgroundColor: props.color,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // 비율 유지하지 않도록 설정
    responsive: true, // 반응형 설정
    plugins: {
      legend: {
        display: false, // 범례(legend) 숨김
      },
      datalabels: {
        color: "#000", // 글씨 색상
        font: {
          weight: "bold",
          size: 12,
        },
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex]; // 해당 섹션의 이름 가져오기
          if (value > 0) return `${label}\n${value}%`; // "이름 + % 값" 표시
          return "";
        },
        anchor: "end", // 도넛 안쪽이 아닌 바깥쪽에 위치
        align: "start", // 중심에서 조금 더 벗어난 위치
        offset: -15, // 레이블을 더 이동시키기
      },
    },
  };

  return (
    <div>
      <Doughnut data={data} options={options} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default DoughnutChart;
