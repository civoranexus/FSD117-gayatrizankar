import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VendorLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: Replace with authentication logic
    navigate("/vendor/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-navyCore mb-8">Vendor Login</h1>
      <div className="bg-surface p-8 rounded-2xl shadow-lg w-full max-w-md">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-primaryTeal text-white p-3 rounded-lg hover:bg-tealDark transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default VendorLogin;
