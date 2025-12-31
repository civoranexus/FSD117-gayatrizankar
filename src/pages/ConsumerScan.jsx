// ConsumerScan.jsx
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const ConsumerScan = () => {
  const [scanResult, setScanResult] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 sm:px-8">
      <h1 className="text-3xl font-bold text-navyCore mb-8">Scan QR Code</h1>

      <div className="w-full max-w-md bg-surface rounded-2xl shadow-lg p-4">
        <QrReader
          constraints={{
            facingMode: { exact: "environment" }, // try rear camera first
          }}
          onResult={(result, error) => {
            if (!!result) {
              setScanResult(result?.text);
              alert(`Verification Result: ${result?.text}`);
            }
            if (!!error) {
              console.error("QR scan error:", error);
            }
          }}
          videoStyle={{ width: "100%", borderRadius: "12px" }}
        />
      </div>

      {scanResult && (
        <div className="mt-6 p-4 bg-success rounded-xl text-white font-semibold text-center">
          Scanned QR Code: {scanResult}
        </div>
      )}
    </div>
  );
};

export default ConsumerScan;
