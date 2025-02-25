import React, { useState } from 'react';

const PrinterConfigurator = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      question: "What will you primarily use the printer for?",
      options: ["Home Use", "Office Use", "Professional Printing"],
    },
    {
      id: 2,
      question: "What is your budget?",
      options: ["Under $200", "$200 - $500", "Over $500"],
    },
    {
      id: 3,
      question: "Do you need color printing?",
      options: ["Yes", "No"],
    },
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
    setStep(step + 1);
  };

  const getRecommendation = () => {
    if (answers[1] === "Home Use" && answers[2] === "Under $200") {
      return "Inkjet Printer";
    } else if (answers[1] === "Office Use" && answers[2] === "$200 - $500") {
      return "Laser Printer";
    } else {
      return "3D Printer";
    }
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Find Your Perfect Printer</h2>
        {step <= questions.length ? (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{questions[step - 1].question}</h3>
            <div className="space-y-4">
              {questions[step - 1].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(questions[step - 1].id, option)}
                  className="w-full bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-700"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-4">We Recommend:</h3>
            <p className="text-2xl text-gray-600">{getRecommendation()}</p>
            <button
              onClick={() => setStep(1)}
              className="mt-4 bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-900"
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrinterConfigurator;