import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error loading products:", err));
      
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 font-bold text-slate-600">
        Loading Collection...
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 md:px-12">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-green-500 pl-4 uppercase tracking-wider">
          Our Collection
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((item) => (
            <Link
              key={item.id}
              to={`/product-details/${item.id}`}
              className="block hover:no-underline"
            >
              <ProductCard product={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
