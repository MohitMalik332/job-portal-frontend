import { useState } from "react";
import API from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async () => {
    try{
      const response = await API.post("/api/auth/login", {
        email,
        password,
      });

      console.log(response.data);

      //Store JWT Token
      localStorage.setItem("token", response.data.token);

      alert("Login Successful...");
    } catch (err){
      console.error(err);
      alert("Login Failed...");
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Job Portal Login
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Welcome back! Please login to your account.
        </p>

        <input 
          type="email"
          placeholder="Enter Your Email"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="password"
          placeholder="Enter your password"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />

        <button 
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={handleLogin}
        >
          Login
        </button>

        <p className="text-center text-gray-500 mt-4 text-sm">
          Don’t have an account? <span className="text-blue-500 cursor-pointer">Register</span>
        </p>
      </div>
    </div>
  )
}

export default Login;