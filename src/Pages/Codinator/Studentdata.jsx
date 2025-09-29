import { useState } from "react";
import { Search } from "lucide-react";

export default function StudentList() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 9;

  const [students, setStudents] = useState([
    { id: 1, name: "Ali Khan", rollNumber: "ARID-2021-001", description: "Working on AI-based recommendation system.", supervisor: "Dr. Ahmed", projectIdea: "Movie recommendation system using ML", marks: "" },
    { id: 2, name: "Sara Ahmed", rollNumber: "ARID-2021-045", description: "Exploring blockchain in supply chain.", supervisor: "Dr. Fatima", projectIdea: "Blockchain for Food Supply Chain", marks: "" },
    { id: 3, name: "Hassan Raza", rollNumber: "ARID-2021-078", description: "Web-based ERP solution for SMEs.", supervisor: "Sir Usman", projectIdea: "ERP for small businesses", marks: "" },
    { id: 4, name: "Zainab Ali", rollNumber: "ARID-2021-089", description: "Smart healthcare system.", supervisor: "Dr. Ahmed", projectIdea: "AI in healthcare", marks: "" },
    { id: 5, name: "Usman Tariq", rollNumber: "ARID-2021-102", description: "IoT-based smart agriculture.", supervisor: "Dr. Fatima", projectIdea: "Smart farming system", marks: "" },
    { id: 6, name: "Ayesha Khan", rollNumber: "ARID-2021-115", description: "E-learning platform.", supervisor: "Sir Usman", projectIdea: "Online education portal", marks: "" },
    { id: 7, name: "Bilal Shah", rollNumber: "ARID-2021-122", description: "AI chatbot for universities.", supervisor: "Dr. Ahmed", projectIdea: "University chatbot", marks: "" },
    { id: 8, name: "Mariam Noor", rollNumber: "ARID-2021-135", description: "Mobile banking app.", supervisor: "Dr. Fatima", projectIdea: "Fintech app", marks: "" },
    { id: 9, name: "Omar Riaz", rollNumber: "ARID-2021-140", description: "Machine learning for weather.", supervisor: "Sir Usman", projectIdea: "Weather prediction ML", marks: "" },
    { id: 10, name: "Hina Iqbal", rollNumber: "ARID-2021-155", description: "Blockchain voting system.", supervisor: "Dr. Ahmed", projectIdea: "Secure e-voting", marks: "" },
  ]);

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.rollNumber.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
  const startIdx = (currentPage - 1) * studentsPerPage;
  const currentStudents = filteredStudents.slice(startIdx, startIdx + studentsPerPage);

  // Update marks input
  const handleMarksChange = (id, value) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, marks: value } : s))
    );
  };

  return (
    <div className="ml-64 p-6 bg-gray-50 min-h-screen">
      {/* Header + Search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h2 className="text-3xl font-bold text-green-700">🎓 Students</h2>
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search by Name or ARID Number..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
            className="w-full border border-green-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Student Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-200">
        <table className="w-full text-left text-sm text-gray-700">
          <thead className="bg-green-100 text-green-700 uppercase text-sm font-semibold">
            <tr>
              <th className="px-6 py-3">Sr #</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Roll Number</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">Supervisor</th>
              <th className="px-6 py-3">Project Idea</th>
              <th className="px-6 py-3">Marks</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.length > 0 ? (
              currentStudents.map((student, idx) => (
                <tr
                  key={student.id}
                  className={`${idx % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-green-50 transition`}
                >
                  <td className="px-6 py-4 font-medium text-green-700">
                    {idx + 1 + (currentPage - 1) * studentsPerPage}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">{student.name}</td>
                  <td className="px-6 py-4 text-gray-600">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">{student.rollNumber}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{student.description}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-green-50 border border-green-200 text-green-700 rounded-lg text-xs font-semibold">{student.supervisor}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700 italic">{student.projectIdea}</td>
                  <td className="px-6 py-4">
                    <input
                      type="number"
                      value={student.marks}
                      onChange={(e) => handleMarksChange(student.id, e.target.value)}
                      className="w-20 border border-green-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="0"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center py-8 text-gray-500 text-sm">No students found.</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-3 py-1 rounded-lg bg-green-100 text-green-700 hover:bg-green-200"
            >
              &lt;
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-lg ${currentPage === i + 1 ? "bg-green-600 text-white" : "bg-green-100 text-green-700 hover:bg-green-200"}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="px-3 py-1 rounded-lg bg-green-100 text-green-700 hover:bg-green-200"
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
