import { TOrderProps } from "@/app/(dashboardLayout)/user/my-orders/page";
import { Button, Table } from "antd";
import { useMemo } from "react";

const UnpaidOrders = ({ orders }: { orders: TOrderProps[] }) => {
  const columns = useMemo(
    () => [
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
        render: (amount: number) => `$${amount.toFixed(2)}`,
      },
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
        render: (date: string) => new Date(date).toLocaleDateString(),
      },
      {
        title: "Action",
        key: "action",
        render: (order: TOrderProps) => <Button>Mark as Paid</Button>,
      },
    ],
    []
  );

  return (
    <div>
      <Table dataSource={orders} columns={columns} rowKey="_id" />
    </div>
  );
};

export default UnpaidOrders;
