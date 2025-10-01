import { useState } from "react";

export default function SupervisorEvaluator() {
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState([
    {
      id: 1,
      arid: "21-ARID-417",
      name: "Hamid Mazhar",
      project: "Sarcasm Detection",
      mid1: "",
      mid2: "",
      final: "",
      supMarks: "",
    },
    {
      id: 2,
      arid: "21-ARID-390",
      name: "Ali Raza",
      project: "AI Based Agriculture",
      mid1: "",
      mid2: "",
      final: "",
      supMarks: "",
    },
    {
      id: 3,
      arid: "21-ARID-410",
      name: "Ayesha Khan",
      project: "Blockchain Voting",
      mid1: "",
      mid2: "",
      final: "",
      supMarks: "",
    },
  ]);

  // filter students based on search
  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.arid.toLowerCase().includes(search.toLowerCase()) ||
      s.project.toLowerCase().includes(search.toLowerCase())
  );

  // handle marks update
  const handleChange = (id, field, value) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  // finalize all students
  const handleFinalize = () => {
    alert("All evaluations finalized!");
  };

  return (
    <div className="p-6 md:ml-64 pt-8 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Supervisor Evaluator Panel
      </h1>

      {/* Search + Finalize Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by Name, ARID, or Project..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-green-500 rounded-lg px-4 py-2 w-full md:w-1/2 focus:ring-2 focus:ring-green-400 outline-none"
        />

        <button
          onClick={handleFinalize}
          className="px-6 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
        >
          Finalize All
        </button>
      </div>

      {/* Students Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-2xl">
        <table className="w-full border-collapse">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-3 text-left">ARID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Project</th>
              <th className="p-3 text-center">Mid-1</th>
              <th className="p-3 text-center">Mid-2</th>
              <th className="p-3 text-center">Final</th>
              <th className="p-3 text-center">Supervisor Marks</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((s) => (
                <tr key={s.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{s.arid}</td>
                  <td className="p-3 font-medium">{s.name}</td>
                  <td className="p-3">{s.project}</td>
                  <td className="p-3 text-center">
                    <input
                      type="number"
                      value={s.mid1}
                      onChange={(e) =>
                        handleChange(s.id, "mid1", e.target.value)
                      }
                      className="w-16 border rounded px-2 py-1 text-center"
                    />
                  </td>
                  <td className="p-3 text-center">
                    <input
                      type="number"
                      value={s.mid2}
                      onChange={(e) =>
                        handleChange(s.id, "mid2", e.target.value)
                      }
                      className="w-16 border rounded px-2 py-1 text-center"
                    />
                  </td>
                  <td className="p-3 text-center">
                    <input
                      type="number"
                      value={s.final}
                      onChange={(e) =>
                        handleChange(s.id, "final", e.target.value)
                      }
                      className="w-16 border rounded px-2 py-1 text-center"
                    />
                  </td>
                  <td className="p-3 text-center">
                    <input
                      type="number"
                      value={s.supMarks}
                      onChange={(e) =>
                        handleChange(s.id, "supMarks", e.target.value)
                      }
                      className="w-20 border rounded px-2 py-1 text-center"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="p-4 text-center text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
