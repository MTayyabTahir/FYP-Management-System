import { useState } from "react";
<<<<<<< HEAD
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
=======
import { Search } from "lucide-react";

export default function EvaluatorAssignment() {
  const supervisors = [
    { id: 1, name: "Dr. Ali" },
    { id: 2, name: "Prof. Sara" },
    { id: 3, name: "Dr. Kamran" },
    { id: 4, name: "Prof. Ayesha" },
  ];

  const [assignments, setAssignments] = useState([]);
  const [selectedSupervisor, setSelectedSupervisor] = useState("");
  const [selectedEvaluators, setSelectedEvaluators] = useState([]);
  const [query, setQuery] = useState("");

  // Filter assignments by supervisor name
  const filtered = assignments.filter((a) =>
    a.supervisor.toLowerCase().includes(query.toLowerCase())
  );

  // Add assignment
  const handleAddAssignment = () => {
    if (!selectedSupervisor || selectedEvaluators.length < 2) return;

    setAssignments([
      ...assignments,
      {
        supervisor: selectedSupervisor,
        evaluators: selectedEvaluators,
      },
    ]);

    setSelectedSupervisor("");
    setSelectedEvaluators([]);
  };

  // Toggle evaluators (max 3)
  const handleEvaluatorToggle = (evaluator) => {
    setSelectedEvaluators((prev) =>
      prev.includes(evaluator)
        ? prev.filter((ev) => ev !== evaluator)
        : prev.length < 3
        ? [...prev, evaluator]
        : prev
    );
>>>>>>> fyp
  };

  return (
    <div className="ml-64 p-6 bg-gray-50 min-h-screen">
<<<<<<< HEAD
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
=======
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Evaluator Assignment
      </h2>

      {/* Form Section */}
      <div className="bg-white rounded-xl shadow p-6 mb-8 border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Assign Evaluators</h3>

        {/* Supervisor Select */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Select Supervisor
          </label>
          <select
            value={selectedSupervisor}
            onChange={(e) => setSelectedSupervisor(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
          >
            <option value="">-- Choose Supervisor --</option>
            {supervisors.map((sup) => (
              <option key={sup.id} value={sup.name}>
                {sup.name}
              </option>
            ))}
          </select>
        </div>

        {/* Evaluator Select */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Select Evaluators (2–3)
          </label>
          <div className="grid grid-cols-2 gap-2">
            {supervisors
              .filter((sup) => sup.name !== selectedSupervisor)
              .map((sup) => (
                <label
                  key={sup.id}
                  className={`flex items-center gap-2 px-3 py-2 border rounded-lg cursor-pointer transition ${
                    selectedEvaluators.includes(sup.name)
                      ? "bg-green-600 text-white border-green-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedEvaluators.includes(sup.name)}
                    onChange={() => handleEvaluatorToggle(sup.name)}
                  />
                  {sup.name}
                </label>
              ))}
          </div>
        </div>

        {/* Actions */}
        <button
          onClick={handleAddAssignment}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Save Assignment
        </button>
      </div>

      {/* Assignments List */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-4 border-b bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-800">
            Evaluator Assignments
          </h3>

          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by supervisor..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>
        </div>

        {/* List */}
        {filtered.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {filtered.map((a, i) => (
              <li
                key={i}
                className="p-5 flex justify-between items-center hover:bg-gray-50 transition"
              >
                {/* Left side */}
                <div>
                  <p className="text-base font-medium text-gray-800">
                    {a.supervisor}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Evaluators:{" "}
                    <span className="text-gray-700 font-medium">
                      {a.evaluators.join(", ")}
                    </span>
                  </p>
                </div>

                {/* Right side */}
                <span className="text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full shadow-sm">
                  {a.evaluators.length} Assigned
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="p-8 text-gray-500 text-center">
            No evaluator assignments found.
          </p>
        )}
      </div>
>>>>>>> fyp
    </div>
  );
}
