import { useParams } from "react-router-dom";
import { Mail, Phone, MapPin, Users, Download } from "lucide-react";
import * as XLSX from "xlsx";

export default function SupervisorProfile() {
  const { id } = useParams();

  // Hardcoded Supervisor Data
  const supervisor = {
    id: id,
    image: "https://picsum.photos/200/300",
    name: "Mr. Muhammad Ahsan Arshad",
    designation: "Lecturer",
    specialization: "Software Engineering",
    bio: "Mr. Ahsan Arshad specializes in Agile Methodologies, Blockchain Technologies, Requirement Engineering & OOP. With several years of academic and industry experience, he has supervised multiple software engineering projects, guiding students in research and applied solutions.",
    phone: "+92 300 1234567",
    email: "ahsan.arshad@uaar.edu.pk",
    address: "UIIT, PMAS-Arid Agriculture University, Rawalpindi",
    slots: 5,
    remainingSlots: 2,
  };

  // Grouped Students
  const groups = [
    {
      group: "A",
      project: "AI-Based Chatbot for Universities",
      members: [
        { aridNo: "21-ARID-1234", name: "Ahmad Sajjad" },
        { aridNo: "21-ARID-5678", name: "Tayyab Tahir" },
        { aridNo: "21-ARID-9101", name: "Haseeb Ahmad" },
      ],
    },
    {
      group: "B",
      project: "E-commerce Platform with AI Recommendations",
      members: [
        { aridNo: "21-ARID-2234", name: "Ali Raza" },
        { aridNo: "21-ARID-2678", name: "Bilal Khan" },
        { aridNo: "21-ARID-2101", name: "Hamza Yousaf" },
      ],
    },
    {
      group: "C",
      project: "Machine Learning Model for Agriculture",
      members: [
        { aridNo: "21-ARID-3234", name: "Abdul Rehman" },
        { aridNo: "21-ARID-3678", name: "Usman Tariq" },
        { aridNo: "21-ARID-3101", name: "Nouman Ahmed" },
      ],
    },
  ];

  // Excel Download Function
  const downloadExcel = () => {
    const data = groups.flatMap((g) =>
      g.members.map((m) => ({
        Group: g.group,
        Project: g.project,
        AridNo: m.aridNo,
        Name: m.name,
      }))
    );

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
    XLSX.writeFile(workbook, "Supervisor_Students.xlsx");
  };

  return (
    <div className="p-6 md:ml-64 pt-20 md:pt-6 space-y-6">
      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-6 border border-gray-200">
        <img
          src={supervisor.image}
          alt={supervisor.name}
          className="h-32 w-32 rounded-full object-cover border-4 border-green-600 shadow"
        />

        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800">
            {supervisor.name}
          </h2>
          <p className="text-green-600 font-medium">{supervisor.designation}</p>
          <p className="text-sm text-gray-600 mt-1">
            Specialization: {supervisor.specialization}
          </p>
          <p className="text-gray-700 mt-3 leading-relaxed">{supervisor.bio}</p>

          {/* Contact */}
          <div className="grid sm:grid-cols-2 gap-4 mt-4 text-sm text-gray-700">
            <p className="flex items-center gap-2">
              <Phone size={16} className="text-green-600" /> {supervisor.phone}
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="text-green-600" /> {supervisor.email}
            </p>
            <p className="flex items-center gap-2 col-span-2">
              <MapPin size={16} className="text-green-600" />{" "}
              {supervisor.address}
            </p>
          </div>

          {/* Slots */}
          <div className="flex gap-6 mt-5">
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg shadow text-sm font-semibold">
              Total Slots: {supervisor.slots}
            </div>
            <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg shadow text-sm font-semibold">
              Remaining: {supervisor.remainingSlots}
            </div>
          </div>
        </div>
      </div>

      {/* Students Section */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Users size={20} className="text-green-600" /> Supervised Groups
          </h3>
          <button
            onClick={downloadExcel}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow text-sm"
          >
            <Download size={16} /> Download Excel
          </button>
        </div>

        {/* Grouped Students */}
        <div className="space-y-6">
          {groups.map((g, idx) => (
            <div
              key={idx}
              className="border rounded-xl overflow-hidden shadow-sm"
            >
              <div className="bg-green-600 text-white px-4 py-2 font-semibold flex justify-between">
                <span>Group {g.group}</span>
                <span>Project: {g.project}</span>
              </div>
              <table className="w-full border-collapse text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Arid No</th>
                    <th className="px-4 py-2 text-left">Name</th>
                  </tr>
                </thead>
                <tbody>
                  {g.members.map((m, i) => (
                    <tr
                      key={i}
                      className="odd:bg-white even:bg-gray-50 hover:bg-green-50 transition"
                    >
                      <td className="px-4 py-2 border">{m.aridNo}</td>
                      <td className="px-4 py-2 border">{m.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
