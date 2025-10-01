import { useState } from "react";
import { FileText, CheckCircle, XCircle, Download } from "lucide-react";

export default function SupervisorAssignments() {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "Proposal Document",
      student: "Hamid Mazhar",
      arid: "21-ARID-417",
      project: "Sarcasm Detection",
      file: "proposal.pdf",
      status: "Pending",
    },
    {
      id: 2,
      title: "Literature Review",
      student: "Abdul Rehman",
      arid: "21-ARID-535",
      project: "Ocean EYE",
      file: "review.docx",
      status: "Pending",
    },
    {
      id: 3,
      title: "Design Report",
      student: "Muhammad Abdullah",
      arid: "21-ARID-605",
      project: "Quran Guide",
      file: "design.pdf",
      status: "Accepted",
    },
  ]);

  const handleAction = (id, action) => {
    setAssignments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: action } : a))
    );
  };

  return (
    <div className="p-2 md:ml-64 pt-8 min-h-screen">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Review Assignments
      </h1>

      <div className="overflow-x-auto bg-white shadow rounded-2xl">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-green-700 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Title</th>
              <th className="px-4 py-3 text-left">Student</th>
              <th className="px-4 py-3 text-left">Arid #</th>
              <th className="px-4 py-3 text-left">Project</th>
              <th className="px-4 py-3 text-left">File</th>
              <th className="px-4 py-3 text-center">Status</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((a) => (
              <tr key={a.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-4 py-3 flex items-center gap-2">
                  <FileText size={18} className="text-green-600" />
                  {a.title}
                </td>
                <td className="px-4 py-3">{a.student}</td>
                <td className="px-4 py-3">{a.arid}</td>
                <td className="px-4 py-3">{a.project}</td>
                <td className="px-4 py-3">
                  <a
                    href="#"
                    className="flex items-center gap-1 text-green-700 hover:underline"
                  >
                    <Download size={16} /> {a.file}
                  </a>
                </td>
                <td className="px-4 py-3 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      a.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : a.status === "Accepted"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {a.status}
                  </span>
                </td>
                <td className="px-4 py-3 flex justify-center gap-2">
                  <button
                    onClick={() => handleAction(a.id, "Accepted")}
                    className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 flex items-center gap-1"
                  >
                    <CheckCircle size={16} /> Accept
                  </button>
                  <button
                    onClick={() => handleAction(a.id, "Rejected")}
                    className="px-3 py-1 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 flex items-center gap-1"
                  >
                    <XCircle size={16} /> Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
