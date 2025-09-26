export default function StudentGroupmates() {
  // Dummy hardcoded groupmates data
  const groupmates = [
    {
      id: 1,
      name: "Hamid Mazhar",
      arid: "21-ARID-417",
      project: "Sarcasm Detection",
      role: "Leader",
    },
    {
      id: 2,
      name: "Abdul Rehman",
      arid: "21-ARID-535",
      project: "Sarcasm Detection",
      role: "Member",
    },
    {
      id: 3,
      name: "Ali Raza",
      arid: "21-ARID-602",
      project: "Sarcasm Detection",
      role: "Member",
    },
  ];

  return (
    <div className="p-6 md:ml-64 pt-8 min-h-screen ">
      <h1 className="text-3xl font-bold text-green-800 mb-6">My Groupmates</h1>

      <div className="overflow-x-auto bg-white rounded-2xl shadow">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-green-700 text-white text-sm">
            <tr>
              <th className="px-4 py-3 text-left">Arid #</th>
              <th className="px-4 py-3 text-left">Full Name</th>
              <th className="px-4 py-3 text-left">Project Title</th>
              <th className="px-4 py-3 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {groupmates.map((mate, i) => (
              <tr
                key={mate.id}
                className={`text-sm ${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-green-50`}
              >
                <td className="px-4 py-3 font-medium text-gray-700">
                  {mate.arid}
                </td>
                <td className="px-4 py-3 text-gray-800">{mate.name}</td>
                <td className="px-4 py-3 text-gray-700">{mate.project}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      mate.role === "Leader"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {mate.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
