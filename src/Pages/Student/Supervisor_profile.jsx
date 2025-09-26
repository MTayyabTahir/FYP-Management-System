import React, { useState, useEffect } from "react";
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
  // state and routing
  const { state: sup } = useLocation(); // pass supervisor object via navigate state
  // fallback sample supervisor if none passed
  const supervisor = sup || {
    id: 1,
    image: "https://via.placeholder.com/200",
    name: "Dr. Ahsan Arshad",
    expertise: "AI, ML, Computer Vision",
    description:
      "I'm a Mechatronics Engineer from UET Lahore, currently working as an Instrumentation and Control (I&C) Engineer at a thermal power plant. Alongside my engineering career, I’ve been teaching programming, Python, and AI for 3 years. I especially enjoy working with kids and beginners, but I’m also comfortable teaching advanced learners.",
    totalSlots: 6,
    pendingSlots: 3,
    email: "ahsan.arshad@uaar.edu.pk",
    phone: "0334-9106444",
    experience: "9 Years",
  };

  // form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [groupmates, setGroupmates] = useState([""]); // at least leader
  const [file, setFile] = useState(null);

  // plagiarism state
  const [checking, setChecking] = useState(false);
  const [plagPercent, setPlagPercent] = useState(null);
  const [plagResult, setPlagResult] = useState(null); // {unique, plag, sections: []}
  const [threshold] = useState(30); // threshold %

  // sample corpus to check overlaps with (client-side simple simulation)
  const sampleCorpus = [
    "machine learning techniques for image classification",
    "deep neural networks and convolutional networks for vision tasks",
    "design and implementation of agile software systems",
    "blockchain based secure data sharing in distributed systems",
    "statistical analysis and data preprocessing for big data",
  ];

  // -------- helpers ----------
  const readTextFile = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = (err) => reject(err);
      reader.readAsText(file);
    });

  // very simple word-overlap similarity with sampleCorpus
  const computeSimilarity = (text) => {
    const normalize = (s) =>
      s
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter(Boolean);

    const words = normalize(text);
    if (words.length === 0) return 0;

    // merge corpus into one big set
    const corpusWords = new Set(sampleCorpus.flatMap((c) => normalize(c)));

    let overlapCount = 0;
    words.forEach((w) => {
      if (corpusWords.has(w)) overlapCount++;
    });

    const percent = Math.round((overlapCount / words.length) * 100);
    return Math.min(100, percent);
  };

  // simulate section-wise similarity for bar chart
  const buildSectionData = (overall) => {
    // split into 4 sections with some variance
    const s1 = Math.max(0, Math.round(overall * (0.4 + Math.random() * 0.2)));
    const s2 = Math.max(0, Math.round(overall * (0.25 + Math.random() * 0.15)));
    const s3 = Math.max(0, Math.round(overall * (0.2 + Math.random() * 0.15)));
    const s4 = Math.max(0, Math.round(overall - s1 - s2 - s3));
    return [s1, s2, s3, s4];
  };

  // -------- handle file upload & run check ----------
  const handleFileChange = async (e) => {
    const f = e.target.files[0];
    setFile(f);
    setChecking(true);
    setPlagPercent(null);
    setPlagResult(null);

    try {
      // if text-like, read and compute; otherwise simulate
      if (!f) throw new Error("No file");
      const textLike = f.type === "text/plain" || f.name.endsWith(".txt");

      if (textLike) {
        const txt = await readTextFile(f);
        const percent = computeSimilarity(txt);
        const sections = buildSectionData(percent);
        setPlagPercent(percent);
        setPlagResult({
          unique: Math.max(0, 100 - percent),
          plag: percent,
          sections,
        });
      } else {
        // PDF/DOCX etc. — we simulate but keep reasonable values (you will replace with server check)
        // Simulate using a seed from file size
        const seed = (f.size % 50) + 10; // 10..60
        const percent = Math.min(95, Math.round(seed + Math.random() * 20));
        const sections = buildSectionData(percent);
        setPlagPercent(percent);
        setPlagResult({
          unique: Math.max(0, 100 - percent),
          plag: percent,
          sections,
        });
      }
    } catch (err) {
      console.error("Read error:", err);
      setPlagPercent(0);
      setPlagResult({ unique: 100, plag: 0, sections: [0, 0, 0, 0] });
    } finally {
      setChecking(false);
    }
  };

  // manage groupmates fields (max total members 3 including leader)
  const addGroupmate = () => {
    if (groupmates.length >= 3) return;
    setGroupmates([...groupmates, ""]);
  };
  const removeGroupmate = (i) =>
    setGroupmates(groupmates.filter((_, idx) => idx !== i));
  const updateGroupmate = (i, val) =>
    setGroupmates(groupmates.map((g, idx) => (idx === i ? val : g)));

  // final submit — currently logs, replace with API call
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    const payload = {
      supervisorId: supervisor.id,
      title,
      description,
      group: groupmates.filter(Boolean),
      fileName: file?.name || null,
      plagiarism: plagResult,
      submittedAt: new Date().toISOString(),
    };
    console.log("=== Proposal payload ===", payload);
    alert("Proposal submitted (demo). Check console for payload.");
    // TODO: send to backend -> axios.post("/api/proposals", payload)
    // After success - clear form or navigate
    setTitle("");
    setDescription("");
    setFile(null);
    setGroupmates([""]);
    setPlagPercent(null);
    setPlagResult(null);
  };

  // Chart data
  const pieData = {
    labels: ["Unique (%)", "Plagiarized (%)"],
    datasets: [
      {
        data: [
          plagResult ? plagResult.unique : 100,
          plagResult ? plagResult.plag : 0,
        ],
        backgroundColor: ["#16a34a", "#dc2626"],
        hoverOffset: 6,
      },
    ],
  };

  const barData = {
    labels: ["Intro", "Literature", "Method/Code", "Results"],
    datasets: [
      {
        label: "Section Similarity (%)",
        data: plagResult ? plagResult.sections : [0, 0, 0, 0],
        borderWidth: 1,
      },
    ],
  };

  // small helper for badge color
  const badgeClass = (p) =>
    p >= 70
      ? "bg-red-600 text-white"
      : p >= 40
      ? "bg-yellow-400 text-black"
      : "bg-green-600 text-white";

  return (
    <div className="p-6 md:ml-64 pt-8  min-h-screen">
      {/* Supervisor Header */}
      <div className="bg-white p-6 rounded-2xl shadow mb-6">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img
            src={supervisor.image}
            alt={supervisor.name}
            className="h-28 w-28 rounded-full object-cover border shadow"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800">
              {supervisor.name}
            </h1>
            <p className="text-sm text-green-700 font-medium">
              {supervisor.expertise}
            </p>
            <p className="text-gray-600 mt-2">
              I'm a Mechatronics Engineer from UET Lahore, currently working as
              an Instrumentation and Control (I&C) Engineer at a thermal power
              plant. Alongside my engineering career, I’ve been teaching
              programming, Python, and AI for 3 years. I especially enjoy
              working with kids and beginners, but I’m also comfortable teaching
              advanced learners.
            </p>

            <div className="mt-3 flex flex-wrap gap-4 text-sm">
              <div className="px-3 py-1 rounded-lg bg-gray-100">
                Total Slots: <strong>{supervisor.totalSlots}</strong>
              </div>
              <div className="px-3 py-1 rounded-lg bg-gray-100">
                Available:{" "}
                <strong className="text-green-700">
                  {supervisor.pendingSlots}
                </strong>
              </div>
              <div className="px-3 py-1 rounded-lg bg-gray-100">
                Experience: <strong> 9 years</strong>
              </div>
              <div className="px-3 py-1 rounded-lg bg-gray-100">
                Email: <strong>ahsanarshad@gmail.com</strong>
              </div>
              <div className="px-3 py-1 rounded-lg bg-gray-100">
                Phone: <strong>123432456</strong>
              </div>
            </div>
          </div>

          <div className="w-full md:w-56">
            <div className="p-4 bg-green-50 rounded-lg border border-green-100 text-center">
              <div className="text-sm text-gray-500">
                Supervisor Slot Status
              </div>
              <div className="mt-2 text-2xl font-bold text-green-800">
                {supervisor.pendingSlots}/{supervisor.totalSlots}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Remaining / Total
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submission + Plagiarism */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Form */}
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
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
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
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
                placeholder="Describe your project idea (brief)"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Upload Proposal (pdf/docx/txt)
              </label>
              <input
                required
                type="file"
                accept=".pdf,.doc,.docx,.txt"
                onChange={handleFileChange}
                className="w-full"
              />
              <div className="text-xs text-gray-500 mt-1">
                Tip: small .txt file will be checked client-side. PDF/DOCX will
                show simulated result (replace with server-side check later).
              </div>
            </div>

            {/* Groupmates ARIDs */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Group Members (ARID numbers) — include your ARID as first
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
                  {idx === 0 ? (
                    <span className="text-xs text-gray-500 px-2">Leader</span>
                  ) : (
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

              <div className="mt-2">
                <button
                  type="button"
                  disabled={groupmates.length >= 3}
                  onClick={addGroupmate}
                  className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm"
                >
                  + Add member (max 3)
                </button>
                <div className="text-xs text-gray-400 mt-1">
                  Max 3 members per group (including leader).
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Submit Proposal
              </button>
            </div>
          </form>
        </div>

        {/* Right: Plagiarism Report */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold text-green-700 mb-4">
            Plagiarism Report
          </h3>

          {checking ? (
            <div className="text-sm text-gray-600">Checking document...</div>
          ) : plagPercent === null ? (
            <div className="text-sm text-gray-600">
              Upload a file to run plagiarism check.
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-sm text-gray-500">Similarity</div>
                  <div
                    className={`mt-2 inline-block px-3 py-1 rounded-full font-semibold ${badgeClass(
                      plagPercent
                    )}`}
                  >
                    {plagPercent}%
                  </div>
                </div>
                <div className="text-right text-xs text-gray-500">
                  {plagPercent >= threshold ? (
                    <div>
                      <strong className="text-red-600">Action:</strong> Review /
                      Revise
                    </div>
                  ) : (
                    <div>
                      <strong className="text-green-600">Status:</strong> OK
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <Pie data={pieData} />
              </div>

              <div>
                <div className="text-sm text-gray-600 mb-2">
                  Section-wise similarity
                </div>
                <div>
                  <Bar data={barData} />
                </div>
              </div>

              <div className="mt-3 text-xs text-gray-500">
                Note: This is a client-side/simple check for demo. Replace with
                full server-side plagiarism engine (Turnitin/Plagiarism API) for
                production.
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
