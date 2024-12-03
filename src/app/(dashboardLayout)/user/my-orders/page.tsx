"use client";

import PaidOrders from "@/components/ui/dashboard/user/PaidOrders";
import UnpaidOrders from "@/components/ui/dashboard/user/UnpaidOrders";
import Loading from "@/components/ui/Loading";
import { useCreateOrder, useGetAllOrders } from "@/hooks/order.hook";
import { IProduct, IUser } from "@/types";
import { Tabs, TabsProps } from "antd";
import React, { useMemo } from "react";

export type TOrderProps = {
  _id: string;
  user: IUser;
  products: IProduct[];
  totalAmount: number;
  status: string;
  date: string;
};

export default function MyOrder() {
  const { data: orders, isLoading } = useGetAllOrders();
  const { mutate: handleCreateOrder, isPending, isSuccess } = useCreateOrder();

  const ordersData = orders?.data;
  const paidOrders = useMemo(
    () =>
      ordersData?.filter((order: TOrderProps) => order.status === "paid") || [],
    [ordersData]
  );

  const unpaidOrders = useMemo(
    () =>
      ordersData?.filter((order: TOrderProps) => order.status === "unpaid") ||
      [],
    [ordersData]
  );

  const items: TabsProps["items"] = useMemo(
    () => [
      {
        key: "1",
        label: "Unpaid Orders",
        children: <UnpaidOrders orders={unpaidOrders} />,
      },
      {
        key: "2",
        label: "Paid Orders",
        children: <PaidOrders orders={paidOrders} />,
      },
    ],
    [paidOrders, unpaidOrders]
  );

  if (isLoading) return <Loading />;
  return (
    <div>
      <h1>Order Management</h1>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}
