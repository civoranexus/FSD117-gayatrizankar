import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/civora-logo.png";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@civora.com" && password === "admin123") {
      localStorage.setItem(
        "currentAdmin",
        JSON.stringify({ email, role: "admin" })
      );
      navigate("/admin/dashboard");
    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <img src={logo} alt="Civora Logo" className="w-40 mb-8" />

      <h1 className="text-3xl font-bold text-red-600 mb-6">
        Admin Login
      </h1>

      <div className="bg-surface p-8 rounded-2xl shadow-lg w-full max-w-md">
        <input
          type="email"
          placeholder="Admin Email"
          className="w-full p-3 mb-4 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700"
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
