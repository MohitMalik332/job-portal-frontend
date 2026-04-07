import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";


function Jobs() {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
    fetchAppliedJobs();
  }, [])

  const fetchJobs = async () => {
    try{
      const response = await API.get("/jobs");
      setJobs(response.data);

    } catch (err){
      console.error(err);
    }
  }

  const applyJob = async (jobId) => {
    try {
      await API.post(`/applications/apply/${jobId}`);
      alert("Applied Successfully...");

      // Update UI instantly
      setAppliedJobs([...appliedJobs, jobId]);

    } catch(err){
      console.error(err);
      alert("Error applying!");
    }
  }

  const fetchAppliedJobs = async () => {
    try{
      const response = API.get("/applications/my");

      // Extracting Job ID's to check which jobs user has already applied.
      const appliedJobsIds = response.data.map(app => app.job.id);
      setAppliedJobs(appliedJobsIds);

    } catch (err){
      console.error(err);
    }
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Available Jobs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          jobs.map((job) => (
            <div
            key={job.id}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-bold">{job.title}</h2>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-gray-500">{job.location}</p>
              <p className="mt-2 text-sm">{job.description}</p>
              <p className="mt-2 font-semibold text-green-600">₹ {job.salary}</p>

              <button
                onClick={() => applyJob(job.id)}
                disabled={appliedJobs.includes(job.id)}
                className={`mt-4 w-full p-2 rounded-lg ${
                  appliedJobs.includes(job.id)
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                {appliedJobs.includes(job.id) ? "Already Applied" : "Apply"}
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Jobs;