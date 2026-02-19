import React from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaCartPlus, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = (e) => {
    e.stopPropagation(); // Prevents triggering other click events
    navigate(`/product-details/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    toast.info("Added to cart!", {
      position: "bottom-right",
      autoClose: 2000,
      theme: "colored",
    });
  };

  return (
    <div className="group relative rounded-2xl bg-white border border-gray-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col h-full overflow-hidden">
      {/* 1. Image Section with Overlay Actions */}
      <div className="relative h-64 overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
        />

        {product.discountPrice < product.price && (
          <div className="absolute top-4 -left-2 bg-red-600 text-white text-xs font-bold px-4 py-1 rotate-[-45deg] shadow-md">
            {Math.round(
              ((product.price - product.discountPrice) / product.price) * 100,
            )}
            % OFF
          </div>
        )}

        {/* Quick Action Overlay (Visible on Hover) */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={handleViewDetails}
            className="p-3 bg-white text-gray-700 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0"
            title="Quick View"
          >
            <FaEye size={18} />
          </button>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-auto">
          <div className="flex items-center gap-1 mb-2">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-sm font-medium text-gray-600">
              {product.rating}
            </span>
          </div>

          <h2 className="text-md font-bold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {product.title}
          </h2>

          <p className="mt-1 text-gray-500 text-sm line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* 3. Price & CTA Section */}
        <div className="mt-5 pt-4 border-t border-gray-100">
          <div className="flex items-end justify-between">
            <div className="flex flex-col">
              <span className="text-gray-400 line-through text-xs">
                ${product.price}
              </span>
              <span className="text-2xl font-black text-gray-900">
                ${product.discountPrice}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95"
              aria-label="Add to Cart"
            >
              <FaCartPlus size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
