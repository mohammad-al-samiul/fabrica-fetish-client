import React from "react";

export default function FAQ() {
  return (
    <section className="py-12 px-6 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
      <div className="max-w-screen-lg mx-auto space-y-6">
        {[
          {
            question: "What is your return policy?",
            answer: "You can return items within 30 days of purchase.",
          },
          {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship to most countries worldwide.",
          },
          {
            question: "How can I track my order?",
            answer:
              "You will receive a tracking link after your order is shipped.",
          },
        ].map((faq, index) => (
          <div
            key={index}
            className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
          >
            <h3 className="font-semibold">{faq.question}</h3>
            <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
