import React from "react";

export default function Feature() {
  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
          >
            <img
              src={`/products/product-${index + 1}.jpg`}
              alt={`Product ${index + 1}`}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">Product {index + 1}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Starting from $29.99
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
