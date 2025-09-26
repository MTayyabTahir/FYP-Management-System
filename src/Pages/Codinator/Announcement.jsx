import { useState } from "react";
import { Plus, X } from "lucide-react";

export default function Announcements() {
  const [open, setOpen] = useState(false);
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Final Year Project Submission",
      message:
        "All students must submit their FYP report by 30th September. Late submissions will not be accepted.",
      date: "2025-09-14",
      postedBy: "Coordinator",
    },
    {
      id: 2,
      title: "Supervisor Meeting",
      message:
        "Supervisors are requested to schedule weekly meetings with their assigned students.",
      date: "2025-09-10",
      postedBy: "Coordinator",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    message: "",
    date: "",
  });

  const handleAddAnnouncement = () => {
    if (!formData.title || !formData.message) return;
    const newAnnouncement = {
      id: announcements.length + 1,
      ...formData,
      postedBy: "Coordinator",
    };
    setAnnouncements([newAnnouncement, ...announcements]);
    setFormData({ title: "", message: "", date: "" });
    setOpen(false);
  };

  return (
    <div className="ml-64 p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Announcements</h2>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
        >
          <Plus size={18} /> New Announcement
        </button>
      </div>

      {/* Announcements List */}
      <div className="bg-white rounded-xl shadow border border-gray-200 divide-y">
        {announcements.length > 0 ? (
          announcements.map((a) => (
            <div key={a.id} className="p-5 hover:bg-gray-50 transition">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {a.title}
                </h3>
                <span className="text-sm text-gray-500">{a.date}</span>
              </div>
              <p className="text-gray-700">{a.message}</p>
              <p className="text-xs text-gray-500 mt-2">
                Posted by: {a.postedBy}
              </p>
            </div>
          ))
        ) : (
          <p className="p-6 text-gray-500 text-center">No announcements yet.</p>
        )}
      </div>

      {/* Add Announcement Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-bold mb-4">Add New Announcement</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-lg border hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddAnnouncement}
                  className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                >
                  Post Announcement
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
