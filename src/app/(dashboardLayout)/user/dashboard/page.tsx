"use client";

import dynamic from "next/dynamic";

const ExpenseChart = dynamic(
  () => import("@/components/ui/dashboard/user/ExpenseChart"),
  { ssr: false }
);
const ProductBrandChart = dynamic(
  () => import("@/components/ui/dashboard/user/ProductCategoryChart"),
  { ssr: false }
);
const UserStats = dynamic(
  () => import("@/components/ui/dashboard/user/UserStats"),
  { ssr: false }
);

import React, { useMemo } from "react";

import Loading from "@/components/ui/Loading";
import { useGetAllOrders } from "@/hooks/order.hook";

export default function UserDashboard() {
  const { data, isLoading } = useGetAllOrders();
  // Safely transform data
  const products = useMemo(() => {
    return (
      data?.data
        ?.filter((order: any) => order.status === "paid") // Filter paid orders
        .map((order: any) =>
          order.products.map((product: any) => ({
            ...product,
            date: order.date,
          }))
        )
        .flat() || []
    );
  }, [data?.data]);

  if (isLoading) {
    return <Loading />;
  }

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
