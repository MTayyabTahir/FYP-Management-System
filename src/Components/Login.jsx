import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (role) => {
    // save role in localStorage
    localStorage.setItem("role", role);

    // navigate to dashboard according to role
    if (role === "student") navigate("/student/dashboard");
    else if (role === "super-admin") navigate("/dashboard");
    else if (role === "supervisor") navigate("/supervisor/dashboard");
  };

  return (
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
        </div>
      </div>
    </div>
  );
}
