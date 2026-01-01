import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-surface border-2 border-primaryTeal rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-bold text-tealDark mb-2">
        {product.name}
      </h2>

      <p className="text-textDark text-sm mb-1">
        Price: ₹{product.price}
      </p>

      <p className="text-textDark text-sm mb-1">
        Created By: {product.createdBy}
      </p>

      <p className="text-textDark text-xs mb-3">
        Date: {product.createdAt}
      </p>

      <QRCodeCanvas value={product.code} size={140} />

      <p className="mt-2 text-xs break-all">{product.code}</p>
    </div>
  );
};

export default ProductCard;
