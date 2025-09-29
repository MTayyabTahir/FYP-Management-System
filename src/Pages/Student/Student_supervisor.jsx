import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Briefcase } from "lucide-react";

export default function StudentSupervisors() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // ✅ Supervisors data with professional faculty images
  const supervisors = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg",
      name: "Dr. Ahsan Arshad",
      expertise: "Artificial Intelligence, Machine Learning",
      description:
        "Expert in AI/ML with 12+ years of research and supervision.",
      totalSlots: 6,
      pendingSlots: 2,
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg",
      name: "Dr. Sarah Khan",
      expertise: "Software Engineering, Cloud Computing",
      description:
        "Specializes in large-scale system architecture and cloud platforms.",
      totalSlots: 6,
      pendingSlots: 4,
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      name: "Dr. Hamid Raza",
      expertise: "Blockchain, Cybersecurity",
      description:
        "Working on secure distributed systems with blockchain applications.",
      totalSlots: 6,
      pendingSlots: 1,
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
      name: "Dr. Nadia Yousaf",
      expertise: "Data Science, Big Data Analytics",
      description:
        "Focuses on large data-driven solutions and predictive modeling.",
      totalSlots: 6,
      pendingSlots: 3,
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg",
      name: "Dr. Imran Shah",
      expertise: "Computer Vision, Graphics",
      description:
        "Expert in image processing, OpenGL, and computer graphics.",
      totalSlots: 6,
      pendingSlots: 5,
    },
  ];

  // ✅ Filter supervisors by name or expertise
  const filtered = supervisors.filter(
    (sup) =>
      sup.name.toLowerCase().includes(search.toLowerCase()) ||
      sup.expertise.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 md:ml-64 pt-8 min-h-screen bg-green-50">
      <h1 className="text-3xl font-bold text-green-800 mb-6 text-center">
        Available Supervisors
      </h1>

      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="🔍 Search by name or expertise..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-green-400 rounded-full px-5 py-3 w-full max-w-xl focus:ring-2 focus:ring-green-500 outline-none shadow-sm"
        />
      </div>

      {/* Supervisors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((sup) => (
          <div
            key={sup.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            {/* Image */}
            <div className="h-40 bg-green-100 flex items-center justify-center">
              <img
                src={sup.image}
                alt={sup.name}
                className="h-28 w-28 rounded-full border-4 border-green-500 object-cover shadow-md"
              />
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center">
                {sup.name}
              </h3>
              <p className="text-center text-sm text-green-600 font-medium flex items-center justify-center gap-1 mt-1">
                <Briefcase size={14} /> {sup.expertise}
              </p>

              <p className="text-sm text-gray-600 mt-3 line-clamp-3 text-center">
                {sup.description}
              </p>

              {/* Slots */}
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Slots Filled:</span>
                  <span className="font-semibold text-green-700">
                    {sup.pendingSlots}/{sup.totalSlots}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{
                      width: `${(sup.pendingSlots / sup.totalSlots) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={() =>
                  navigate(`/student/supervisors-profile`, { state: sup })
                }
                className="mt-6 w-full py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition shadow-md"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
