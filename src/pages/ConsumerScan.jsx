import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import logo from "../assets/civora-logo.png";

//FINAL CONSUMER SCAN PAGE

const ConsumerScan = () => {
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState(null);

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

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: 250,
      },
      false
    );

    scanner.render(
      (decodedText) => {
        verifyQRCode(decodedText);
      },
      () => {}
    );

    return () => {
      scanner.clear().catch(() => {});
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background py-6">

      <img
        src={logo}
        alt="Civora Logo"
        className="w-40 sm:w-48 mb-8 sm:mb-12"
      />

      <h1 className="text-3xl font-bold mb-6 text-navyCore">
        Scan Product QR
      </h1>

      {/* ⚠️ DO NOT TOUCH THIS DIV */}
      {/* html5-qrcode injects ALL that huge HTML here */}
      <div className="w-full max-w-md bg-surface p-4 rounded-xl shadow mb-4">
        <div id="reader" />
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
        <div className="mt-6 bg-red-600 text-white p-4 rounded-xl text-center w-full max-w-md">
          ❌ Invalid or Fake QR Code
        </div>
      )}
    </div>
  );
};

export default ConsumerScan;
