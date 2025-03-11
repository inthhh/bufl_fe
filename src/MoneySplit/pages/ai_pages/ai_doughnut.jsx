import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const DonutChart = ({ dataList, name }) => {
  const chartData = {
    labels: name,
    datasets: [
      {
        label: "# of Votes",
        data: dataList,
        backgroundColor: ["#FF6B86", "#bdeeb6", "#FFF58A", "#FFB1E0", "#5eb961", "#6BF8F6", "#C767D0"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // 범례 제거 (필요하면 true로 변경 가능)
      },
      datalabels: {
        color: "#000000",
        formatter: (value, context) => {
          return name[context.dataIndex];
        },
        font: {
          size: 14,
          weight: "bold",
        },
        anchor: "end", // 도넛 조각의 바깥쪽으로 이동
        align: "start", // 라벨을 조각 바깥으로 정렬
        offset: -6, // 라벨을 더 바깥쪽으로 이동
      },
    },
    radius: "90%",
  };

  return (
    <div>
      <Doughnut data={chartData} options={options} plugins={[ChartDataLabels]} />
    </div>
  );
};

export default DonutChart;
