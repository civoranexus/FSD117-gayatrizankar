import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import AddProduct from "./AddProduct";

const VendorDashboard = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [vendor, setVendor] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    const storedVendor = JSON.parse(localStorage.getItem("currentVendor"));

    if (!storedVendor) {
      navigate("/vendor/login");
      return;
    }

    setVendor(storedVendor);
    setProducts(storedVendor.products || []);
  }, [navigate]);

  const handleAddProduct = (product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);

    const vendors = JSON.parse(localStorage.getItem("vendors")) || [];

    const updatedVendors = vendors.map((v) =>
      v.id === vendor.id ? { ...v, products: updatedProducts } : v
    );

    const updatedVendor = { ...vendor, products: updatedProducts };

    localStorage.setItem("vendors", JSON.stringify(updatedVendors));
    localStorage.setItem("currentVendor", JSON.stringify(updatedVendor));

    setVendor(updatedVendor);
    setShowAdd(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentVendor");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background px-4 sm:px-8 py-6">
      <Navbar
        title="Vendor Dashboard"
        onAddToggle={() => setShowAdd(!showAdd)}
        onLogout={handleLogout}
        showAdd={showAdd}
      />

      {showAdd && <AddProduct onAdd={handleAddProduct} vendor={vendor} />}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {products.length === 0 && (
          <p className="text-textDark col-span-full text-center">
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
