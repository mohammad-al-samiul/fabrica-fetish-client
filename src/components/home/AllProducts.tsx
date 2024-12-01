"use client";
import { IProduct } from "@/types";
import React, { useEffect, useState } from "react";
import Card from "../ui/Card";

export default function AllProducts({
  allProducts,
}: {
  allProducts: IProduct[];
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const categories = [
    "All",
    ...new Set(allProducts?.map((product: IProduct) => product.category)),
  ];

  //console.log("categories", categories);

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      header.classList.add("nav-zero-padding");
    }
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter(
          (product: IProduct) => product.category === selectedCategory
        )
      );
    }
  }, [selectedCategory]);
  return (
    <div className="mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>

      {/* Category Filter Dropdown */}
      <div className="mb-6 flex justify-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-default-800"
        >
          {categories.map((category, index) => (
            <option
              className="bg-default-800 text-default-50 hover:bg-default-900"
              key={index}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product: IProduct) => (
          <Card key={product._id} item={product} />
        ))}
      </ul>

      {/* No Products Found Message */}
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No products found in this category.
        </p>
      )}
    </div>
  );
}
