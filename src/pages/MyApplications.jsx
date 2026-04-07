import { useEffect, useState } from "react";
import API from "../services/api";


function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    API.get("/applications/my")
      .then((res) => setApplications(res.data))
      .catch(() => alert("Error fetching applications"));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        My Applications
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {app.job.title}
            </h3>

            <p className="text-gray-600">
              {app.job.company}
            </p>

            <p className="text-gray-500 text-sm mb-3">
              {app.job.location}
            </p>

            <div className="flex justify-between items-center">
              <span className="text-green-600 font-medium">
                Applied
              </span>

              <button className="bg-blue-500 text-white px-3 py-1 rounded-lg">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyApplications;