import { useState } from "react";
import API from "../services/api";


function Register() {
  const [role, setRole] = useState("ROLE_USER");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleRegister = async () => {
    try {
      const response = await API.post("/auth/register", {
        fullName,
        email,
        password,
        role,
      });

      alert("Registration Successful");

      // Redirect to login
      window.location.href = "/";
    } catch (err){
      console.error(err);
      alert("Registration Failed...");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h2>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setRole("ROLE_USER")}
            className={`w-1/2 p-2 rounded-lg border ${
              role === "ROLE_USER"
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
          >
            User
          </button>
          <button
            onClick={() => setRole("ROLE_RECRUITER")}
            className={`w-1/2 p-2 rounded-lg border ${
              role === "ROLE_RECRUITER"
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
          >
            Recruiter
          </button>
        </div>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 p-3 border rounded-lg"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button 
          className="w-full bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition"
          onClick={handleRegister}
        >
          Register
        </button>

        <p className="text-center text-gray-500 mt-4 text-sm">
          Already have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  )
}

export default Register;