import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const DoughnutChartWithGoal = ({ goal, currentProgress }) => {
  const data = {
    labels: ["Progress", "Remaining"],
    datasets: [
      {
        label: "Goal Progress",
        data: [currentProgress, goal - currentProgress],
        backgroundColor: [
          "rgba(10, 195, 16, 0.74)",
          "rgba(200, 200, 200, 0.5)",
        ],
        borderColor: ["rgba(10, 195, 16, 1)", "rgba(200, 200, 200, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChartWithGoal;
