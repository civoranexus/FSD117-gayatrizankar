// AddProduct.jsx
import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react"; // Use only this

const AddProduct = ({ onAdd }) => {
  const [productName, setProductName] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleGenerate = () => {
    if (!productName) return;
    const token = `${productName}-${Date.now()}`; // unique code
    setQrValue(token);

    // Send product to parent dashboard
    onAdd({
      name: productName,
      code: token,
      qr: token // QR image generated in ProductCard
    });

    setProductName(""); // reset form
  };

  return (
    <div className="bg-surface p-6 rounded-2xl shadow-lg mb-6 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Product Name"
        className="w-full p-3 mb-4 border rounded-lg"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <button
        onClick={handleGenerate}
        className="w-full bg-primaryTeal text-white p-3 rounded-lg hover:bg-tealDark transition"
      >
        Generate QR & Add Product
      </button>

      {qrValue && (
        <div className="mt-4 text-center">
          <QRCodeCanvas value={qrValue} size={150} />
          <p className="mt-2 text-textDark font-semibold">{qrValue}</p>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
