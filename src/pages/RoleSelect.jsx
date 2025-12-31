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

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        <img src={logo} alt="Civora Logo" className="w-40 sm:w-48 mb-8 sm:mb-12" />
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navyCore mb-12 sm:mb-16 text-center">
          Who are you?
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 w-full">
          <div 
            className="bg-surface border-2 border-primaryTeal rounded-2xl p-6 sm:p-10 text-center shadow-lg hover:shadow-2xl cursor-pointer"
            onClick={() => navigate("/vendor/login")}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-tealDark mb-4">Vendor</h2>
            <p className="text-textDark text-sm sm:text-base">
              Login to generate and manage <span className="font-semibold">secure QR codes</span> for your products.
            </p>
          </div>

          <div 
            className="bg-surface border-2 border-primaryTeal rounded-2xl p-6 sm:p-10 text-center shadow-lg hover:shadow-2xl cursor-pointer"
            onClick={() => navigate("/consumer/scan")}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-tealDark mb-4">Consumer</h2>
            <p className="text-textDark text-sm sm:text-base">
              Scan QR codes to instantly verify <span className="font-semibold">product authenticity</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelect;
