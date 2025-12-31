import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import AddProduct from "./AddProduct";

const VendorDashboard = () => {
  const [products, setProducts] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const navigate = useNavigate();

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleLogout = () => {
    // Clear session/auth data if used
    localStorage.removeItem("user");

    // Redirect to RoleSelect page
    navigate("/");
  };

  const toggleAddForm = () => setShowAdd(!showAdd);

  return (
    <div className="min-h-screen bg-background px-4 sm:px-8 py-6">
      {/* Navbar */}
      <Navbar
        title="Vendor Dashboard"
        onAddToggle={toggleAddForm}
        onLogout={handleLogout}
        showAdd={showAdd}
      />

      {/* Add Product Form */}
      {showAdd && <AddProduct onAdd={handleAddProduct} />}

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.length === 0 && (
          <p className="text-textDark col-span-full text-center mt-10">
            No products added yet.
          </p>
        )}
        {products.map((prod, index) => (
          <ProductCard key={index} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default VendorDashboard;
