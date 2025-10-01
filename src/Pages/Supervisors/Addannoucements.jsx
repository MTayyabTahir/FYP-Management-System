import { useState } from "react";
import { Megaphone, Plus, X } from "lucide-react";

export default function SupervisorAnnouncements() {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Final Year Project Mid Evaluation",
      description: "All groups must submit mid reports before 25th September.",
      date: "2025-09-20",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handleAdd = () => {
    if (!newAnnouncement.title || !newAnnouncement.description) return;

    setAnnouncements([
      ...announcements,
      { id: announcements.length + 1, ...newAnnouncement },
    ]);
    setNewAnnouncement({ title: "", description: "", date: "" });
    setShowModal(false);
  };

  return (
    <div className="p-6 md:ml-64 pt-8  min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-800 flex items-center gap-2">
          <Megaphone size={26} /> Supervisor Announcements
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          <Plus size={18} /> Add Announcement
        </button>
      </div>

      {/* Announcements List */}
      <div className="grid gap-4">
        {announcements.map((a) => (
          <div
            key={a.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold text-green-700">{a.title}</h2>
            <p className="text-gray-600 mt-1">{a.description}</p>
            <p className="text-sm text-gray-400 mt-2">
              📅 {a.date || "No Date Provided"}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold text-green-700 mb-4">
              Add New Announcement
            </h2>

            {/* Form */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                value={newAnnouncement.title}
                onChange={(e) =>
                  setNewAnnouncement({
                    ...newAnnouncement,
                    title: e.target.value,
                  })
                }
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
              />
              <textarea
                placeholder="Description"
                rows="3"
                value={newAnnouncement.description}
                onChange={(e) =>
                  setNewAnnouncement({
                    ...newAnnouncement,
                    description: e.target.value,
                  })
                }
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
              />
              <input
                type="date"
                value={newAnnouncement.date}
                onChange={(e) =>
                  setNewAnnouncement({
                    ...newAnnouncement,
                    date: e.target.value,
                  })
                }
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleAdd}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
