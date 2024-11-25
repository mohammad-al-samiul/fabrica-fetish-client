import React from "react";

export default function Testimonial() {
  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <p className="text-lg italic">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore."
            </p>
            <div className="mt-4 flex items-center space-x-4">
              <img
                src={`/users/user-${index + 1}.jpg`}
                alt={`Customer ${index + 1}`}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="text-sm font-semibold">Customer {index + 1}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Verified Buyer
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
