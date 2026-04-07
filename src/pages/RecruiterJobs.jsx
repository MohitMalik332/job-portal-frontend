import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";


function RecruiterJobs() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, [])

  const fetchJobs = async () => {
    try {
      const response = await API.get("/jobs/recruiter/my");
      setJobs(response.data);

    } catch(err){
      console.error(err);
      alert("Error Fetching Jobs...");
    }
  }

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">
        My Posted Jobs
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-5 rounded-xl shadow"
          >
            <h3 className="text-xl font-semibold">
              {job.title}
            </h3>

            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>

            <button
              onClick={() => navigate(`/applicants/${job.id}`)}
              className="mt-4 w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              View Applicants
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecruiterJobs;