import React, { useState } from "react";
import * as XLSX from "xlsx";

const FypMarksTable = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("name");
  const [isFinalized, setIsFinalized] = useState(false);

  const data = [
    {
      title: "Quran guide",
      arid: "21-ARID-605",
      name: "Muhammad Abdullah",
      midPoster: 7,
      supMarks: 7,
      midTotal: 14,
      eval1: 7,
      eval2: 7,
      total: 28,
    },
    {
      title: "Sarcasm detection",
      arid: "21-ARID-417",
      name: "Hamid Mazhar",
      midPoster: 7.5,
      supMarks: 6,
      midTotal: 13.5,
      eval1: 8,
      eval2: 7,
      total: 28.5,
    },
    {
      title: "Ocean EYE: Intelligent Detection of marine species",
      arid: "21-ARID-535",
      name: "Abdul Rehman",
      midPoster: 8,
      supMarks: 9,
      midTotal: 17,
      eval1: 9,
      eval2: 9,
      total: 35,
    },
  ];

  const filteredData = data.filter((item) => {
    if (filter === "name") {
      return item.name.toLowerCase().includes(search.toLowerCase());
    } else if (filter === "arid") {
      return item.arid.toLowerCase().includes(search.toLowerCase());
    } else {
      return item.title.toLowerCase().includes(search.toLowerCase());
    }
  });

  // Export to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "FYP Marks");
    XLSX.writeFile(workbook, "FYP_Marks.xlsx");
  };

  // Print Draft
  const printDraft = () => {
    window.print();
  };

  // Finalize Results
  const finalizeResults = () => {
    if (window.confirm("Are you sure you want to finalize the results?")) {
      setIsFinalized(true);
      alert("Results have been finalized successfully!");
    }
  };

  return (
    <div className="flex ml-64">
      {/* Main Content */}
      <main className="p-6 w-full">
        <h1 className="text-2xl font-bold text-green-800 mb-6">
          FYP Marks Management
        </h1>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 mb-6">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-green-500 rounded-md p-2 text-green-700"
          >
            <option value="name">Search by Name</option>
            <option value="arid">Search by Arid#</option>
            <option value="title">Search by Title</option>
          </select>
          <input
            type="text"
            placeholder="Type to search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-green-500 rounded-md p-2 w-72 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          {/* Buttons */}
          <button
            onClick={exportToExcel}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow"
          >
            Export to Excel
          </button>
          <button
            onClick={printDraft}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md shadow"
          >
            Print as Draft
          </button>
          <button
            onClick={finalizeResults}
            disabled={isFinalized}
            className={`px-4 py-2 rounded-md shadow ${
              isFinalized
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-red-600 hover:bg-red-700 text-white"
            }`}
          >
            {isFinalized ? "Finalized" : "Finalize Results"}
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-green-700 w-full shadow-lg">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="border border-green-600 px-4 py-2">
                  Project Title
                </th>
                <th className="border border-green-600 px-4 py-2">Arid #</th>
                <th className="border border-green-600 px-4 py-2">Full Name</th>
                <th className="border border-green-600 px-4 py-2">
                  Mid + Poster
                </th>
                <th className="border border-green-600 px-4 py-2">
                  Supervisor Marks
                </th>
                <th className="border border-green-600 px-4 py-2">Mid Total</th>
                <th className="border border-green-600 px-4 py-2">
                  Evaluator I
                </th>
                <th className="border border-green-600 px-4 py-2">
                  Evaluator II
                </th>
                <th className="border border-green-600 px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-green-100 transition duration-200"
                >
                  <td className="border border-green-600 px-4 py-2">
                    {row.title}
                  </td>
                  <td className="border border-green-600 px-4 py-2">
                    {row.arid}
                  </td>
                  <td className="border border-green-600 px-4 py-2">
                    {row.name}
                  </td>
                  <td className="border border-green-600 px-4 py-2">
                    {row.midPoster}
                  </td>
                  <td className="border border-green-600 px-4 py-2">
                    {row.supMarks}
                  </td>
                  <td className="border border-green-600 px-4 py-2">
                    {row.midTotal}
                  </td>
                  <td className="border border-green-600 px-4 py-2">
                    {row.eval1}
                  </td>
                  <td className="border border-green-600 px-4 py-2">
                    {row.eval2}
                  </td>
                  <td className="border border-green-600 px-4 py-2 font-bold text-green-800">
                    {row.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default FypMarksTable;
