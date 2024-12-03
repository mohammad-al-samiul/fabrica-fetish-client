import { TOrderProps } from "@/app/(dashboardLayout)/user/my-orders/page";
import { Table } from "antd";

const PaidOrders = ({ orders }: { orders: TOrderProps[] }) => {
  const columns = [
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
  ];

  return <Table dataSource={orders} columns={columns} rowKey="_id" />;
};

export default PaidOrders;
