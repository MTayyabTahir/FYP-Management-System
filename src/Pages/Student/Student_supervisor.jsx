import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentSupervisors() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // ✅ yahan () lagana zaroori hai

  // Dummy supervisors data
  const supervisors = [
    {
      id: 1,
      image: "https://picsum.photos/200/200",
      name: "Dr. Ahsan Arshad",
      expertise: "Artificial Intelligence, Machine Learning",
      description:
        "Expert in AI/ML with 12+ years of research and supervision.",
      totalSlots: 6,
      pendingSlots: 2,
    },
    {
      id: 2,
      image: "https://picsum.photos/400/300",
      name: "Dr. Sarah Khan",
      expertise: "Software Engineering, Cloud Computing",
      description:
        "Specializes in large-scale system architecture and cloud platforms.",
      totalSlots: 6,
      pendingSlots: 4,
    },
    {
      id: 3,
      image: "https://picsum.photos/100/300",
      name: "Dr. Hamid Raza",
      expertise: "Blockchain, Cybersecurity",
      description:
        "Working on secure distributed systems with blockchain applications.",
      totalSlots: 6,
      pendingSlots: 1,
    },
    {
      id: 4,
      image: "https://picsum.photos/200/500",
      name: "Dr. Nadia Yousaf",
      expertise: "Data Science, Big Data Analytics",
      description:
        "Focuses on large data-driven solutions and predictive modeling.",
      totalSlots: 6,
      pendingSlots: 3,
    },
    {
      id: 5,
      image: "https://picsum.photos/250/300",
      name: "Dr. Imran Shah",
      expertise: "Computer Vision, Graphics",
      description: "Expert in image processing, OpenGL, and computer graphics.",
      totalSlots: 6,
      pendingSlots: 5,
    },
  ];

  // Filter supervisors by name or expertise
  const filtered = supervisors.filter(
    (sup) =>
      sup.name.toLowerCase().includes(search.toLowerCase()) ||
      sup.expertise.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 md:ml-64 pt-8  min-h-screen">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        Available Supervisors
      </h1>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by name or expertise..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-green-500 rounded-lg px-4 py-2 w-full max-w-lg focus:ring-2 focus:ring-green-400 outline-none"
        />
      </div>

      {/* Supervisors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((sup) => (
          <div
            key={sup.id}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={sup.image}
                alt={sup.name}
                className="h-16 w-16 rounded-full object-cover border"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {sup.name}
                </h3>
                <p className="text-sm text-green-600 font-medium">
                  {sup.expertise}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
              {sup.description}
            </p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">
                Total Slots:{" "}
                <span className="font-semibold text-gray-800">
                  {sup.totalSlots}
                </span>
              </span>
              <span className="text-gray-500">
                Pending:{" "}
                <span className="font-semibold text-green-700">
                  {sup.pendingSlots}
                </span>
              </span>
            </div>

            {/* Future Action */}
            <button
              onClick={() =>
                navigate(`/student/supervisors-profile`, { state: sup })
              }
              className="mt-4 w-full py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
