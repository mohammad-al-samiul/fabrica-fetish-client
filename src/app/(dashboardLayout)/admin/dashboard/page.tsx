"use client";
import dynamic from "next/dynamic";

import Loading from "@/components/ui/Loading";
import { useGetAllUser } from "@/hooks/auth.hook";
import { useGetAllOrders } from "@/hooks/order.hook";
import { useGetAllProducts } from "@/hooks/product.hook";
import { IOrderProps, IProduct } from "@/types";
import React, { useMemo } from "react";

// Dynamically import AdminStats with ssr: false to disable SSR
const AdminStats = dynamic(
  () => import("@/components/ui/dashboard/admin/AdminStats"),
  {
    ssr: false,
  }
);
const RevenueChart = dynamic(
  () => import("@/components/ui/dashboard/admin/RevenueChart"),
  {
    ssr: false,
  }
);
const ProductBrandChart = dynamic(
  () => import("@/components/ui/dashboard/user/ProductCategoryChart"),
  {
    ssr: false,
  }
);

export default function AdminDashboard() {
  const { data: productData, isLoading: productLoading } = useGetAllProducts();
  const { data: orderData, isLoading: orderLoading } = useGetAllOrders();
  const { data: userData, isLoading: userLoading } = useGetAllUser();

  const totalRevenue = useMemo(() => {
    return (
      orderData?.data?.reduce((acc: any, order: IOrderProps) => {
        return order.status === "paid" ? acc + order.totalAmount : acc;
      }, 0) || 0
    );
  }, [orderData?.data]);

  const totalOrders = useMemo(() => {
    return (
      orderData?.data?.filter((order: IOrderProps) => order?.status === "paid")
        .length || 0
    );
  }, [orderData?.data]);

  const totalProducts = useMemo(() => {
    return (
      productData?.data?.reduce((total: number, product: IProduct) => {
        return total + (product.quantity || 0);
      }, 0) || 0
    );
  }, [productData?.data]);

  const totalUser = userData?.data?.length || 0;

  if (orderLoading || userLoading || productLoading) {
    return <Loading />;
  }

  return (
    <>
      <section>
        <AdminStats
          totalProducts={totalProducts}
          totalOrders={totalOrders}
          totalRevenue={totalRevenue}
          totalUser={totalUser}
        />
        <div className="flex lg:flex-row flex-col justify-between items-center gap-8 mt-16">
          <div className="lg:w-[750px] md:w-[450px] sm:w-[450px] w-[320px]">
            <RevenueChart orderData={orderData?.data} />
          </div>
          <div className="sm:w-[350px] lg:w-[450px]">
            <ProductBrandChart
              products={productData?.data}
              title="Product Brand Distribution"
            />
          </div>
        </div>
      </section>
    </>
  );
}
