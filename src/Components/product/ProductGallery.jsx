import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Smart Watch",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    image: "https://via.placeholder.com/300",
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition transform hover:scale-105 hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">{product.price}</p>
        <button className="mt-3 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700">Contact Now</button>
      </div>
    </div>
  );
};

const ProductGallery = () => {
  return (
    <div className="max-w-6xl mx-auto p-5">
      <h2 className="text-3xl font-bold text-center mb-6">Product Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
