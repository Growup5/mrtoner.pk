import React, { useState } from "react";

const ProductReviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, name: "John Doe", rating: 5, comment: "Great printer! Fast and reliable." },
    { id: 2, name: "Jane Smith", rating: 4, comment: "Good quality, but the ink is a bit expensive." },
  ]);

  const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || newReview.rating === 0 || !newReview.comment) return;
    setReviews([...reviews, { id: reviews.length + 1, ...newReview }]);
    setNewReview({ name: "", rating: 0, comment: "" });
  };

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-center text-2xl font-bold mb-6">Customer Reviews</h3>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-100 p-4 rounded-lg shadow">
            <h4 className="font-bold text-lg">{review.name}</h4>
            <div className="flex items-center text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"}>★</span>
              ))}
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
      
      {/* Add Review Form */}
      <form onSubmit={handleSubmit} className="mt-8">
        <h4 className="text-center text-xl font-bold mb-4">Leave a Review</h4>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
          <select
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          >
            <option value="0">Select Rating</option>
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>{star} Star{star > 1 ? "s" : ""}</option>
            ))}
          </select>
          <textarea
            placeholder="Your Review"
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            rows="4"
            required
          ></textarea>
          <button type="submit" className="w-full bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition duration-300">
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductReviews;
