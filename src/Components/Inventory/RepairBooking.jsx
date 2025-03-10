import React, { useState } from 'react';

const RepairBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    issue: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your repair booking request has been submitted!");
    setFormData({ name: "", email: "", phone: "", issue: "" });
  };

  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Book a Printer Repair</h2>
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
            <label htmlFor="issue" className="block text-sm font-medium text-gray-700">Issue Description</label>
            <textarea
              id="issue"
              name="issue"
              rows="4"
              value={formData.issue}
              onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <button type="submit" className="w-full bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700">
              Book Repair
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RepairBooking;