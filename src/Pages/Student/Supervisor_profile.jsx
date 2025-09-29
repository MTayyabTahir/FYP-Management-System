import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function SupervisorProfileWithPlagiarism() {
  const { state: sup } = useLocation();

  const supervisor = sup || {
    id: 1,
    image: "https://via.placeholder.com/200",
    name: "Dr. Yasir Mehmood",
    expertise: "Software Engineering, Artificial Intelligence",
    description: {
      status: "HEC Approved Supervisor",
      qualification: "Ph.D, MS(CS), BSc (Hons) Computer Science",
      interests:
        "Situational Method Engineering, Requirement Prioritization, Component-Based Systems using AI, Highly Configurable Systems, Learning Content for Knowledge Management, Agile Practices, Feature Modeling",
    },
    totalSlots: 6,
    pendingSlots: 2,
    email: "yasir@uaar.edu.pk",
    phone: "+92 333 9876543",
    experience: "12 Years",
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [groupmates, setGroupmates] = useState([""]);
  const [file, setFile] = useState(null);
  const [checking, setChecking] = useState(false);
  const [plagPercent, setPlagPercent] = useState(null);
  const [plagResult, setPlagResult] = useState(null);
  const [threshold] = useState(30);

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    setFile(f);
    if (!f) return;
    setChecking(true);

    setTimeout(() => {
      const percent = Math.floor(Math.random() * 60) + 20;
      setPlagPercent(percent);
      setPlagResult({
        unique: 100 - percent,
        plag: percent,
        sections: [
          Math.floor(percent * 0.3),
          Math.floor(percent * 0.25),
          Math.floor(percent * 0.25),
          Math.floor(percent * 0.2),
        ],
      });
      setChecking(false);
    }, 1200);
  };

  const addGroupmate = () => {
    if (groupmates.length < 3) setGroupmates([...groupmates, ""]);
  };
  const removeGroupmate = (i) =>
    setGroupmates(groupmates.filter((_, idx) => idx !== i));
  const updateGroupmate = (i, val) =>
    setGroupmates(groupmates.map((g, idx) => (idx === i ? val : g)));

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    alert("Proposal submitted (demo). Check console.");
  };

  const pieData = {
    labels: ["Unique (%)", "Plagiarized (%)"],
    datasets: [
      {
        data: [plagResult?.unique || 100, plagResult?.plag || 0],
        backgroundColor: ["#16a34a", "#dc2626"],
      },
    ],
  };

  const barData = {
    labels: ["Intro", "Literature", "Method/Code", "Results"],
    datasets: [
      {
        label: "Section Similarity (%)",
        data: plagResult ? plagResult.sections : [0, 0, 0, 0],
        backgroundColor: "#16a34a",
      },
    ],
  };

  const badgeClass = (p) =>
    p >= 70
      ? "bg-red-600 text-white"
      : p >= 40
      ? "bg-yellow-400 text-black"
      : "bg-green-600 text-white";

  return (
    <div className="p-6 md:ml-64 pt-8 min-h-screen bg-green-50">
      {/* Supervisor Header */}
      <div className="bg-white p-6 rounded-2xl shadow mb-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img
            src={supervisor.image}
            alt={supervisor.name}
            className="h-28 w-28 rounded-full object-cover border-4 border-green-500 shadow"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800">
              {supervisor.name}
            </h1>
            <p className="text-sm text-green-700 font-medium">
              {supervisor.expertise}
            </p>

            {/* ✅ Structured Description */}
            <div className="mt-3 text-gray-700 space-y-1 text-sm leading-relaxed">
              <p>
                <strong>Status:</strong> {supervisor.description.status}
              </p>
              <p>
                <strong>Qualification:</strong>{" "}
                {supervisor.description.qualification}
              </p>
              <p>
                <strong>Areas of Interest:</strong> {supervisor.description.interests}
              </p>
            </div>

            {/* ✅ Info Badges */}
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <div className="px-3 py-1 rounded-lg bg-green-100">
                <strong>Email:</strong> {supervisor.email}
              </div>
              <div className="px-3 py-1 rounded-lg bg-green-100">
                <strong>Phone:</strong> {supervisor.phone}
              </div>
              <div className="px-3 py-1 rounded-lg bg-green-100">
                <strong>Experience:</strong> {supervisor.experience}
              </div>
              <div className="px-3 py-1 rounded-lg bg-green-100">
                <strong>Slots:</strong> {supervisor.pendingSlots}/
                {supervisor.totalSlots}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form + Report */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Proposal Form */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Submit Project Proposal
          </h2>
          <form onSubmit={handleFinalSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Project Title
              </label>
              <input
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 shadow-sm focus:ring-2 focus:ring-green-500"
                placeholder="Enter project title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Short Description
              </label>
              <textarea
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full border rounded-lg px-3 py-2 shadow-sm focus:ring-2 focus:ring-green-500"
                placeholder="Describe your project idea"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Upload Proposal
              </label>
              <input
                required
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleFileChange}
                className="w-full text-sm"
              />
            </div>
            {/* Groupmates */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Group Members (ARID numbers)
              </label>
              {groupmates.map((g, idx) => (
                <div key={idx} className="flex gap-2 items-center mt-2">
                  <input
                    required
                    value={g}
                    onChange={(e) => updateGroupmate(idx, e.target.value)}
                    placeholder={`Member ${idx + 1} ARID`}
                    className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                  />
                  {idx !== 0 && (
                    <button
                      type="button"
                      onClick={() => removeGroupmate(idx)}
                      className="text-red-600 text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addGroupmate}
                disabled={groupmates.length >= 3}
                className="mt-2 px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm"
              >
                + Add member
              </button>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
              >
                Submit Proposal
              </button>
            </div>
          </form>
        </div>

        {/* Plagiarism Report */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold text-green-700 mb-4">
            Plagiarism Report
          </h3>
          {checking ? (
            <p className="text-sm text-gray-600">Checking document...</p>
          ) : plagPercent === null ? (
            <p className="text-sm text-gray-600">
              Upload a file to run plagiarism check.
            </p>
          ) : (
            <>
              <div className="flex justify-between items-center mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${badgeClass(
                    plagPercent
                  )}`}
                >
                  Similarity: {plagPercent}%
                </span>
                <span className="text-sm">
                  {plagPercent >= threshold ? (
                    <span className="text-red-600 font-medium">Revise</span>
                  ) : (
                    <span className="text-green-600 font-medium">OK</span>
                  )}
                </span>
              </div>
              <div className="mb-6">
                <Pie data={pieData} />
              </div>
              <div>
                <Bar data={barData} />
              </div>
              <p className="mt-3 text-xs text-gray-500">
                Note: Demo plagiarism check. Integrate Turnitin/Plagiarism API
                for production.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
