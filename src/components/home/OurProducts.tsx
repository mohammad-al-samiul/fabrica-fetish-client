"use client";
import { useGetHomeProducts } from "@/hooks/product.hook";
import React from "react";
import Container from "../ui/Container";
import { IProduct } from "@/types";
import Card from "../ui/Card";
import { Button } from "@nextui-org/react";
import NextLink from "next/link";

export default function OurProducts() {
  const { data, isLoading } = useGetHomeProducts();

  const products = data?.data;

  return (
    <>
      {!isLoading && (
        <Container>
          <div className="mt-8">
            <h2 className="text-3xl font-bold mb-6 text-center uppercase">
              Our Products
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 items-center justify-center p-5">
              {products?.map((item: IProduct) => (
                <Card key={item._id} item={item} />
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <Button
              className="bg-default-800 text-white rounded-lg"
              as={NextLink}
              href="/products"
            >
              View All
            </Button>
          </div>
        </Container>
      )}
    </>
  );
}
