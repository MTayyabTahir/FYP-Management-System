import { useState } from "react";
import { Bell, ClipboardList, User, FileText, X } from "lucide-react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
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
  PointElement,
  LineElement
);

export default function StudentDashboard() {
  // Dummy Assignments
  const assignments = [
    { id: 1, title: "Proposal Submission", status: "Submitted" },
    { id: 2, title: "Design Document", status: "Pending" },
    { id: 3, title: "Mid Evaluation Report", status: "In Review" },
    { id: 4, title: "Final Report Draft", status: "Pending" },
  ];

  // Detailed Announcements
  const announcements = [
    {
      msg: "FYP Mid Evaluation starts from 25th Sept.",
      from: "Coordinator",
      date: "2025-09-18",
      time: "10:00 AM",
      details:
        "All groups are required to prepare for mid evaluation. Ensure reports are submitted before 22nd Sept. The evaluation will be conducted in Room #302, CS Block.",
    },
    {
      msg: "Submit Design Document before 20th Sept.",
      from: "Supervisor",
      date: "2025-09-15",
      time: "02:30 PM",
      details:
        "Students must submit their design documents on the portal. Delays may lead to mark deduction. Ensure UML diagrams are properly included.",
    },
    {
      msg: "Final Presentation rehearsal on 5th Oct.",
      from: "Coordinator",
      date: "2025-09-12",
      time: "11:15 AM",
      details:
        "All groups will perform a rehearsal of their final presentation in Auditorium Hall. Attendance is mandatory. Please bring presentation slides.",
    },
  ];

  // Popup state
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  // Charts
  const marksData = {
    labels: ["Mid 1", "Mid 2", "Final 1", "Final 2"],
    datasets: [
      {
        label: "Marks",
        data: [22, 27, 35, 40],
        backgroundColor: "rgba(34,197,94,0.7)", // green
      },
    ],
  };

  const progressData = {
    labels: ["Proposal", "Design", "Implementation", "Testing", "Final Report"],
    datasets: [
      {
        label: "Progress",
        data: [100, 80, 60, 40, 20],
        borderColor: "#16a34a",
        backgroundColor: "rgba(34,197,94,0.3)",
      },
    ],
  };

  return (
    <div className="p-6 md:ml-64 pt-8 min-h-screen bg-green-50">
      {/* Header */}
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Student Dashboard
      </h1>

      {/* Announcements Section */}
      <div className="bg-white p-6 rounded-2xl shadow mb-6">
        <h2 className="text-lg font-semibold flex items-center gap-2 text-green-700 mb-4">
          <Bell size={18} /> Announcements
        </h2>
        <ul className="space-y-3 text-sm text-gray-700">
          {announcements.map((a, i) => (
            <li
              key={i}
              className="border-b pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between cursor-pointer hover:bg-green-50 p-2 rounded"
              onClick={() => setSelectedAnnouncement(a)}
            >
              <div>
                <p>{a.msg}</p>
                <p className="text-xs text-gray-500">
                  From: <span className="font-medium">{a.from}</span>
                </p>
              </div>
              <div className="text-xs text-gray-500 mt-2 sm:mt-0">
                {a.date} | {a.time}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Assignments + Supervisor Info + Project Name */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Assignments */}
        <div className="bg-white p-6 rounded-2xl shadow lg:col-span-2">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-green-700 mb-4">
            <ClipboardList size={18} /> Assignments
          </h2>
          <ul className="space-y-3 text-sm">
            {assignments.map((a) => (
              <li
                key={a.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <span>{a.title}</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    a.status === "Submitted"
                      ? "bg-green-100 text-green-700"
                      : a.status === "Pending"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {a.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Supervisor & Project Info */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-green-700 mb-4">
            <User size={18} /> Supervisor Info
          </h2>
          <div className="p-4 bg-green-50 rounded-lg shadow-sm mb-4">
            <p className="text-sm text-gray-700">
              <strong>Supervisor:</strong> Dr. Ahsan Arshad <br />
              <strong>Email:</strong> ahsan.arshad@uaar.edu.pk <br />
              <strong>Research:</strong> Agile, Blockchain, SRE <br />
            </p>
          </div>
          <h2 className="text-lg font-semibold flex items-center gap-2 text-green-700 mb-2">
            <FileText size={18} /> Project
          </h2>
          <div className="p-4 bg-green-50 rounded-lg shadow-sm">
            <p className="text-sm text-gray-700">
              <strong>Title:</strong> Intelligent Sarcasm Detection using NLP
            </p>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Marks Bar Chart */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-green-700">
            Performance (Marks)
          </h2>
          <Bar data={marksData} />
        </div>

        {/* Progress Line Chart */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-green-700">
            Project Progress
          </h2>
          <Line data={progressData} />
        </div>
      </div>

      {/* Popup Modal */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
              onClick={() => setSelectedAnnouncement(null)}
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              {selectedAnnouncement.msg}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              <strong>From:</strong> {selectedAnnouncement.from}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <strong>Date:</strong> {selectedAnnouncement.date} |{" "}
              {selectedAnnouncement.time}
            </p>
            <p className="text-gray-700">{selectedAnnouncement.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}
