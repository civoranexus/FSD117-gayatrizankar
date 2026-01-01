import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/civora-logo.png";

const VendorSignup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    const vendors = JSON.parse(localStorage.getItem("vendors")) || [];

    const alreadyExists = vendors.some(
      (v) => v.email === email
    );

    if (alreadyExists) {
      alert("Vendor already exists. Please login.");
      navigate("/vendor/login");
      return;
    }

    const newVendor = {
      id: Date.now(),
      name,
      email,
      password,
      products: [], // IMPORTANT for persistence
    };

    vendors.push(newVendor);

    // Save vendors list
    localStorage.setItem("vendors", JSON.stringify(vendors));

    // Auto login after signup
    localStorage.setItem(
      "currentVendor",
      JSON.stringify(newVendor)
    );

    navigate("/vendor/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 sm:px-8">
        <img src={logo} alt="Civora Logo" className="w-40 sm:w-48 mb-8 sm:mb-12" />
      <h1 className="text-3xl font-bold text-navyCore mb-8">
        Vendor Signup
      </h1>

      <div className="bg-surface p-8 rounded-2xl shadow-lg w-full max-w-md">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 border rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          onClick={handleSignup}
          className="w-full bg-primaryTeal text-white p-3 rounded-lg hover:bg-tealDark transition"
        >
          Create Account
        </button>

        <p className="text-center text-sm text-textDark mt-4">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/vendor/login")}
            className="text-primaryTeal cursor-pointer font-semibold"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default VendorSignup;
