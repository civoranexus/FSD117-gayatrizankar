import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const ConsumerScan = () => {
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState(null);
  const [manualCode, setManualCode] = useState("");

  const verifyQRCode = (code) => {
    const vendors = JSON.parse(localStorage.getItem("vendors")) || [];

    for (let vendor of vendors) {
      const found = vendor.products?.find((p) => p.code === code);

      if (found) {
        setProduct(found);
        setStatus("valid");
        return;
      }
    }

    setProduct(null);
    setStatus("invalid");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-6">Scan Product QR</h1>

      {/* Camera */}
      <div className="w-full max-w-md bg-white p-4 rounded-xl shadow">
        <QrReader
          constraints={{ facingMode: "environment" }}
          onResult={(result) => {
            if (result?.text) {
              verifyQRCode(result.text);
            }
          }}
          videoStyle={{ width: "100%" }}
        />
      </div>

      {/* Manual fallback */}
      <div className="mt-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter QR code manually"
          className="w-full p-3 border rounded-lg"
          value={manualCode}
          onChange={(e) => setManualCode(e.target.value)}
        />
        <button
          onClick={() => verifyQRCode(manualCode)}
          className="mt-2 w-full bg-primaryTeal text-white p-2 rounded-lg"
        >
          Verify
        </button>
      </div>

      {/* RESULT */}
      {status === "valid" && product && (
        <div className="mt-6 bg-green-600 text-white p-4 rounded-xl w-full max-w-md">
          <p className="font-bold text-lg">✅ Product Verified</p>
          <p>Name: {product.name}</p>
          <p>Price: ₹{product.price}</p>
          <p>Created By: {product.createdBy}</p>
          <p>
            Date: {new Date(product.createdAt).toLocaleDateString()}
          </p>
        </div>
      )}

      {status === "invalid" && (
        <div className="mt-6 bg-red-600 text-white p-4 rounded-xl">
          ❌ Invalid or Fake QR Code
        </div>
      )}
    </div>
  );
};

export default ConsumerScan;
