import { useState } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement
);

export default function Dashboard() {
  // Quick stats data
  const stats = [
    {
      label: "Total Students",
      value: 450,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      label: "Active Supervisors",
      value: 25,
      color: "from-green-500 to-green-600",
    },
    {
      label: "Pending Proposals",
      value: 32,
      color: "from-yellow-400 to-yellow-500",
    },
    {
      label: "Ongoing Evaluations",
      value: 12,
      color: "from-blue-500 to-blue-600",
    },
    { label: "Plagiarism Alerts", value: 5, color: "from-red-500 to-red-600" },
  ];

  // Bar chart data
  const barData = {
    labels: ["CS", "SE", "AI"],
    datasets: [
      {
        label: "FYP Groups",
        data: [12, 19, 7],
        backgroundColor: "#4F46E5",
        borderRadius: 6,
      },
    ],
  };

  // Pie chart data
  const pieData = {
    labels: ["A", "B", "C", "D", "F"],
    datasets: [
      {
        data: [45, 80, 60, 20, 5],
        backgroundColor: [
          "#22C55E",
          "#3B82F6",
          "#EAB308",
          "#F97316",
          "#EF4444",
        ],
        borderWidth: 2,
        borderColor: "#fff",
      },
    ],
  };

  // Random data generator for Line chart
  const generateRandomProgress = (weeks, min = 10, max = 100) => {
    return Array.from(
      { length: weeks },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    );
  };

  // State for line chart
  const [lineData, setLineData] = useState({
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Progress",
        data: generateRandomProgress(5),
        fill: true,
        borderColor: "#10B981",
        backgroundColor: "rgba(16,185,129,0.1)",
        tension: 0.4,
        pointBackgroundColor: "#10B981",
        pointRadius: 5,
      },
    ],
  });

  // Refresh function
  const refreshProgress = () => {
    setLineData({
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
      datasets: [
        {
          label: "Progress",
          data: generateRandomProgress(5),
          fill: true,
          borderColor: "#10B981",
          backgroundColor: "rgba(16,185,129,0.1)",
          tension: 0.4,
          pointBackgroundColor: "#10B981",
          pointRadius: 5,
        },
      ],
    });
  };

  return (
    <main className="p-6 space-y-8 md:ml-64 pt-20 md:pt-6 transition-all bg-gray-50 min-h-screen">
      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl shadow-lg text-white cursor-pointer transform transition hover:scale-105 bg-gradient-to-r ${stat.color}`}
          >
            <p className="text-sm opacity-90">{stat.label}</p>
            <h2 className="text-3xl font-extrabold">{stat.value}</h2>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
          <h3 className="mb-4 font-semibold text-gray-800">
            FYP Groups per Department
          </h3>
          <Bar data={barData} />
        </div>

        {/* Pie Chart */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
          <h3 className="mb-4 font-semibold text-gray-800">
            Grade Distribution
          </h3>
          <Pie data={pieData} />
        </div>

        {/* Line Chart with refresh */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 md:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">
              Student Progress Over Time
            </h3>
            <button
              onClick={refreshProgress}
              className="px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              Refresh Progress
            </button>
          </div>
          <Line data={lineData} />
        </div>

        {/* Heatmap Placeholder */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 md:col-span-2">
          <h3 className="mb-4 font-semibold text-gray-800">
            🗓️ Deadlines vs Submissions
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Showing sample data for upcoming deadlines and submitted projects.
          </p>

          <Bar
            data={{
              labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
              datasets: [
                {
                  label: "Deadlines",
                  data: [5, 7, 4, 6],
                  backgroundColor: "rgba(239,68,68,0.7)", // red
                  borderRadius: 6,
                },
                {
                  label: "Submissions",
                  data: [4, 6, 3, 5],
                  backgroundColor: "rgba(59,130,246,0.7)", // blue
                  borderRadius: 6,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  ticks: { stepSize: 1 },
                },
              },
            }}
          />
        </div>
      </div>
    </main>
  );
}
