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
<<<<<<< HEAD
import {
  GraduationCap,
  Users,
  ClipboardList,
  BarChart3,
  AlertTriangle,
} from "lucide-react";
=======
>>>>>>> fyp

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
<<<<<<< HEAD
  // Stats data
=======
  // Quick stats data
>>>>>>> fyp
  const stats = [
    {
      label: "Total Students",
      value: 450,
<<<<<<< HEAD
      icon: <GraduationCap className="w-8 h-8 text-emerald-600" />,
=======
      color: "from-indigo-500 to-indigo-600",
>>>>>>> fyp
    },
    {
      label: "Active Supervisors",
      value: 25,
<<<<<<< HEAD
      icon: <Users className="w-8 h-8 text-indigo-600" />,
=======
      color: "from-green-500 to-green-600",
>>>>>>> fyp
    },
    {
      label: "Pending Proposals",
      value: 32,
<<<<<<< HEAD
      icon: <ClipboardList className="w-8 h-8 text-amber-500" />,
=======
      color: "from-yellow-400 to-yellow-500",
>>>>>>> fyp
    },
    {
      label: "Ongoing Evaluations",
      value: 12,
<<<<<<< HEAD
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
    },
    {
      label: "Plagiarism Alerts",
      value: 5,
      icon: <AlertTriangle className="w-8 h-8 text-red-500" />,
    },
=======
      color: "from-blue-500 to-blue-600",
    },
    { label: "Plagiarism Alerts", value: 5, color: "from-red-500 to-red-600" },
>>>>>>> fyp
  ];

  // Bar chart data
  const barData = {
    labels: ["CS", "SE", "AI"],
    datasets: [
      {
        label: "FYP Groups",
        data: [12, 19, 7],
<<<<<<< HEAD
        backgroundColor: "#4F46E5", // Indigo
        borderRadius: 8,
=======
        backgroundColor: "#4F46E5",
        borderRadius: 6,
>>>>>>> fyp
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
<<<<<<< HEAD
          "#10B981", // Emerald
          "#3B82F6", // Blue
          "#FACC15", // Yellow
          "#F97316", // Orange
          "#EF4444", // Red
=======
          "#22C55E",
          "#3B82F6",
          "#EAB308",
          "#F97316",
          "#EF4444",
>>>>>>> fyp
        ],
        borderWidth: 2,
        borderColor: "#fff",
      },
    ],
  };

<<<<<<< HEAD
  // Line chart with random data
=======
  // Random data generator for Line chart
>>>>>>> fyp
  const generateRandomProgress = (weeks, min = 10, max = 100) => {
    return Array.from(
      { length: weeks },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    );
  };

<<<<<<< HEAD
=======
  // State for line chart
>>>>>>> fyp
  const [lineData, setLineData] = useState({
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    datasets: [
      {
        label: "Progress",
        data: generateRandomProgress(5),
        fill: true,
<<<<<<< HEAD
        borderColor: "#059669",
        backgroundColor: "rgba(5,150,105,0.1)",
        tension: 0.4,
        pointBackgroundColor: "#059669",
=======
        borderColor: "#10B981",
        backgroundColor: "rgba(16,185,129,0.1)",
        tension: 0.4,
        pointBackgroundColor: "#10B981",
>>>>>>> fyp
        pointRadius: 5,
      },
    ],
  });

<<<<<<< HEAD
=======
  // Refresh function
>>>>>>> fyp
  const refreshProgress = () => {
    setLineData({
      labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
      datasets: [
        {
          label: "Progress",
          data: generateRandomProgress(5),
          fill: true,
<<<<<<< HEAD
          borderColor: "#059669",
          backgroundColor: "rgba(5,150,105,0.1)",
          tension: 0.4,
          pointBackgroundColor: "#059669",
=======
          borderColor: "#10B981",
          backgroundColor: "rgba(16,185,129,0.1)",
          tension: 0.4,
          pointBackgroundColor: "#10B981",
>>>>>>> fyp
          pointRadius: 5,
        },
      ],
    });
  };

  return (
<<<<<<< HEAD
    <main className="p-6 space-y-8 md:ml-64 pt-20 md:pt-6 bg-gray-50 min-h-screen">
      {/* Stats */}
=======
    <main className="p-6 space-y-8 md:ml-64 pt-20 md:pt-6 transition-all bg-gray-50 min-h-screen">
      {/* Quick Stats Cards */}
>>>>>>> fyp
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
<<<<<<< HEAD
            className="p-6 rounded-2xl shadow-md bg-white border border-gray-100 flex flex-col items-center hover:shadow-lg transition"
          >
            {stat.icon}
            <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
            <h2 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h2>
=======
            className={`p-6 rounded-2xl shadow-lg text-white cursor-pointer transform transition hover:scale-105 bg-gradient-to-r ${stat.color}`}
          >
            <p className="text-sm opacity-90">{stat.label}</p>
            <h2 className="text-3xl font-extrabold">{stat.value}</h2>
>>>>>>> fyp
          </div>
        ))}
      </div>

<<<<<<< HEAD
      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
          <h3 className="mb-4 font-semibold text-gray-800 text-lg">
=======
      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
          <h3 className="mb-4 font-semibold text-gray-800">
>>>>>>> fyp
            FYP Groups per Department
          </h3>
          <Bar data={barData} />
        </div>

        {/* Pie Chart */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
<<<<<<< HEAD
          <h3 className="mb-4 font-semibold text-gray-800 text-lg">
=======
          <h3 className="mb-4 font-semibold text-gray-800">
>>>>>>> fyp
            Grade Distribution
          </h3>
          <Pie data={pieData} />
        </div>

<<<<<<< HEAD
        {/* Line Chart */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 md:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800 text-lg">
=======
        {/* Line Chart with refresh */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 md:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">
>>>>>>> fyp
              Student Progress Over Time
            </h3>
            <button
              onClick={refreshProgress}
<<<<<<< HEAD
              className="px-4 py-2 text-sm font-medium bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700 transition"
=======
              className="px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
>>>>>>> fyp
            >
              Refresh Progress
            </button>
          </div>
          <Line data={lineData} />
        </div>

<<<<<<< HEAD
        {/* Deadlines vs Submissions */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 md:col-span-2">
          <h3 className="mb-4 font-semibold text-gray-800 text-lg">
            🗓️ Deadlines vs Submissions
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Comparing deadlines with actual student submissions (sample data).
=======
        {/* Heatmap Placeholder */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 md:col-span-2">
          <h3 className="mb-4 font-semibold text-gray-800">
            🗓️ Deadlines vs Submissions
          </h3>
          <p className="text-gray-500 text-sm mb-4">
            Showing sample data for upcoming deadlines and submitted projects.
>>>>>>> fyp
          </p>

          <Bar
            data={{
              labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
              datasets: [
                {
                  label: "Deadlines",
                  data: [5, 7, 4, 6],
<<<<<<< HEAD
                  backgroundColor: "rgba(239,68,68,0.85)", // red
                  borderRadius: 8,
=======
                  backgroundColor: "rgba(239,68,68,0.7)", // red
                  borderRadius: 6,
>>>>>>> fyp
                },
                {
                  label: "Submissions",
                  data: [4, 6, 3, 5],
<<<<<<< HEAD
                  backgroundColor: "rgba(16,185,129,0.85)", // emerald
                  borderRadius: 8,
=======
                  backgroundColor: "rgba(59,130,246,0.7)", // blue
                  borderRadius: 6,
>>>>>>> fyp
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
