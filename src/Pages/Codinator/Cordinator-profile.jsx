import { useState } from "react";
import { Pencil, Lock, Camera } from "lucide-react";

export default function CoordinatorProfile() {
  const [coordinator, setCoordinator] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+92 300 1234567",
    specialization: "Computer Science",
    bio: "I am a dedicated coordinator helping students in their academic journey.",
    designation: "Coordinator",
    image: "https://via.placeholder.com/150",
  });

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [formData, setFormData] = useState(coordinator);

  // Input handle
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Save changes
  const handleSave = () => {
    setCoordinator(formData);
    setIsEditOpen(false);
    // API call => axios.put("/api/coordinator/update", formData);
  };

  return (
    <div className="p-6 ml-44 lg:p-10">
      <div className="max-w-3xl mx-auto  dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl p-8">
        {/* Profile Image Centered */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={coordinator.image}
              alt="Coordinator"
              className="w-32 h-32 rounded-full object-cover border-4 border-green-500 shadow-md"
            />
            <button
              onClick={() => setIsEditOpen(true)}
              className="absolute bottom-2 right-2 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full shadow-md"
            >
              <Camera size={16} />
            </button>
          </div>

          <h2 className="mt-4 text-2xl font-bold text-gray-800 dark:text-white">
            {coordinator.name}
          </h2>
          <span className="mt-1 px-4 py-1 text-sm bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full">
            {coordinator.designation}
          </span>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {coordinator.specialization}
          </p>
        </div>

        {/* Info Section */}
        <div className="mt-6 space-y-3 text-gray-700 dark:text-gray-300 text-center md:text-left">
          <p>
            <span className="font-semibold">Email:</span> {coordinator.email}
          </p>
          <p>
            <span className="font-semibold">Contact:</span> {coordinator.phone}
          </p>
          <p>
            <span className="font-semibold">Bio:</span> {coordinator.bio}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 mt-6 justify-center">
          <button
            onClick={() => {
              setFormData(coordinator);
              setIsEditOpen(true);
            }}
            className="flex items-center gap-2 px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            <Pencil size={18} /> Edit Profile
          </button>
          <button
            onClick={() => setIsPasswordOpen(true)}
            className="flex items-center gap-2 px-5 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
          >
            <Lock size={18} /> Change Password
          </button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 bg-opacity-60 z-50">
          <div className="bg-white dark:bg-gray-900 w-full max-w-lg p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Edit Profile
            </h3>

            <div className="space-y-4">
              {/* Image Upload */}
              <div className="flex items-center gap-4">
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-20 h-20 rounded-full object-cover border"
                />
                <label className="cursor-pointer px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                  Change Image
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              </div>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                placeholder="Email"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                placeholder="Contact No"
              />
              <input
                type="text"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                placeholder="Specialization"
              />
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                rows="3"
                placeholder="Bio"
              />
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setIsEditOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Change Password Modal */}
      {isPasswordOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 bg-opacity-60 z-50">
          <div className="bg-white dark:bg-gray-900 w-full max-w-md p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Change Password
            </h3>
            <div className="space-y-4">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() => setIsPasswordOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
