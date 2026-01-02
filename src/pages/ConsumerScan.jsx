// ConsumerScan.jsx
import React, { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import logo from "../assets/civora-logo.png";

const ConsumerScan = () => {
  const scannerRef = useRef(null); // Html5QrcodeScanner instance
  const scannerRefElement = useRef(null); // DOM element reference
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState(null);
  const [scanning, setScanning] = useState(true);
  const lastScanned = useRef(null);

  // 🔹 Verify QR code against stored vendors/products
  const verifyQRCode = (code) => {
    // Prevent repeated scans
    if (code === lastScanned.current) return;
    lastScanned.current = code;

    setProduct(null);
    setStatus(null);

    const vendors = JSON.parse(localStorage.getItem("vendors")) || [];

    const found = vendors
      .flatMap((v) => v.products || [])
      .find((p) => p.code === code);

    if (found) {
      setProduct(found);
      setStatus("valid");
    } else {
      setStatus("invalid");
    }

    // Stop scanner after detecting a QR
    if (scannerRef.current) {
      scannerRef.current.clear().catch(console.error);
      setScanning(false);
    }
  };

  // 🔹 Start the scanner safely
  const startScanner = () => {
    setScanning(true);
    lastScanned.current = null;
    setProduct(null);
    setStatus(null);
  };

  // 🔹 Initialize scanner whenever scanning is true
  useEffect(() => {
    if (!scanning || !scannerRefElement.current) return;

    const config = {
      fps: 10,
      qrbox: 250,
      experimentalFeatures: {
        useBarCodeDetectorIfSupported: true,
      },
    };

    scannerRef.current = new Html5QrcodeScanner(
      scannerRefElement.current.id,
      config,
      false
    );

    scannerRef.current.render(
      (decodedText) => verifyQRCode(decodedText),
      (error) => console.log("QR Scan Error:", error)
    );

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(console.error);
      }
    };
  }, [scanning]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background py-6">
              <img src={logo} alt="Civora Logo" className="w-40 sm:w-48 mb-8 sm:mb-12" />
      
      <h1 className="text-3xl font-bold mb-6 text-navyCore">
        Scan Product QR
      </h1>

      {/* Camera QR Scanner */}
      {scanning && (
        <div className="w-full max-w-md bg-surface p-4 rounded-xl shadow mb-4">
          <div
            ref={scannerRefElement}
            id="reader"
            style={{ width: "100%" }}
          />
        </div>
      )}

      {/* Scan Again Button */}
      {!scanning && (
        <button
          onClick={startScanner}
          className="mb-4 bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          🔄 Scan Again
        </button>
      )}

      {/* Result Display */}
      {status === "valid" && product && (
        <div className="mt-6 bg-green-600 text-white p-4 rounded-xl w-full max-w-md text-center">
          <p className="font-bold text-lg">✅ Product Verified</p>
          <p>Name: {product.name}</p>
          <p>Price: ₹{product.price || "N/A"}</p>
          <p>Created By: {product.createdBy || "Unknown"}</p>
          <p>
            Date:{" "}
            {product.createdAt
              ? new Date(product.createdAt).toLocaleDateString()
              : "N/A"}
          </p>
        </div>
      )}

      {status === "invalid" && (
        <div className="mt-6 bg-red-600 text-white p-4 rounded-xl w-full max-w-md text-center">
          ❌ Invalid or Fake QR Code
        </div>
      )}
    </div>
  );
};

export default ConsumerScan;
