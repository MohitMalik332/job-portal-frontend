import { useNavigate } from "react-router-dom";


function RecruiterDashboard() {
  const navigate = useNavigate();


  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">
        Recruiter Dashboard
      </h1>

      <div className="flex flex-col items-center gap-4">

        <button
          onClick={() => navigate("/post-job")}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Post a Job
        </button>

        <button
          onClick={() => navigate("/recruiter/jobs")}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          View My Jobs
        </button>

      </div>
    </div>
  );
}

export default RecruiterDashboard;