import React from "react";
import { Line } from "react-chartjs-2";

const Chart = ({ title, data }) => {
  const chartData = {
    labels: data.map((item) => item.date), // Adjust according to your data structure
    datasets: [
      {
        label: title,
        data: data.map((item) => item.value), // Adjust according to your data structure
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <h3>{title}</h3>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Chart;
