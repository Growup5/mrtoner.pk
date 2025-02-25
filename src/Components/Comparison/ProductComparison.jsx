import React, { useState } from 'react';

const ProductComparison = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const products = [
    { id: 1, name: "Inkjet Printer", price: "$200", speed: "20 ppm", resolution: "1200 dpi" },
    { id: 2, name: "Laser Printer", price: "$400", speed: "30 ppm", resolution: "2400 dpi" },
    { id: 3, name: "3D Printer", price: "$800", speed: "N/A", resolution: "0.1 mm" },
  ];

  const toggleProduct = (product) => {
    if (selectedProducts.some((p) => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Compare Printers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold mb-4">{product.name}</h3>
              <button
                onClick={() => toggleProduct(product)}
                className="bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
              >
                {selectedProducts.some((p) => p.id === product.id) ? "Remove" : "Compare"}
              </button>
            </div>
          ))}
        </div>
        {selectedProducts.length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Comparison</h3>
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr>
                  <th className="px-4 py-2">Feature</th>
                  {selectedProducts.map((product) => (
                    <th key={product.id} className="px-4 py-2">{product.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">Price</td>
                  {selectedProducts.map((product) => (
                    <td key={product.id} className="px-4 py-2">{product.price}</td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 py-2">Speed</td>
                  {selectedProducts.map((product) => (
                    <td key={product.id} className="px-4 py-2">{product.speed}</td>
                  ))}
                </tr>
                <tr>
                  <td className="px-4 py-2">Resolution</td>
                  {selectedProducts.map((product) => (
                    <td key={product.id} className="px-4 py-2">{product.resolution}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductComparison;