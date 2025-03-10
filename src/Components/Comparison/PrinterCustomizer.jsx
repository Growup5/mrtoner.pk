import React, { useState } from 'react';

const PrinterCustomizer = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedAccessories, setSelectedAccessories] = useState([]);
  const [showQuote, setShowQuote] = useState(false);

  const colors = ["Black", "White", "Silver"];
  const accessories = ["Extra Ink Cartridges", "Paper Tray", "Wireless Adapter"];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Customize Your Printer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Color Selector */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Choose Color</h3>
            <div className="flex space-x-4">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color.toLowerCase())}
                  className={`px-4 py-2 rounded-full ${
                    selectedColor === color.toLowerCase() ? "bg-gray-600 text-white" : "bg-gray-200"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Add Accessories</h3>
            <div className="space-y-2">
              {accessories.map((accessory) => (
                <label key={accessory} className="flex items-center">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedAccessories([...selectedAccessories, accessory]);
                      } else {
                        setSelectedAccessories(selectedAccessories.filter((a) => a !== accessory));
                      }
                    }}
                    className="mr-2"
                  />
                  {accessory}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Your Customized Printer</h3>
          <p><strong>Color:</strong> {selectedColor}</p>
          <p><strong>Accessories:</strong> {selectedAccessories.join(", ") || "None"}</p>
          <button 
            className="mt-4 bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-700"
            onClick={() => setShowQuote(true)}
          >
            Request Quote
          </button>

          {showQuote && (
            <div className="mt-4 p-4 border border-gray-300 rounded-lg bg-gray-50">
              <p className="text-lg font-semibold">Your quote has been generated!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrinterCustomizer;
