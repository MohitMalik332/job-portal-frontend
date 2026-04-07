import { Link } from "react-router-dom";


function Navbar() {
  const role = localStorage.getItem("role");

  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Job Portal</h1>

      <div className="flex gap-4">
        <Link to="/jobs">Jobs</Link>

        {role === "ROLE_USER" && (
          <Link to="/my-applications">My Applications</Link>
        )}

        {role === "ROLE_RECRUITER" && (
          <Link to="/recruiter">Recruiter Dashboard</Link>
        )}

        <Link to="/login">Logout</Link>
      </div>
    </div>
  );
}

export default Navbar;