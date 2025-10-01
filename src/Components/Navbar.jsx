import { Bell, Moon, Sun, User, ChevronDown, LogOut } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);
  const [year, setYear] = useState("2025");
  const [openMenu, setOpenMenu] = useState(false);
  const user = { name: "Ahsan Arshad" };

  const years = ["2023", "2024", "2025", "2026"];

  return (
<<<<<<< HEAD
    <header className="max-w-full bg-gray-800 text-gray-100 border-b border-gray-700 shadow-sm flex items-center justify-between px-6 py-3 sticky top-0 z-50 transition-all md:ml-64">
      {/* Left: Logo + Name */}
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-green-400">
=======
    <header className="max-w-full bg-white dark:bg-gray-900 border-b shadow-sm flex items-center justify-between px-6 py-3 sticky top-0 z-50 transition-all md:ml-64">
      {/* Left: Logo + Name */}
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-green-600 dark:text-green-400">
>>>>>>> fyp
          FYP Management System
        </h1>

        {/* Year Dropdown */}
        <div className="relative mt-1 w-40">
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
<<<<<<< HEAD
            className="w-full appearance-none border border-gray-600 bg-gray-700 text-sm rounded-md px-3 py-2 pr-8 shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 text-gray-100"
          >
            {years.map((yr) => (
              <option key={yr} value={yr} className="bg-gray-700 text-gray-100">
=======
            className="w-full appearance-none border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm rounded-md px-3 py-2 pr-8 shadow-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:text-gray-200"
          >
            {years.map((yr) => (
              <option key={yr} value={yr}>
>>>>>>> fyp
                {yr} Session
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
<<<<<<< HEAD
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
=======
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
>>>>>>> fyp
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-5 relative">
        {/* Profile */}
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="flex items-center gap-2 cursor-pointer"
        >
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt="Profile"
<<<<<<< HEAD
              className="h-9 w-9 rounded-full border object-cover border-gray-600"
            />
          ) : (
            <div className="h-9 w-9 flex items-center justify-center rounded-full border bg-gray-700 border-gray-600">
              <User className="text-gray-300" size={20} />
            </div>
          )}
          <span className="hidden md:inline text-sm font-medium text-gray-100">
            {user?.name || "Guest"}
          </span>
          <ChevronDown size={18} className="text-gray-400" />
=======
              className="h-9 w-9 rounded-full border object-cover"
            />
          ) : (
            <div className="h-9 w-9 flex items-center justify-center rounded-full border bg-gray-200 dark:bg-gray-700">
              <User className="text-gray-600 dark:text-gray-300" size={20} />
            </div>
          )}
          <span className="hidden md:inline text-sm font-medium text-gray-700 dark:text-gray-200">
            {user?.name || "Guest"}
          </span>
          <ChevronDown size={18} className="text-gray-500" />
>>>>>>> fyp
        </div>

        {/* Dropdown Menu */}
        {openMenu && (
<<<<<<< HEAD
          <div className="absolute right-0 top-12 bg-gray-700 shadow-lg rounded-lg w-40 border border-gray-600 z-50">
=======
          <div className="absolute right-0 top-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-40 border dark:border-gray-700 z-50">
>>>>>>> fyp
            <button
              onClick={() => {
                setOpenMenu(false);
                navigate("/coordinator/profile");
              }}
<<<<<<< HEAD
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-100 hover:bg-green-600 rounded-t-lg"
=======
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-green-100 dark:hover:bg-green-700 rounded-t-lg"
>>>>>>> fyp
            >
              <User size={16} /> Profile
            </button>
            <button
              onClick={() => {
                setOpenMenu(false);
<<<<<<< HEAD
                // logout logic here
                console.log("Logged out");
              }}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-600 rounded-b-lg"
=======
                // logout logic yahan daalna hoga
                console.log("Logged out");
              }}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-100 dark:hover:bg-red-700 rounded-b-lg"
>>>>>>> fyp
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
