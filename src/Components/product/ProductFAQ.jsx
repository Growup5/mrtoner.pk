import React, { useState } from 'react';

const ProductFAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "What is the warranty period for this printer?",
      answer: "This printer comes with a 1-year limited warranty.",
    },
    {
      id: 2,
      question: "Does this printer support wireless printing?",
      answer: "Yes, this printer supports Wi-Fi and Bluetooth connectivity.",
    },
    {
      id: 3,
      question: "What type of ink does this printer use?",
      answer: "This printer uses XYZ ink cartridges, which are available on our website.",
    },
  ];

  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className=" flex flex-col items-center my-8">
      <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-white p-4 rounded-lg shadow-lg">
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full text-left flex justify-between items-center"
            >
              <span className="font-medium">{faq.question}</span>
              <span>{activeId === faq.id ? "−" : "+"}</span>
            </button>
            {activeId === faq.id && <p className="mt-2 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFAQ;