import { useState } from "react";
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
  };

  return (
    <div className="ml-64 p-6 bg-gray-50 min-h-screen">
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
    </div>
  );
}
