// AddProduct
import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";


const AddProduct = ({ onAdd, vendor }) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleGenerate = () => {
    if (!productName || !price) return;

    const token = `VV-${Date.now()}-${Math.floor(Math.random() * 10000)}`;

    const product = {
      name: productName,
      price,
      code: token,
      createdBy: vendor.email,
      createdAt: new Date().toLocaleString(),
    };

    setQrValue(token);
    onAdd(product);

    setProductName("");
    setPrice("");
  };

  return (
    <div className="bg-surface p-6 rounded-2xl shadow-lg mb-6 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Product Name"
        className="w-full p-3 mb-3 border rounded-lg"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        className="w-full p-3 mb-4 border rounded-lg"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
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
          <p className="mt-2 text-textDark text-sm">{qrValue}</p>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
