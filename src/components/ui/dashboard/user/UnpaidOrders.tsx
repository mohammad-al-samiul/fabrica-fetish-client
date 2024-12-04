import { IOrderProps } from "@/app/(dashboardLayout)/user/my-orders/page";
import { Button, Table } from "antd";
import { useMemo } from "react";

import { useCreatePaymentUrl } from "@/hooks/payment.hook";

const UnpaidOrders = ({ orders }: { orders: IOrderProps[] }) => {
  const { mutate: handleCreatePayment } = useCreatePaymentUrl();

  const handlePayment = async (item: any) => {
    const paymentInfo = {
      clientName: item?.user?.name,
      clientEmail: item?.user?.email,
      clientPhoneNo: item?.user?.phone,
      orderId: item?._id,
      totalCost: item?.totalAmount,
      address: item?.user?.address,
      date: new Date().toISOString(),
    };

    handleCreatePayment(paymentInfo);
  };

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
        render: (unpaidItem: any) =>
          unpaidItem.status === "unpaid" && (
            <Button onClick={() => handlePayment(unpaidItem)}>Pay Now</Button>
          ),
      },
    ],
    []
  );

  return (
    <div>
      <Table
        dataSource={orders}
        columns={columns}
        scroll={{ x: 800 }}
        rowKey="_id"
      />
    </div>
  );
};

export default UnpaidOrders;
