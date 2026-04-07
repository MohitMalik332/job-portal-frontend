import { useState } from "react";
import API from "../services/api";


function PostJob() {
  const [job, setJob] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
    salary: ""
  })

  const handleChange = (e) => {
    setJob({...job, [e.target.name]: e.target.value });
  }

  const handleCreateJob = async () => {
    try{
      await API.post("/jobs/create", job);
      alert("Job Created...");

    } catch(err){
      console.error(err);
      alert("Error Creating Job...");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Post a Job
        </h2>

        <input name="title" placeholder="Title" onChange={handleChange} className="w-full mb-3 p-2 border rounded"/>
        <input name="company" placeholder="Company" onChange={handleChange} className="w-full mb-3 p-2 border rounded"/>
        <input name="location" placeholder="Location" onChange={handleChange} className="w-full mb-3 p-2 border rounded"/>
        <input name="salary" placeholder="Salary" onChange={handleChange} className="w-full mb-3 p-2 border rounded"/>
        <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full mb-3 p-2 border rounded"/>

        <button
          onClick={handleCreateJob}
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Create Job
        </button>
      </div>
    </div>
  )
}

export default PostJob;