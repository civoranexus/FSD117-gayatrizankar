import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/civora-logo.png";

const VendorLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    const vendors = JSON.parse(localStorage.getItem("vendors")) || [];

    const vendor = vendors.find(
      (v) => v.email === email && v.password === password
    );

    if (!vendor) {
      alert("Invalid credentials");
      return;
    }

    localStorage.setItem(
      "currentVendor",
      JSON.stringify(vendor)
    );

    navigate("/vendor/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 sm:px-8">
              <img src={logo} alt="Civora Logo" className="w-40 sm:w-48 mb-8 sm:mb-12" />
      
      <h1 className="text-3xl font-bold text-navyCore mb-8">
        Vendor Login
      </h1>

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
          className="w-full p-3 mb-6 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-primaryTeal text-white p-3 rounded-lg hover:bg-tealDark transition"
        >
          Login
        </button>

        <p className="text-center text-sm text-textDark mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/vendor/signup")}
            className="text-primaryTeal cursor-pointer font-semibold"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default VendorLogin;
