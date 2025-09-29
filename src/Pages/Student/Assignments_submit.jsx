import { useState } from "react";
import { Upload, X } from "lucide-react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default function AssignmentsPage() {
  const [open, setOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [file, setFile] = useState(null);
  const [plagiarismResult, setPlagiarismResult] = useState(null);

  const assignments = [
    { id: 1, title: "Proposal Submission", deadline: "25 Sept 2025", status: "Pending" },
    { id: 2, title: "Literature Review", deadline: "10 Oct 2025", status: "Pending" },
    { id: 3, title: "Mid Evaluation Report", deadline: "20 Nov 2025", status: "Pending" },
    { id: 4, title: "Final Year Report", deadline: "15 Jan 2026", status: "Pending" },
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
    const unique = Math.floor(Math.random() * 20) + 80; // 80–100
    const plagiarized = 100 - unique;
    setPlagiarismResult({ unique, plagiarized });
  };

  return (
    <div className="p-6 md:ml-64 pt-8 min-h-screen bg-green-50">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Assignments</h1>

      {/* Assignments Table */}
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl relative">
            {/* Header with Close Button */}
            <div className="flex justify-between items-center border-b p-5">
              <h2 className="text-xl font-bold text-green-700">
                Submit: {selectedAssignment?.title}
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-red-100 transition"
              >
                <X size={22} className="text-gray-600 hover:text-red-600" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {!plagiarismResult ? (
                <>
                  {/* Upload Box */}
                  <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg flex flex-col items-center space-y-4">
                    <Upload size={50} className="text-green-600" />

                    <label className="flex items-center space-x-3 cursor-pointer bg-green-100 px-4 py-2 rounded-lg hover:bg-green-200 transition">
                      <input type="file" onChange={handleFileUpload} className="hidden" />
                      <span className="text-green-700 font-medium">Choose File</span>
                    </label>

                    {file && (
                      <p className="text-sm text-gray-700 mt-2">
                        Selected: <span className="font-semibold">{file.name}</span>
                      </p>
                    )}
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={!file}
                    className="mt-6 w-full py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    Submit Assignment
                  </button>
                </>
              ) : (
                <div className="mt-6 text-center">
                  <h3 className="text-lg font-semibold text-green-700 mb-4">
                    📊 Plagiarism Report
                  </h3>

                  {/* Pie Chart in Center with Fixed Size */}
                  <div className="flex justify-center">
                    <div className="w-64 h-64">
                      <Pie
                        data={{
                          labels: ["Unique", "Plagiarized"],
                          datasets: [
                            {
                              data: [plagiarismResult.unique, plagiarismResult.plagiarized],
                              backgroundColor: ["#16a34a", "#dc2626"],
                            },
                          ],
                        }}
                        options={{
                          maintainAspectRatio: false,
                          plugins: { legend: { position: "bottom" } },
                        }}
                      />
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow text-sm">
                    <p>
                      <span className="font-semibold text-green-700">
                        Unique Content:
                      </span>{" "}
                      {plagiarismResult.unique}%
                    </p>
                    <p>
                      <span className="font-semibold text-red-600">
                        Plagiarized Content:
                      </span>{" "}
                      {plagiarismResult.plagiarized}%
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
