import React, { useState } from 'react';

const PricingCalculator = () => {
  const [printerPrice, setPrinterPrice] = useState(200);
  const [accessories, setAccessories] = useState([]);
  const [shipping, setShipping] = useState(0);

  const accessoriesList = [
    { id: 1, name: "Extra Ink Cartridges", price: 50 },
    { id: 2, name: "Paper Tray", price: 30 },
    { id: 3, name: "Wireless Adapter", price: 20 },
  ];

  const shippingOptions = [
    { id: 1, name: "Standard Shipping", price: 10 },
    { id: 2, name: "Express Shipping", price: 25 },
  ];

  const totalAccessoriesPrice = accessories.reduce((sum, acc) => sum + acc.price, 0);
  const totalPrice = printerPrice + totalAccessoriesPrice + shipping;

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing Calculator</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Select Accessories</h3>
          <div className="space-y-2">
            {accessoriesList.map((accessory) => (
              <label key={accessory.id} className="flex items-center">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAccessories([...accessories, accessory]);
                    } else {
                      setAccessories(accessories.filter((a) => a.id !== accessory.id));
                    }
                  }}
                  className="mr-2"
                />
                {accessory.name} (${accessory.price})
              </label>
            ))}
          </div>

          <h3 className="text-xl font-bold mt-6 mb-4">Select Shipping</h3>
          <div className="space-y-2">
            {shippingOptions.map((option) => (
              <label key={option.id} className="flex items-center">
                <input
                  type="radio"
                  name="shipping"
                  onChange={() => setShipping(option.price)}
                  className="mr-2"
                />
                {option.name} (${option.price})
              </label>
            ))}
          </div>

          <h3 className="text-xl font-bold mt-6 mb-4">Total Price</h3>
          <p className="text-2xl text-gray-600">${totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;