import { useState } from "react";
import * as XLSX from "xlsx";

export default function EvaluatorAssignment() {
  const [supervisors] = useState([
    "Dr. Ali",
    "Prof. Sara",
    "Dr. Kamran",
    "Prof. Ayesha",
  ]);

  const [evaluators] = useState([
    "ET-1",
    "ET-2",
    "ET-3",
    "ET-4",
    "ET-5",
  ]);

  const [selectedSupervisor, setSelectedSupervisor] = useState("");
  const [et1, setET1] = useState("");
  const [et2, setET2] = useState("");
  const [assignments, setAssignments] = useState([]);

  // Add assignment
  const handleAddAssignment = () => {
    if (!selectedSupervisor || !et1 || !et2) return;

    setAssignments([
      ...assignments,
      { supervisor: selectedSupervisor, et1, et2 },
    ]);

    // Reset selections
    setSelectedSupervisor("");
    setET1("");
    setET2("");
  };

  // Export to Excel
  const handleExportExcel = () => {
    if (assignments.length === 0) return;

    const ws = XLSX.utils.json_to_sheet(assignments);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Assignments");
    XLSX.writeFile(wb, "Evaluator_Assignments.xlsx");
  };

  return (
    <div className="ml-64 p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-green-700 mb-6">
        📝 Evaluator Assignment
      </h2>

      {/* Supervisor Select */}
      <div className="bg-white rounded-xl shadow p-6 mb-6 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Select Supervisor
        </h3>
        <select
          value={selectedSupervisor}
          onChange={(e) => setSelectedSupervisor(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
        >
          <option value="">-- Choose Supervisor --</option>
          {supervisors.map((sup, i) => (
            <option key={i} value={sup}>
              {sup}
            </option>
          ))}
        </select>
      </div>

      {/* Evaluator Dropdowns */}
      {selectedSupervisor && (
        <div className="bg-white rounded-xl shadow p-6 mb-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Select Evaluators for <span className="text-green-700">{selectedSupervisor}</span>
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">ET-1</label>
              <select
                value={et1}
                onChange={(e) => setET1(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              >
                <option value="">-- Choose Evaluator --</option>
                {evaluators
                  .filter((ev) => ev !== et2)
                  .map((ev, i) => (
                    <option key={i} value={ev}>
                      {ev}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">ET-2</label>
              <select
                value={et2}
                onChange={(e) => setET2(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
              >
                <option value="">-- Choose Evaluator --</option>
                {evaluators
                  .filter((ev) => ev !== et1)
                  .map((ev, i) => (
                    <option key={i} value={ev}>
                      {ev}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleAddAssignment}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            + Add Assignment
          </button>
        </div>
      )}

      {/* Assignments Table */}
      {assignments.length > 0 && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-x-auto">
          <table className="w-full text-left text-gray-700 min-w-[500px]">
            <thead className="bg-green-100 text-green-700 uppercase text-sm font-semibold">
              <tr>
                <th className="px-6 py-3">Supervisor</th>
                <th className="px-6 py-3">ET-1</th>
                <th className="px-6 py-3">ET-2</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((a, idx) => (
                <tr
                  key={idx}
                  className={`${
                    idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-green-50 transition`}
                >
                  <td className="px-6 py-4 font-medium text-gray-800">{a.supervisor}</td>
                  <td className="px-6 py-4 text-gray-700">{a.et1}</td>
                  <td className="px-6 py-4 text-gray-700">{a.et2}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Export Button */}
          <div className="p-4">
            <button
              onClick={handleExportExcel}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Export to Excel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
