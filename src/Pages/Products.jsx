import React from "react";
const products = [
    { id: 1, name: "HP LaserJet Pro", price: "$299" },
    { id: 2, name: "Epson EcoTank", price: "$399" },
    { id: 3, name: "Canon PIXMA", price: "$199" },
  ];
  
  const Products = () => {
    return (
      <div className="p-10">
        <h2 className="text-3xl font-bold mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Products;
  