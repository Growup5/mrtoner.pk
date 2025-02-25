import React, { useState } from 'react';

const TradeInProgram = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    printerModel: "",
    condition: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll contact you with a trade-in offer.");
    setFormData({ name: "", email: "", phone: "", printerModel: "", condition: "" });
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Printer Trade-In Program</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="printerModel" className="block text-sm font-medium text-gray-700">Printer Model</label>
            <input
              type="text"
              id="printerModel"
              name="printerModel"
              value={formData.printerModel}
              onChange={(e) => setFormData({ ...formData, printerModel: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="condition" className="block text-sm font-medium text-gray-700">Condition</label>
            <select
              id="condition"
              name="condition"
              value={formData.condition}
              onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select condition</option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="poor">Poor</option>
            </select>
          </div>
          <div>
            <button type="submit" className="w-full bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700">
              Get Trade-In Offer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TradeInProgram;