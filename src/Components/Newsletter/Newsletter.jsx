import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing! We'll send updates to ${email}.`);
    setEmail("");
  };

  return (
    <div className="bg-gray-800 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-xl mb-8">Get the latest updates, promotions, and tips straight to your inbox.</p>
        <form onSubmit={handleSubmit} className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 w-64 rounded-l-lg focus:outline-none text-black"
            required
          />
          <button type="submit" className="bg-gray-600 text-white px-6 py-2 rounded-r-lg hover:bg-gray-500">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;