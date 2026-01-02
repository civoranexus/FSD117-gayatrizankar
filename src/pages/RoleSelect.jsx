import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/civora-logo.png";

const RoleSelect = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 sm:px-8 relative overflow-hidden">

      {/* Decorative circles */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-primaryTeal opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-tealDark opacity-15 translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-navyCore opacity-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
        <img src={logo} alt="Civora Logo" className="w-40 sm:w-48 mb-10" />

        <h1 className="text-3xl sm:text-4xl font-extrabold text-navyCore mb-12 text-center">
          Select Your Role
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">

          {/* Vendor */}
          <div
            className="bg-surface border-2 border-primaryTeal rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl cursor-pointer"
            onClick={() => navigate("/vendor/login")}
          >
            <h2 className="text-2xl font-bold text-tealDark mb-4">Vendor</h2>
            <p className="text-textDark">
              Generate and manage QR codes for products.
            </p>
          </div>

          {/* Consumer */}
          <div
            className="bg-surface border-2 border-primaryTeal rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl cursor-pointer"
            onClick={() => navigate("/consumer/scan")}
          >
            <h2 className="text-2xl font-bold text-tealDark mb-4">Consumer</h2>
            <p className="text-textDark">
              Scan QR codes to verify authenticity.
            </p>
          </div>

          {/* Admin */}
          <div
            className="bg-surface border-2 border-primaryTeal rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl cursor-pointer"
            onClick={() => navigate("/admin/login")}
          >
            <h2 className="text-2xl font-bold text-tealDark mb-4">Admin</h2>
            <p className="text-textDark">
              Monitor vendors, products, and system activity.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RoleSelect;
