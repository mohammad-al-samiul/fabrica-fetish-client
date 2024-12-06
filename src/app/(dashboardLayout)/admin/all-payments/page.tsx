"use client";

import Loading from "@/components/ui/Loading";
import { useGetAllOrders } from "@/hooks/order.hook";
import { getAllOrder } from "@/services/OrderService";
import { IOrderProps } from "@/types";
import { Button, Table } from "antd";
import { useMemo } from "react";

export default function AllPayments() {
  const { data: orders, isLoading } = useGetAllOrders();

  const ordersData = orders?.data;
  const paidOrders = useMemo(
    () =>
      ordersData?.filter((order: IOrderProps) => order.status === "paid") || [],
    [ordersData]
  );

  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "tnxId",
      key: "tnxId",
      render: (tnxId: string) => tnxId,
    },
    {
      title: "Customer Name",
      dataIndex: ["user", "name"],
      key: "customerName",
    },
    {
      title: "Email",
      dataIndex: ["user", "email"],
      key: "email",
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (amount: number) => `${amount.toFixed(2)}`,
    },
    {
      title: "Quantity",
      key: "totalQuantity",
      render: (_: any, record: IOrderProps) =>
        record?.products!.reduce(
          (sum: number, product: any) => sum + product.quantity,
          0
        ),
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Action",
      key: "payment",
      render: (unpaidItem: any) => <p>Paid</p>,
    },
  ];

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Table
        dataSource={paidOrders}
        columns={columns}
        scroll={{ x: 800 }}
        rowKey="_id"
      />
    </>
  );
}
