import "./BloodPressureChart.css";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
);

function BloodPressureChart({ diagnosisHistory }) {
  const labels = diagnosisHistory
    .slice(0, 6)
    .map((item) => `${item.month.substring(0, 3)}, ${item.year}`)
    .reverse();

  const systolicData = diagnosisHistory
    .slice(0, 6)
    .map((item) => item.blood_pressure.systolic.value)
    .reverse();

  const diastolicData = diagnosisHistory
    .slice(0, 6)
    .map((item) => item.blood_pressure.diastolic.value)
    .reverse();

  const data = {
    labels,

    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        tension: 0.4,
      },

      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        tension: 0.4,
      },
    ],
  };

 const options = {
   responsive: true,

   maintainAspectRatio: false,

   plugins: {
     legend: {
       position: "top",
       align: "start",
     },
   },

   scales: {
     y: {
       min: 60,
       max: 180,
       ticks: {
         stepSize: 20,
       },
       grid: {
         color: "#e5e7eb",
       },
     },

     x: {
       grid: {
         display: false,
       },
     },
   },
 };

  return (
    <div className="blood-pressure-chart">
      <Line data={data} options={options} />
    </div>
  );
}

export default BloodPressureChart;
