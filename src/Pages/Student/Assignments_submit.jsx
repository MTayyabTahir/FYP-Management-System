import { useState } from "react";
import { FileText, Upload } from "lucide-react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default function AssignmentsPage() {
  const [open, setOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [file, setFile] = useState(null);
  const [plagiarismResult, setPlagiarismResult] = useState(null);

  const assignments = [
    {
      id: 1,
      title: "Proposal Submission",
      deadline: "25 Sept 2025",
      status: "Pending",
    },
    {
      id: 2,
      title: "Literature Review",
      deadline: "10 Oct 2025",
      status: "Pending",
    },
    {
      id: 3,
      title: "Mid Evaluation Report",
      deadline: "20 Nov 2025",
      status: "Pending",
    },
    {
      id: 4,
      title: "Final Year Report",
      deadline: "15 Jan 2026",
      status: "Pending",
    },
  ];

  const handleOpen = (assignment) => {
    setSelectedAssignment(assignment);
    setOpen(true);
    setPlagiarismResult(null);
    setFile(null);
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    // Fake plagiarism check
    const unique = Math.floor(Math.random() * 20) + 80; // 80–100
    const plagiarized = 100 - unique;
    setPlagiarismResult({ unique, plagiarized });
  };

  return (
    <div className="p-6 md:ml-64 pt-8  min-h-screen">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Assignments</h1>

      <div className="bg-white shadow rounded-2xl overflow-hidden">
        <table className="table-auto w-full text-left border-collapse">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="p-4">Assignment</th>
              <th className="p-4">Deadline</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((a) => (
              <tr key={a.id} className="border-b hover:bg-green-50">
                <td className="p-4 font-medium">{a.title}</td>
                <td className="p-4">{a.deadline}</td>
                <td className="p-4 text-yellow-600">{a.status}</td>
                <td className="p-4">
                  <button
                    onClick={() => handleOpen(a)}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                  >
                    Submit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold text-green-700 mb-4">
              Submit: {selectedAssignment?.title}
            </h2>

            <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg flex flex-col items-center">
              <Upload size={40} className="text-gray-500 mb-3" />
              <input type="file" onChange={handleFileUpload} />
              {file && (
                <p className="text-sm text-gray-700 mt-2">
                  Selected: {file.name}
                </p>
              )}
            </div>

            {!plagiarismResult ? (
              <button
                onClick={handleSubmit}
                disabled={!file}
                className="mt-6 w-full py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
              >
                Submit Assignment
              </button>
            ) : (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-green-700 mb-2">
                  Plagiarism Report
                </h3>
                <Pie
                  data={{
                    labels: ["Unique", "Plagiarized"],
                    datasets: [
                      {
                        data: [
                          plagiarismResult.unique,
                          plagiarismResult.plagiarized,
                        ],
                        backgroundColor: ["#16a34a", "#dc2626"],
                      },
                    ],
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
