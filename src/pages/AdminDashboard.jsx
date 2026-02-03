// AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/civora-logo.png";


//ADMIN DASHBOARD PAGE
const AdminDashboard = () => {
  const navigate = useNavigate();
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("currentAdmin"));
    if (!admin) {
      navigate("/");
      return;
    }

    const storedVendors = JSON.parse(localStorage.getItem("vendors")) || [];
    setVendors(storedVendors);
  }, [navigate]);

  const deleteVendor = (id) => {
    if (!window.confirm("Delete vendor and ALL their products?")) return;

    const updatedVendors = vendors.filter((v) => v.id !== id);
    setVendors(updatedVendors);
    localStorage.setItem("vendors", JSON.stringify(updatedVendors));

    const currentVendor = JSON.parse(localStorage.getItem("currentVendor"));
    if (currentVendor?.id === id) {
      localStorage.removeItem("currentVendor");
    }
  };

  const logout = () => {
    localStorage.removeItem("currentAdmin");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Top Navbar */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Civora Logo" className="w-20 sm:w-24" />
        </div>

        <button
          onClick={logout}
          className="bg-primaryTeal hover:bg-tealDark text-white px-5 py-2 rounded-xl font-semibold transition"
        >
          Logout
        </button>
      </div>

      {/* Vendors Grid */}
      {vendors.length === 0 ? (
        <p className="text-textDark text-center mt-20 text-lg">
          No vendors registered yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {vendors.map((v) => (
            <div
              key={v.id}
              className="bg-surface rounded-2xl p-5 shadow-lg hover:shadow-2xl transition flex flex-col justify-between"
            >
              <div>
                <p className="font-bold text-xl text-tealDark mb-1">{v.name}</p>
                <p className="text-textDark text-sm mb-1">{v.email}</p>
                <p className="text-textGray text-xs mb-3">
                  Products: {v.products?.length || 0}
                </p>

                {/* Products List */}
                {v.products && v.products.length > 0 ? (
                  <ul className="text-textGray text-sm space-y-1">
                    {v.products.map((p, idx) => (
                      <li key={idx} className="flex justify-between">
                        <span>{p.name}</span>
                        <span>
                          $
                          {typeof p.price === "number"
                            ? p.price.toFixed(2)
                            : Number(p.price || 0).toFixed(2)}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-textGray text-xs">No products available</p>
                )}
              </div>

              <button
                onClick={() => deleteVendor(v.id)}
                className="bg-primaryTeal hover:bg-tealDark text-white px-4 py-2 rounded-xl font-semibold transition mt-4"
              >
                Delete Vendor
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
