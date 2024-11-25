"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import { Image } from "@nextui-org/react";

type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  category: string;
  image: string;
};

type Category = {
  id: number;
  name: string;
};

const allProducts = [
  {
    id: 1,
    name: "Smartphone",
    price: 699,
    rating: 4.5,
    category: "Electronics",
    image: "/images/smartphone.jpg",
  },
  {
    id: 2,
    name: "T-shirt",
    price: 29,
    rating: 4.2,
    category: "Clothing",
    image: "/images/tshirt.jpg",
  },
  {
    id: 3,
    name: "Table Lamp",
    price: 45,
    rating: 4.8,
    category: "Home Decor",
    image: "/images/lamp.jpg",
  },
  {
    id: 4,
    name: "Novel",
    price: 15,
    rating: 4.9,
    category: "Books",
    image: "/images/novel.jpg",
  },
  {
    id: 5,
    name: "Lipstick",
    price: 12,
    rating: 4.6,
    category: "Beauty",
    image: "/images/lipstick.jpg",
  },
  {
    id: 6,
    name: "Laptop",
    price: 1200,
    rating: 4.7,
    category: "Electronics",
    image: "/images/laptop.jpg",
  },
  {
    id: 7,
    name: "Jeans",
    price: 40,
    rating: 4.3,
    category: "Clothing",
    image: "/images/jeans.jpg",
  },
  {
    id: 8,
    name: "Sofa Set",
    price: 800,
    rating: 4.8,
    category: "Home Decor",
    image: "/images/sofa.jpg",
  },
  {
    id: 9,
    name: "Cookbook",
    price: 20,
    rating: 4.5,
    category: "Books",
    image: "/images/cookbook.jpg",
  },
  {
    id: 10,
    name: "Foundation",
    price: 25,
    rating: 4.4,
    category: "Beauty",
    image: "/images/foundation.jpg",
  },
];

const categories = [
  "All",
  ...new Set(allProducts.map((product) => product.category)),
];

export default function CategoryProduct() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter((product) => product.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>

      {/* Category Filter Dropdown */}
      <div className="mb-6 flex justify-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden border border-gray-200"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm">{product.category}</p>
              <p className="mt-2 text-gray-800 font-bold">${product.price}</p>
              <p className="text-yellow-500 mt-1">⭐ {product.rating}</p>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 hover:bg-blue-600 transition duration-300">
              Add to Cart
            </button>
          </li>
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
