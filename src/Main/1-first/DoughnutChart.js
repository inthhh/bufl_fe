import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const DoughnutChart = () => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "# of Votes",
        data: [40, 20, 10, 30],
        backgroundColor: [
          "rgba(255, 3, 49, 0.85)",
          "rgba(250, 159, 1, 0.85)",
          "rgba(10, 195, 16, 0.74)",
          "rgba(48, 231, 228, 0.73)",
        ],
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
