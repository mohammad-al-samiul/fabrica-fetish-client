"use client";
import ExpenseChart from "@/components/ui/dashboard/user/ExpenseChart";
import ProductBrandChart from "@/components/ui/dashboard/user/ProductCategoryChart";
import UserStats from "@/components/ui/dashboard/user/UserStats";
import Loading from "@/components/ui/Loading";
import { useGetAllOrders } from "@/hooks/order.hook";
import React from "react";

export default function UserDashboard() {
  const { data, isLoading } = useGetAllOrders();
  const products = data?.data
    .map((order: any) =>
      order.products.map((product: any) => ({
        ...product,
        date: order.date,
      }))
    )
    .flat();

  return (
    <>
      {isLoading && <Loading />}
      <section>
        <UserStats orders={products} />
        <div className="flex flex-col lg:flex-row gap-8 mt-16">
          <div className="lg:w-[60%]">
            <ExpenseChart orderData={data?.data} />
          </div>
          <div className="lg:w-[40%]">
            <ProductBrandChart
              products={products}
              title="Product Brand Distribution"
            />
          </div>
        </div>
      </section>
    </>
  );
}
