import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import img from "/assets/arid.png";

export default function Sidebar({ links = [] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
<<<<<<< HEAD
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-64 bg-gray-800 text-gray-100 shadow-lg flex-col border-r border-gray-700">
        {/* Logo Section */}
        <div className="flex flex-col items-center py-6 border-b border-gray-700">
          <img
            src={img}
            alt="University Logo"
            className="h-24 w-24 rounded-lg bg-white p-2 shadow-md"
          />
          <h1 className="mt-2 text-xl font-semibold text-gray-100 text-center">
            PMAS AAUR
          </h1>
=======
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-md text-gray-200 shadow-xl flex-col border-r border-gray-700">
        {/* Logo Section */}
        <div className="flex flex-col items-center border-b border-gray-700 py-6">
          <img
            src={img}
            alt="University Logo"
            className="h-32 w-32 rounded-xl bg-white p-2 shadow-lg"
          />
>>>>>>> fyp
        </div>

        {/* Nav Items */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {links.length > 0 ? (
            links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    isActive
<<<<<<< HEAD
                      ? "bg-green-600/90 text-white shadow-md"
=======
                      ? "bg-gradient-to-r from-green-600 to-green-500 text-white shadow-md"
>>>>>>> fyp
                      : "hover:bg-gray-700/70 hover:text-white"
                  }`
                }
              >
                {link.icon && <span className="w-5 h-5">{link.icon}</span>}
                <span>{link.label}</span>
              </NavLink>
            ))
          ) : (
            <p className="text-gray-400 text-sm px-4">No Links Available</p>
          )}
        </nav>
      </aside>

      {/* Mobile Navbar with Dropdown */}
<<<<<<< HEAD
      <div className="md:hidden fixed top-0 left-0 w-full bg-gray-800 text-gray-100 shadow-md z-50 border-b border-gray-700">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={img}
              alt="University Logo"
              className="h-10 w-10 rounded-lg bg-white p-1 shadow-sm"
            />
            <span className="text-gray-100 font-semibold text-lg">
              PMAS AAUR
            </span>
          </div>
=======
      <div className="md:hidden fixed top-20 left-0 w-full bg-gradient-to-r from-gray-900/95 to-gray-800/95 backdrop-blur-md text-gray-200 shadow-lg z-50 border-b border-gray-700">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <img
            src={img}
            alt="University Logo"
            className="h-10 w-10 rounded bg-white p-1 shadow"
          />
>>>>>>> fyp

          {/* Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg hover:bg-gray-700 transition"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Dropdown Menu */}
        {open && (
<<<<<<< HEAD
          <nav className="flex flex-col px-4 py-2 space-y-2 bg-gray-700 border-t border-gray-600">
=======
          <nav className="flex flex-col px-4 py-2 space-y-2 bg-gray-800/95 border-t border-gray-700">
>>>>>>> fyp
            {links.length > 0 ? (
              links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      isActive
<<<<<<< HEAD
                        ? "bg-green-600/90 text-white shadow"
                        : "hover:bg-gray-600/70 hover:text-white"
=======
                        ? "bg-gradient-to-r from-green-600 to-green-500 text-white shadow"
                        : "hover:bg-gray-700/70 hover:text-white"
>>>>>>> fyp
                    }`
                  }
                >
                  {link.icon && <span className="w-5 h-5">{link.icon}</span>}
                  <span>{link.label}</span>
                </NavLink>
              ))
            ) : (
              <p className="text-gray-400 text-sm px-4">No Links Available</p>
            )}
          </nav>
        )}
      </div>
    </>
  );
}
