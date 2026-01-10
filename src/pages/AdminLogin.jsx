import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/civora-logo.png";

//THIS IS ADMIN LOGIN PAGE

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check credentials
    if (email === "admin@civora.com" && password === "admin") {
      setError("");
      // Redirect to admin dashboard
      navigate("/admin/dashboard"); // change route to your admin panel
    } else {
      setError("❌ Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">

      {/* Logo */}
      <img src={logo} alt="Civora Logo" className="w-40 mb-8" />

      {/* Header */}
      <h1 className="text-3xl font-bold text-red-600 mb-6">
        Admin Login
      </h1>

      {/* Login Form */}
      <div className="bg-surface p-8 rounded-2xl shadow-lg w-full max-w-md">

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border rounded-lg"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700"
        >
          Login as Admin
        </button>

        {error && (
          <p className="text-red-600 mt-4 text-center font-medium">{error}</p>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
