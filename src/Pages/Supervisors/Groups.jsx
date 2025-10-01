import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default function StudentGroups() {
  const groups = [
    {
      id: "A",
      project: "Sarcasm Detection in Social Media",
      members: ["Hamid Mazhar", "Abdul Rehman", "Ali Hassan"],
      progress: 75,
    },
    {
      id: "B",
      project: "Ocean EYE: Marine Species Detection",
      members: ["Ayesha Khan", "Usman Tariq", "Bilal Ahmad"],
      progress: 50,
    },
    {
      id: "C",
      project: "Quran Guide (AI Based)",
      members: ["Muhammad Abdullah", "Fatima Noor", "Haris Iqbal"],
      progress: 90,
    },
  ];

  return (
    <div className="p-6 md:ml-64 pt-8  min-h-screen">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        My Groups & Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groups.map((group) => {
          const data = {
            labels: ["Completed", "Remaining"],
            datasets: [
              {
                data: [group.progress, 100 - group.progress],
                backgroundColor: [
                  group.progress < 50
                    ? "#ef4444" // red
                    : group.progress < 80
                    ? "#f59e0b" // yellow
                    : "#16a34a", // green
                  "#e5e7eb", // gray background for remaining
                ],
                borderWidth: 1,
              },
            ],
          };

          const options = {
            cutout: "70%",
            plugins: {
              legend: { display: false },
            },
          };

          return (
            <div
              key={group.id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              {/* Group Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Group {group.id}
                </h2>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  {group.project}
                </span>
              </div>

              {/* Members */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-600 mb-2">
                  Group Members:
                </h3>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {group.members.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>

              {/* Chart.js Doughnut Progress */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32">
                  <Doughnut data={data} options={options} />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  {group.progress}% Completed
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
