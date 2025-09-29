import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import { superAdminLinks, studentLinks } from "./Pages/Sidebarlinks";

import Dashboard from "./Pages/Codinator/Dahboard";
import SupervisorList from "./Pages/Codinator/Supervisorlist";
import StudentList from "./Pages/Codinator/Studentdata";
import Announcements from "./Pages/Codinator/Announcement";
import EvaluatorAssignment from "./Pages/Codinator/Evaluator";
import SupervisorProfile from "./Pages/Codinator/Supervisor-profile";
import CoordinatorProfile from "./Pages/Codinator/Cordinator-profile";
import FypMarksTable from "./Pages/Codinator/Result";

import LoginPage from "./Components/Login";
import StudentDashboard from "./Pages/Student/Student-dashboard";
import AssignmentsPage from "./Pages/Student/Assignments_submit";
import StudentSupervisors from "./Pages/Student/Student_supervisor";
import SupervisorProfileWithPlagiarism from "./Pages/Student/Supervisor_profile";
import StudentResult from "./Pages/Student/Student-result";
import StudentGroupmates from "./Pages/Student/Student-group";

function Layout() {
  const location = useLocation();
  const role = localStorage.getItem("role"); // role persist from localStorage

  if (location.pathname === "/") {
    return (
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    );
  }

  if (!role) {
    return <Navigate to="/" replace />;
  }

  let links = [];
  if (role === "super-admin") links = superAdminLinks;
  else if (role === "student") links = studentLinks;

  return (
    <div className="flex min-h-screen">
      <Sidebar links={links} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 bg-gray-100 flex-1">
          <Routes>
            {role === "super-admin" && (
              <>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/cordinator/supervisor-list"
                  element={<SupervisorList />}
                />
                <Route path="/cordinator/student" element={<StudentList />} />
                <Route path="/announcement" element={<Announcements />} />
                <Route
                  path="/cordinator/evaluator"
                  element={<EvaluatorAssignment />}
                />
                <Route
                  path="/coordinator/supervisor-profile"
                  element={<SupervisorProfile />}
                />
                <Route
                  path="/coordinator/profile"
                  element={<CoordinatorProfile />}
                />
                <Route path="/cordinator/result" element={<FypMarksTable />} />
              </>
            )}

            {role === "student" && (
              <>
                <Route
                  path="/student/dashboard"
                  element={<StudentDashboard />}
                />
                <Route
                  path="/student/assignments"
                  element={<AssignmentsPage />}
                />
                <Route
                  path="/student/supervisor"
                  element={<StudentSupervisors />}
                />
                <Route
                  path="/student/supervisors-profile"
                  element={<SupervisorProfileWithPlagiarism />}
                />
                <Route path="/student/results" element={<StudentResult />} />
                <Route
                  path="/student/my_group"
                  element={<StudentGroupmates />}
                />
              </>
            )}
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
