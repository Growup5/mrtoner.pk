import { useState } from "react";
import React from "react";
const printers = [
  { id: 1, name: "HP LaserJet Pro", price: "$199", image: "https://via.placeholder.com/150", description: "Fast and reliable printer for home and office use." },
  { id: 2, name: "Canon Pixma G7020", price: "$249", image: "https://via.placeholder.com/150", description: "High-quality ink tank printer with wireless connectivity." },
  { id: 3, name: "Epson EcoTank ET-2760", price: "$299", image: "https://via.placeholder.com/150", description: "Eco-friendly printer with refillable ink tanks." },
  { id: 4, name: "Brother HL-L2350DW", price: "$169", image: "https://via.placeholder.com/150", description: "Compact monochrome laser printer with duplex printing." },
  { id: 5, name: "Samsung Xpress M2020W", price: "$149", image: "https://via.placeholder.com/150", description: "Wireless monochrome laser printer with mobile printing support." },
  { id: 6, name: "Xerox Phaser 6510", price: "$349", image: "https://via.placeholder.com/150", description: "High-performance color laser printer for small businesses." },
];

export default function PrinterList() {
  const [search, setSearch] = useState("");

  const filteredPrinters = printers.filter((printer) =>
    printer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Professional Printer Catalog</h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search printers..."
          className="w-1/2 p-3 border rounded shadow-sm focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPrinters.length > 0 ? (
          filteredPrinters.map((printer) => (
            <div key={printer.id} className="border p-5 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <img
                src={printer.image}
                alt={printer.name}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h2 className="text-xl font-semibold mb-2">{printer.name}</h2>
              <p className="text-gray-700 mb-3">{printer.description}</p>
              <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">

                contact now              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No printers found.</p>
        )}
      </div>
    </div>
  );
}
