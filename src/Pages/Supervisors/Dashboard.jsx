import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default function SupervisorDashboard() {
  // Dummy Data
  const announcements = [
    {
      id: 1,
      msg: "Final Proposal deadline is 30th Sept.",
      by: "Coordinator",
      date: "20th Sept, 2025",
    },
    {
      id: 2,
      msg: "Mid Evaluation starts from 25th Sept.",
      by: "Coordinator",
      date: "18th Sept, 2025",
    },
  ];

  const marksData = {
    labels: ["Group 1", "Group 2", "Group 3", "Group 4", "Group 5", "Group 6"],
    datasets: [
      {
        label: "Marks",
        data: [28, 30, 25, 32, 27, 29],
        backgroundColor: "rgba(34,197,94,0.7)", // green
      },
    ],
  };

  const progressData = [
    { id: 1, title: "Proposal", percent: 100 },
    { id: 2, title: "Design", percent: 80 },
    { id: 3, title: "Implementation", percent: 60 },
    { id: 4, title: "Testing", percent: 40 },
    { id: 5, title: "Final Report", percent: 20 },
  ];

  return (
    <div className="p-6 md:ml-64 pt-8  min-h-screen">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Supervisor Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="p-6 bg-white rounded-2xl shadow text-center">
          <h2 className="text-gray-500 text-sm">Total Groups</h2>
          <p className="text-2xl font-bold text-green-700">6</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow text-center">
          <h2 className="text-gray-500 text-sm">In Progress</h2>
          <p className="text-2xl font-bold text-yellow-600">4</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow text-center">
          <h2 className="text-gray-500 text-sm">Completed</h2>
          <p className="text-2xl font-bold text-blue-600">1</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow text-center">
          <h2 className="text-gray-500 text-sm">Pending Evaluations</h2>
          <p className="text-2xl font-bold text-red-600">1</p>
        </div>
      </div>

      {/* Announcements */}
      <div className="bg-white p-6 rounded-2xl shadow mb-6">
        <h2 className="text-lg font-semibold text-green-700 mb-4">
          Announcements
        </h2>
        <ul className="space-y-3">
          {announcements.map((a) => (
            <li
              key={a.id}
              className="border-b pb-2 flex flex-col md:flex-row md:justify-between"
            >
              <span>{a.msg}</span>
              <span className="text-xs text-gray-500">
                {a.by} • {a.date}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Marks Chart */}
      <div className="bg-white p-6 rounded-2xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-4 text-green-700">
          Groups Performance (Marks)
        </h2>
        <Bar data={marksData} />
      </div>

      {/* Progress Section */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-4 text-green-700">
          Project Progress
        </h2>
        <div className="space-y-4">
          {progressData.map((p) => (
            <div key={p.id}>
              <div className="flex justify-between text-sm mb-1">
                <span>{p.title}</span>
                <span>{p.percent}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-green-600 h-3 rounded-full"
                  style={{ width: `${p.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
