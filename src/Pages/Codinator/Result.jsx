import React, { useState } from "react";
import * as XLSX from "xlsx";

const FypMarksTable = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("name");
  const [isFinalized, setIsFinalized] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const data = [
    { title: "Quran guide", arid: "21-ARID-605", name: "Muhammad Abdullah", midPoster: 7, supMarks: 7, midTotal: 14, eval1: 7, eval2: 7, total: 28 },
    { title: "Sarcasm detection", arid: "21-ARID-417", name: "Hamid Mazhar", midPoster: 7.5, supMarks: 6, midTotal: 13.5, eval1: 8, eval2: 7, total: 28.5 },
    { title: "Ocean EYE", arid: "21-ARID-535", name: "Abdul Rehman", midPoster: 8, supMarks: 9, midTotal: 17, eval1: 9, eval2: 9, total: 35 },
    { title: "AI Chatbot", arid: "21-ARID-521", name: "Sara Khan", midPoster: 7, supMarks: 8, midTotal: 15, eval1: 8, eval2: 9, total: 32 },
    { title: "Smart Agriculture", arid: "21-ARID-603", name: "Ali Raza", midPoster: 8, supMarks: 7, midTotal: 15, eval1: 7, eval2: 8, total: 30 },
    { title: "Face Recognition", arid: "21-ARID-512", name: "Hassan Ali", midPoster: 7.5, supMarks: 8, midTotal: 15.5, eval1: 8, eval2: 8, total: 31.5 },
    { title: "Virtual Reality", arid: "21-ARID-540", name: "Ayesha Khan", midPoster: 8, supMarks: 7, midTotal: 15, eval1: 8, eval2: 8, total: 31 },
    { title: "Blockchain Voting", arid: "21-ARID-550", name: "Zain Ahmed", midPoster: 7, supMarks: 6.5, midTotal: 13.5, eval1: 7, eval2: 8, total: 28.5 },
    { title: "IoT Home Automation", arid: "21-ARID-560", name: "Muzna Hashmi", midPoster: 8, supMarks: 8, midTotal: 16, eval1: 9, eval2: 9, total: 34 },
    { title: "Emotion Detection", arid: "21-ARID-570", name: "Tariq Javed", midPoster: 7, supMarks: 7, midTotal: 14, eval1: 7, eval2: 7, total: 28 },
  ];

  // Filter data
  const filteredData = data.filter((item) => {
    if (filter === "name") return item.name.toLowerCase().includes(search.toLowerCase());
    if (filter === "arid") return item.arid.toLowerCase().includes(search.toLowerCase());
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "FYP Marks");
    XLSX.writeFile(workbook, "FYP_Marks.xlsx");
  };

  const printDraft = () => window.print();
  const finalizeResults = () => {
    if (window.confirm("Are you sure you want to finalize the results?")) {
      setIsFinalized(true);
      alert("Results have been finalized successfully!");
    }
  };

  return (
    <div className="flex ml-64 p-6">
      <main className="w-full">
        <h1 className="text-3xl font-bold text-green-800 mb-6">
          FYP Marks Management
        </h1>

        {/* Search */}
        <div className="flex flex-wrap gap-4 mb-4 items-center">
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
          <button
            onClick={exportToExcel}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow"
          >
            Export to Excel
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto shadow-lg rounded-lg mb-4">
          <table className="table-auto w-full border-collapse border border-green-700">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className="border border-green-600 px-4 py-2">Sr No.</th>
                <th className="border border-green-600 px-4 py-2">Project Title</th>
                <th className="border border-green-600 px-4 py-2">Arid #</th>
                <th className="border border-green-600 px-4 py-2">Full Name</th>
                <th className="border border-green-600 px-4 py-2">Mid + Poster</th>
                <th className="border border-green-600 px-4 py-2">Supervisor Marks</th>
                <th className="border border-green-600 px-4 py-2">Mid Total</th>
                <th className="border border-green-600 px-4 py-2">Evaluator I</th>
                <th className="border border-green-600 px-4 py-2">Evaluator II</th>
                <th className="border border-green-600 px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((row, i) => (
                <tr key={i} className="hover:bg-green-100 transition duration-200">
                  <td className="border border-green-600 px-4 py-2">{(currentPage - 1) * itemsPerPage + i + 1}</td>
                  <td className="border border-green-600 px-4 py-2">{row.title}</td>
                  <td className="border border-green-600 px-4 py-2">{row.arid}</td>
                  <td className="border border-green-600 px-4 py-2">{row.name}</td>
                  <td className="border border-green-600 px-4 py-2">{row.midPoster}</td>
                  <td className="border border-green-600 px-4 py-2">{row.supMarks}</td>
                  <td className="border border-green-600 px-4 py-2">{row.midTotal}</td>
                  <td className="border border-green-600 px-4 py-2">{row.eval1}</td>
                  <td className="border border-green-600 px-4 py-2">{row.eval2}</td>
                  <td className="border border-green-600 px-4 py-2 font-bold text-green-800">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mb-4">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="px-3 py-1 rounded-md bg-gray-300 hover:bg-gray-400"
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="px-2">{currentPage} / {totalPages}</span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="px-3 py-1 rounded-md bg-gray-300 hover:bg-gray-400"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        {/* Bottom Actions (Right Aligned) */}
        <div className="flex justify-end flex-wrap gap-4">
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
      </main>
    </div>
  );
};

export default FypMarksTable;
