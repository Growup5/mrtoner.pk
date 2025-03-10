import React, { useState } from 'react';

const SearchComponent = () => {
  const printers = [
    { id: 1, name: 'HP LaserJet Pro', model: 'M404n', features: 'Mono, Fast Printing' },
    { id: 2, name: 'Canon PIXMA', model: 'G6020', features: 'Color, Wireless' },
    { id: 3, name: 'Brother HL-L8360CDW', model: 'Color Laser', features: 'Color, Duplex' },
    { id: 4, name: 'Epson EcoTank', model: 'ET-2720', features: 'Ink Tank, Wireless' },
    { id: 5, name: 'Samsung Xpress', model: 'M2020W', features: 'Mono, Wireless' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPrinters, setFilteredPrinters] = useState(printers);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = printers.filter((printer) => 
      printer.name.toLowerCase().includes(value.toLowerCase()) ||
      printer.model.toLowerCase().includes(value.toLowerCase()) ||
      printer.features.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredPrinters(filtered);
  };

  return (
    <div className="relative lg:ml-6 w-full">
      <input
        type="text"
        placeholder="Search Printers..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-gray-400 w-full"
      />
      
      {/* Results container with positioning for better display */}
      {searchTerm && (
        <ul className="absolute top-full left-0 w-full bg-gray-800 text-white mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {filteredPrinters.length > 0 ? (
            filteredPrinters.map((printer) => (
              <li key={printer.id} className="border-b border-gray-700 py-2 px-4 hover:bg-gray-700">
                <h3 className="font-bold">{printer.name}</h3>
                <p>Model: {printer.model}</p>
                <p>Features: {printer.features}</p>
              </li>
            ))
          ) : (
            <li className="text-white py-2 px-4">No results found.</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
