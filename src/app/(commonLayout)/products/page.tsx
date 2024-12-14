"use client";

import Card from "@/components/ui/Card";
import { SearchIcon } from "@/components/ui/icons";
import Loading from "@/components/ui/Loading";
import { useGetAllProducts } from "@/hooks/product.hook";
import { IProduct } from "@/types";
import { Input, Pagination } from "@nextui-org/react";
import { useState } from "react";

const ITEMS_PER_PAGE = 8;

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading } = useGetAllProducts({
    page: currentPage,
    limit: ITEMS_PER_PAGE,
    category: selectedCategory === "All" ? undefined : selectedCategory,
    searchQuery,
  });

  const products = data?.data || [];
  const totalProducts = data?.data?.length || 0;
  const totalPages = Math.ceil(totalProducts / ITEMS_PER_PAGE) + 1;

  const categories = [
    "All",
    ...new Set(products.map((product: IProduct) => product.category)),
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const colors = "#171717";

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mx-auto py-8 px-5">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>

      {/* Category Filter Dropdown */}
      <div className="mb-6 flex justify-center">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-default-800"
        >
          {categories.map((category: any, index) => (
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
      <div className="mb-6 flex items-center justify-center w-full ">
        <Input
          aria-label="Search"
          classNames={{
            inputWrapper: "bg-default-100",
            input: "text-sm",
          }}
          placeholder="Search..."
          size="md"
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
        {products.map((product: IProduct) => (
          <Card key={product._id} item={product} />
        ))}
      </ul>

      {/* No Products Found Message */}
      {!isLoading && products.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No products found matching your criteria.
        </p>
      )}

      <div className="flex justify-center mt-6">
        {colors && (
          <Pagination
            showControls
            initialPage={1}
            total={totalPages}
            page={currentPage}
            aria-label="pagination"
            onChange={(page) => handlePageChange(page)}
          />
        )}
      </div>
    </div>
  );
}
