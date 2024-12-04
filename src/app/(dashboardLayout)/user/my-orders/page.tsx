"use client";

import PaidOrders from "@/components/ui/dashboard/user/PaidOrders";
import UnpaidOrders from "@/components/ui/dashboard/user/UnpaidOrders";
import Loading from "@/components/ui/Loading";
import { useGetAllOrders } from "@/hooks/order.hook";
import { IOrderProps, IProduct, IUser } from "@/types";
import { Tabs, TabsProps } from "antd";
import React, { useMemo } from "react";

export default function MyOrder() {
  const { data: orders, isPending, isSuccess } = useGetAllOrders();

  const ordersData = orders?.data;
  const paidOrders = useMemo(
    () =>
      ordersData?.filter((order: IOrderProps) => order.status === "paid") || [],
    [ordersData]
  );

  const unpaidOrders = useMemo(
    () =>
      ordersData?.filter((order: IOrderProps) => order.status === "unpaid") ||
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
    [paidOrders, unpaidOrders, ordersData]
  );

  return (
    <>
      {isPending && !isSuccess && <Loading />}
      <h1 className="text-3xl font-bold">Order Management</h1>
      <Tabs defaultActiveKey="1" items={items} />
    </>
  );
}
