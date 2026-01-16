// components/Navbar.jsx
import React from "react";
// CHANGES IN NAVBAR 
//THIS IS NAVBAR 

const Navbar = ({ title, onAddToggle, onLogout, showAdd }) => {
  return (
    <nav className="flex justify-between items-center bg-surface p-4 rounded-xl shadow-md mb-6">
      <h1 className="text-xl sm:text-2xl font-bold text-navyCore">{title}</h1>
      <div className="space-x-4">
        <button
          onClick={onAddToggle}
          className="bg-primaryTeal text-white px-4 py-2 rounded-lg hover:bg-tealDark transition"
        >
          {showAdd ? "Close" : "Add Product"}
        </button>
        <button
          onClick={onLogout}
          className="bg-alert text-white px-4 py-2 rounded-lg hover:bg-alertDark transition"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
