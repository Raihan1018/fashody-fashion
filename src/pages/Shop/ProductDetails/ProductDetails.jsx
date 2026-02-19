import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((p) => p.id === parseInt(id));
        setProduct(foundProduct);
        setSelectedImage(foundProduct?.image);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="py-20 text-center text-lg font-semibold">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto p-8 flex flex-col lg:flex-row gap-12">
      {/* LEFT SIDE - GALLERY */}
      <div className="flex-1 space-y-4">
        <img
          src={selectedImage}
          alt={product.title}
          className="rounded-xl w-full h-[500px] object-cover"
        />

        {/* Thumbnail Images */}
        <div className="flex gap-4">
          {product.gallery.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="gallery"
              onClick={() => setSelectedImage(img)}
              className="w-24 h-24 object-cover rounded cursor-pointer border hover:border-green-500"
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - DETAILS */}
      <div className="flex-1 space-y-5">
        {/* Title */}
        <h1 className="text-4xl font-bold">{product.title}</h1>

        {/* Brand & Slug */}
        <p className="text-gray-500">
          Brand: <span className="font-semibold">{product.brand}</span>
        </p>

        <p className="text-gray-400 text-sm">Product Code: {product.slug}</p>

        {/* Rating */}
        <p className="text-yellow-500 font-semibold">⭐ {product.rating} / 5</p>

        {/* Price */}
        <div className="flex items-center gap-4">
          <span className="text-green-600 text-3xl font-bold">
            ${product.discountPrice}
          </span>
          <span className="line-through text-gray-400 text-lg">
            ${product.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600">{product.description}</p>

        {/* Composition */}
        <div className="bg-gray-100 p-4 rounded">
          <p className="italic">Composition: {product.composition}</p>
        </div>

        {/* Sizes */}
        <div>
          <h3 className="font-semibold mb-2">Available Sizes:</h3>
          <div className="flex gap-3">
            {product.sizes.map((size, index) => (
              <span
                key={index}
                className="border px-4 py-2 rounded cursor-pointer hover:bg-green-600 hover:text-white"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div>
          <h3 className="font-semibold mb-2">Available Colors:</h3>
          <div className="flex gap-3">
            {product.colors.map((color, index) => (
              <span key={index} className="border px-4 py-2 rounded">
                {color}
              </span>
            ))}
          </div>
        </div>

        {/* Category & Stock */}
        <p className="text-sm text-gray-500">Category: {product.category}</p>

        <p className="text-sm text-gray-500">
          Stock Available: {product.stock}
        </p>

        {/* Author Section */}
        <div className="flex items-center gap-3 border-t pt-4">
          <img
            src={product.author.image}
            alt={product.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-semibold">
              Posted by {product.author.name}
            </p>
            <p className="text-xs text-gray-400">{product.postedDate}</p>
          </div>
        </div>

        {/* Button */}
        <button onClick={() => toast('Product adding feature is coming soon')} className="bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-700 transition w-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
