// components/MyBarChart.js
'use client'; // To ensure it runs on the client side

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { FaRupeeSign } from "react-icons/fa";

// Register Chart.js modules (needed for react-chartjs-2 to work correctly)
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const MyBarChart = () => {
  const data = {
    labels: ['8,000,000', '4,000,000', '12,000,000', '4,700,000'],
    datasets: [
      {
        label: 'Revenue and profit analysis for 1,000,000 Bottles',
        data: [0.8, 0.4, 1.2, 0.47],
        backgroundColor: [
          'blue',
          'red',
          'green',
          'yellow'
        ],
        borderColor: [
         'blue',
          'red',
          'green',
          'yellow'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true, // Start y-axis from zero
        min: 0, // Minimum value for y-axis
        max: 1.2, // Maximum value for y-axis
        ticks: {
          stepSize: .2, // Interval between values
          callback: (value) => value.toFixed(1), // Custom labels if needed
        },
        
        title: {
            display: true, // Display the title
            text: "Amount in ₹", // Your title text
            font: {
              size: 14, // Font size of the title
              family: 'Arial', // Font family of the title
            },
      },
    },
  }
}

  return  <div className="chart-container mt-20">
  <Bar data={data} options={options} />
</div>
};

export default MyBarChart;
