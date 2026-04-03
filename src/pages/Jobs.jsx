import { useEffect, useState } from "react";
import API from "../services/api";


function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
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

    } catch(err){
      console.error(err);
      alert("Already applied or Error...");
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
                className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
              >
                Apply
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Jobs;