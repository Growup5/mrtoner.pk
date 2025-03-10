import React from 'react';

const ProductAccessories = () => {
    const accessories = [
        {
            id: 1,
            name: "Extra Ink Cartridges",
            image: "https://via.placeholder.com/150/0000FF/808080?text=Ink+Cartridges",
        },
        {
            id: 2,
            name: "Paper Tray",
            image: "https://via.placeholder.com/150/008000/FFFFFF?text=Paper+Tray",
        },
        {
            id: 3,
            name: "Wireless Adapter",
            image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Wireless+Adapter",
        },
    ];

    return (
        <div className="max-w-3xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-center text-2xl font-bold mb-6">Recommended Accessories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {accessories.map((accessory) => (
                    <div key={accessory.id} className="bg-gray-100 p-4 rounded-lg shadow text-center">
                        <img src={accessory.image} alt={accessory.name} className="w-full h-32 object-cover mb-4 rounded-md" />
                        <h4 className="font-semibold text-lg">{accessory.name}</h4>
                        <p className="text-gray-700 font-medium">{accessory.price}</p>
                        <button className="mt-3 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300">
                            Contact now          
                              </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductAccessories;
