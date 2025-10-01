import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { User, Users, ClipboardList } from "lucide-react";
=======
>>>>>>> fyp

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
<<<<<<< HEAD
    localStorage.setItem("role", role);

=======
    // save role in localStorage
    localStorage.setItem("role", role);

    // navigate to dashboard according to role
>>>>>>> fyp
    if (role === "student") navigate("/student/dashboard");
    else if (role === "super-admin") navigate("/dashboard");
    else if (role === "supervisor") navigate("/supervisor/dashboard");
  };

  return (
<<<<<<< HEAD
    <div className="flex h-screen bg-gray-100">
      {/* Left Panel */}
      <div className="hidden md:flex w-1/2 relative">
        <img
          src="./assets/ariduni.jpeg"
          alt="ARID University"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-700/90 via-green-800/90 to-green-900/90 p-10 flex flex-col justify-center text-white">
          <h1 className="text-4xl font-bold mb-6 text-center">
            FYP Registration
          </h1>

          <div className="space-y-4 text-lg leading-relaxed">
            <p className="font-semibold underline">Registration Rules:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>For FYP-1 registration, you must meet eligibility criteria.</li>
              <li>
                An FYP group must consist of <b>2 or 3 members</b> (No cross-departmental groups).
              </li>
              <li>
                If working with an external supervisor, you must also have an{" "}
                <b>internal supervisor</b> from the faculty. Only internal supervisor’s signature is valid.
              </li>
            </ul>

            <p className="font-semibold underline">Eligibility Criteria:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>CGPA ≥ 2.0 (not on academic warning)</li>
              <li>No deficiency → Credit hours ≥ 100</li>
              <li>One-course deficiency → Credit hours ≥ 96</li>
              <li>Two-course deficiency → Credit hours ≥ 92</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
          <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">
            Welcome Back
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Select your role to login and access the FYP Dashboard
          </p>

          {/* Role Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => handleLogin("student")}
              className="w-full flex items-center justify-center py-3 px-4 rounded-xl bg-green-600 text-white font-medium text-lg shadow hover:bg-green-700 transition"
            >
              <User className="mr-2 w-5 h-5" /> Login as Student
            </button>

            <button
              onClick={() => handleLogin("super-admin")}
              className="w-full flex items-center justify-center py-3 px-4 rounded-xl bg-green-600 text-white font-medium text-lg shadow hover:bg-green-700 transition"
            >
              <ClipboardList className="mr-2 w-5 h-5" /> Login as Coordinator
            </button>

            <button
              onClick={() => handleLogin("supervisor")}
              className="w-full flex items-center justify-center py-3 px-4 rounded-xl bg-green-600 text-white font-medium text-lg shadow hover:bg-green-700 transition"
            >
              <Users className="mr-2 w-5 h-5" /> Login as Supervisor
            </button>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-gray-500 text-sm">
            &copy; 2025 ARID University. All rights reserved.
          </p>
=======
    <div className="flex h-screen">
      {/* Left Image */}
      <div className="hidden md:flex w-1/2">
        <img
          src="./assets/ariduni.jpeg"
          alt="Login Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-white dark:bg-gray-900 p-8">
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">
          Welcome to FYP Management System
        </h2>

        <div className="space-y-5 w-full max-w-sm">
          <button
            onClick={() => handleLogin("student")}
            className="w-full py-3 px-4 rounded-lg bg-green-600 text-white font-medium text-lg shadow-md hover:bg-green-700 transition"
          >
            Login as Student
          </button>

          <button
            onClick={() => handleLogin("super-admin")}
            className="w-full py-3 px-4 rounded-lg bg-green-600 text-white font-medium text-lg shadow-md hover:bg-green-700 transition"
          >
            Login as Coordinator
          </button>

          <button
            onClick={() => handleLogin("supervisor")}
            className="w-full py-3 px-4 rounded-lg bg-green-600 text-white font-medium text-lg shadow-md hover:bg-green-700 transition"
          >
            Login as Supervisor
          </button>
>>>>>>> fyp
        </div>
      </div>
    </div>
  );
}
