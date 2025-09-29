export default function StudentResult() {
  // Filtered result data (Only FYP Final)
  const results = [
    {
      sem: "7",
      status: "Regular",
      code: "FYP-602",
      name: "Final Year Project - I (Final)",
      grade: "A",
      session: "Fall 2024",
    },
    {
      sem: "8",
      status: "Regular",
      code: "FYP-702",
      name: "Final Year Project - II (Final)",
      grade: "A-",
      session: "Spring 2025",
    },
  ];

  return (
    <div className="p-6 md:ml-64 pt-8 min-h-screen bg-green-50">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Student Result
      </h1>

      {/* Student Info Card */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Hamid Mazhar (21-ARID-417)
        </h2>
        <p className="text-gray-600 mb-4">
          <strong>Project Title:</strong> Sarcasm Detection
        </p>

        {/* Results Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-green-200 rounded-lg overflow-hidden">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Sem #</th>
                <th className="px-4 py-2 text-left">Course Status</th>
                <th className="px-4 py-2 text-left">Subject Code</th>
                <th className="px-4 py-2 text-left">Subject Name</th>
                <th className="px-4 py-2 text-left">Grade</th>
                <th className="px-4 py-2 text-left">Session Name</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-green-200">
              {results.map((res, index) => (
                <tr
                  key={index}
                  className="hover:bg-green-100 transition-colors"
                >
                  <td className="px-4 py-2 font-medium text-gray-700">
                    {res.sem}
                  </td>
                  <td className="px-4 py-2 text-gray-700">{res.status}</td>
                  <td className="px-4 py-2 text-gray-700">{res.code}</td>
                  <td className="px-4 py-2 text-gray-700">{res.name}</td>
                  <td className="px-4 py-2 font-semibold text-green-700">
                    {res.grade}
                  </td>
                  <td className="px-4 py-2 text-gray-700">{res.session}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
