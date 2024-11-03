
'use client'; 

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';


ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ChartDataLabels);

const MyBarChart = () => {
  const data = {
    labels: ['₹8,000,000', '₹4,000,000', '₹12,000,000', '₹4,700,000'],
    datasets: [
      {
        label: 'Revenue and profit analysis for 1,000,000 Bottles',
        data: [0.8, 0.4, 1.2, 0.47],
        backgroundColor: ['#024CAA', '#FF8A8A', '#347928', '#F3C623'],
        borderColor: ['#024CAA', '#FF8A8A', '#347928', '#F3C623'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    layout: {
      margin: {
        top: 100, 
      }
    },
    scales: {
      x: {
        display: false, 
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 1.6,
        ticks: {
          stepSize: 0.2,
          callback: (value) => value.toFixed(1),
        },
        title: {
          display: true,
          text: 'Amount in ₹',
          font: {
            size: 14,
            family: 'Arial',
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          boxWidth: 0, 
          padding: 10, 
        },
      },

      tooltip: {
        callbacks: {
          title: () => '', 
          label: (context) => `Value: ₹${(context.raw * 1000000).toLocaleString()}`
        },
      },
      datalabels: {
        anchor: 'end',
        align: 'top',
        formatter: (value, context) => {
          
          return `₹${(value * 1000000).toLocaleString()}`;
        },
        font: {
          size: 12,
        },
        color: '#000', 
      },
    },
  };

  return (
    <div className="chart-container mt-20">
      <Bar data={data} options={options} />
    </div>
  );
};

export default MyBarChart;
