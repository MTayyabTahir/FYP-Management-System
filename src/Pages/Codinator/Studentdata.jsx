import { useState } from "react";
import { Search } from "lucide-react";

export default function StudentList() {
  const [search, setSearch] = useState("");

  const students = [
    {
      id: 1,
      name: "Ali Khan",
      rollNumber: "ARID-2021-001",
      description: "Working on AI-based recommendation system.",
      supervisor: "Dr. Ahmed",
      projectIdea: "Movie recommendation system using ML",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      rollNumber: "ARID-2021-045",
      description: "Exploring blockchain in supply chain.",
      supervisor: "Dr. Fatima",
      projectIdea: "Blockchain for Food Supply Chain",
    },
    {
      id: 3,
      name: "Hassan Raza",
      rollNumber: "ARID-2021-078",
      description: "Web-based ERP solution for SMEs.",
      supervisor: "Sir Usman",
      projectIdea: "ERP for small businesses",
    },
  ];

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.rollNumber.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="ml-64 p-6 bg-gray-50 min-h-screen">
      {/* Header + Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Students</h2>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search by Name or Arid Number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Student Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow border border-gray-200">
        <table className="w-full text-left text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Roll Number</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">Supervisor</th>
              <th className="px-6 py-3">Project Idea</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium">{student.name}</td>
                  <td className="px-6 py-4">{student.rollNumber}</td>
                  <td className="px-6 py-4">{student.description}</td>
                  <td className="px-6 py-4">{student.supervisor}</td>
                  <td className="px-6 py-4">{student.projectIdea}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">
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
