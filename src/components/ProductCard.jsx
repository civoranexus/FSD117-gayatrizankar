// components/ProductCard.jsx
import React from "react";
import { QRCodeCanvas } from "qrcode.react"; // <-- Fixed import

const ProductCard = ({ product }) => {
  return (
    <div className="bg-surface border-2 border-primaryTeal rounded-2xl p-6 shadow-lg flex flex-col items-center">
      <h2 className="text-xl font-bold text-tealDark mb-2">{product.name}</h2>
      {product.qr && (
        <QRCodeCanvas value={product.code} size={150} className="mb-2" />
      )}
      <p className="text-textDark text-sm">{product.code}</p>
    </div>
  );
};

export default ProductCard;
