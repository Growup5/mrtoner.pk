import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "How to Choose the Right Printer for Your Office",
      date: "February 25, 2025",
      excerpt: "Learn how to select the best printer for your business needs.",
      wikiLink: "https://en.wikipedia.org/wiki/Printer_(computing)"
    },
    {
      id: 2,
      title: "Top 5 Maintenance Tips for Your Photocopier",
      date: "February 20, 2025",
      excerpt: "Keep your photocopier running smoothly with these tips.",
      wikiLink: "https://en.wikipedia.org/wiki/Photocopier"
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.date}</p>
              <p className="text-gray-700 mb-2">{post.excerpt}</p>
              <a href={post.wikiLink} className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
