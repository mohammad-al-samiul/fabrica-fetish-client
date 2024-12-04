import { IOrderProps } from "@/types";
import { Table } from "antd";

const PaidOrders = ({ orders }: { orders: IOrderProps[] }) => {
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
  ];

  return (
    <>
      <Table
        dataSource={orders}
        columns={columns}
        scroll={{ x: 800 }}
        rowKey="_id"
      />
    </>
  );
};

export default PaidOrders;
