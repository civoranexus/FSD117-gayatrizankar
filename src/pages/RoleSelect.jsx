import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/civora-logo.png";

const RoleSelect = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 px-4 sm:px-8 relative overflow-hidden">

      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-teal-400 to-blue-300 opacity-30 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-300 to-indigo-400 opacity-20 translate-x-1/2 translate-y-1/2 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-gradient-to-l from-pink-200 to-red-200 opacity-15 translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
        <img src={logo} alt="Civora Logo" className="w-40 sm:w-48 mb-10 animate-fadeIn" />

        <h1 className="text-3xl sm:text-4xl font-serif m-[70px] text-tealDark mb-8 text-center animate-fadeIn">
          Select Your Role
        </h1>

        <div className="grid sm:grid-cols-3 gap-8 w-full">

          <div
            className="bg-white/80 backdrop-blur-md border-2 border-primaryTeal rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => navigate("/admin/login")}
          >
            <h2 className="text-2xl font-bold text-tealDark mb-4">Admin</h2>
            <p className="text-gray-700">Monitor vendors, products, and system activity.</p>
          </div>

          <div
            className="bg-white/80 backdrop-blur-md border-2 border-primaryTeal rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => navigate("/vendor/login")}
          >
            <h2 className="text-2xl font-bold text-tealDark mb-4">Vendor</h2>
            <p className="text-gray-700">Generate and manage QR codes for products.</p>
          </div>

          <div
            className="bg-white/80 backdrop-blur-md border-2 border-primaryTeal rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => navigate("/consumer/scan")}
          >
            <h2 className="text-2xl font-bold text-tealDark mb-4">Consumer</h2>
            <p className="text-gray-700">Scan QR codes to verify authenticity.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoleSelect;
