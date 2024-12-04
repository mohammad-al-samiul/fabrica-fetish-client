"use client";
import { IProduct } from "@/types";
import React, { useEffect, useState } from "react";
import Card from "../ui/Card";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "../ui/icons";
import Loading from "../ui/Loading";

interface IProps {
  allProducts: IProduct[];
}
export default function AllProducts({ allProducts }: IProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    ...new Set(allProducts?.map((product: IProduct) => product.category)),
  ];

  // useEffect(() => {
  //   const header = document.querySelector("header");
  //   if (header) {
  //     header.classList.add("nav-zero-padding");
  //   }
  // }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, searchQuery]);

  const filterProducts = () => {
    let filtered = allProducts;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product: IProduct) => product.category === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((product: IProduct) =>
        product?.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  return (
    <>
      <div className="mx-auto py-8 px-5">
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

        {/* Search Input */}
        <div className="mb-6 flex items-center justify-center w-full">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            placeholder="Search..."
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-400" />
            }
            className="w-[80%] lg:w-[30%]"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Product Grid */}
        <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts?.map((product: IProduct) => (
            <Card key={product._id} item={product} />
          ))}
        </ul>

        {/* No Products Found Message */}
        {filteredProducts?.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No products found matching your criteria.
          </p>
        )}
      </div>
    </>
  );
}
