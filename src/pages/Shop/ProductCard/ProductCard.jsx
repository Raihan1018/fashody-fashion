import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-64 w-full object-cover group-hover:scale-105 transition duration-300"
      />

      <div className="p-5 space-y-2">
        <h2 className="text-lg font-bold text-slate-800">{product.title}</h2>

        <p className="text-gray-500 text-sm">{product.shortDescription}</p>

        <div className="flex items-center justify-between">
          <span className="text-green-600 font-bold text-lg">
            ${product.discountPrice}
          </span>
          <span className="line-through text-gray-400 text-sm">
            ${product.price}
          </span>
        </div>

        <div className="flex items-center gap-2 pt-3 border-t">
          <img
            src={product.author.image}
            alt={product.author.name}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <p className="text-xs font-semibold">{product.author.name}</p>
            <p className="text-xs text-gray-400">{product.postedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
