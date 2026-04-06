import { useEffect, useState } from "react";
import API from "../services/api";


function MyApplications() {
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    try {
      const response = await API.get("/applications/my");
      setApplications(response.data);

    }catch(err){
      console.error(err);
      alert("Error fetching Applications");
    }
  }

  useEffect(() => {
    fetchApplications();
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        My Applications
      </h2>

      <div className="grid gap-4">
        {applications.map((app) => (
          <div
            key={app.id}
            className="bg-white p-4 rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold">
              {app.job.title}
            </h3>
            <p>{app.job.company}</p>
            <p>{app.job.location}</p>
          </div>
        ))}
      </div>
    </div>
  )

}

export default MyApplications;