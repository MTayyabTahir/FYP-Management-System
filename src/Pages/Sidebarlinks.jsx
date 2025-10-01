import {
  Home,
  Users,
  FileText,
  Megaphone,
  ClipboardCheck,
  Book,
} from "lucide-react";

export const superAdminLinks = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: <Home size={18} />,
  },
  {
    path: "/cordinator/supervisor-list",
    label: "Supervisor List",
    icon: <Users size={18} />,
  },
  {
    path: "/cordinator/student",
    label: "Students List",
    icon: <FileText size={18} />,
  },
  {
    path: "/announcement",
    label: "Announcement",
    icon: <Megaphone size={18} />,
  },
  {
    path: "/cordinator/evaluator",
    label: "Evaluator Assignment",
    icon: <ClipboardCheck size={18} />,
  },
  {
    path: "/cordinator/result",
    label: "Result",
    icon: <ClipboardCheck size={18} />,
  },
];

export const studentLinks = [
  { path: "/student/dashboard", label: "Dashboard", icon: <Home size={18} /> },
  {
    path: "/student/assignments",
    label: "Assignments",
    icon: <Users size={18} />,
  },
  {
    path: "/student/supervisor",
    label: "Supervisor",
    icon: <Book size={18} />,
  },
  {
    path: "/student/my_group",
    label: "Groupmates",
    icon: <Book size={18} />,
  },
  {
    path: "/student/results",
    label: "Results",
    icon: <Book size={18} />,
  },
];

export const Supervisor = [
  {
    path: "/supervisor/dashboard",
    label: "Dashboard",
    icon: <Home size={18} />,
  },
  {
    path: "/supervisor/assignments",
    label: "Assignments",
    icon: <Users size={18} />,
  },
  { path: "/supervisor/groups", label: "Groups", icon: <FileText size={18} /> },
  {
    path: "/supervisor/evaluator-result",
    label: "Evaluator Results",
    icon: <FileText size={18} />,
  },

  {
    path: "/supervisor/add-annnoucements",
    label: "Annoucements",
    icon: <FileText size={18} />,
  },
  ,
];
