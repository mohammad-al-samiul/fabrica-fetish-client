import { IOrderProps } from "@/app/(dashboardLayout)/user/my-orders/page";
import { Button, Table } from "antd";
import { useMemo } from "react";
import { notification } from "antd";
import { useCreatePaymentUrl } from "@/hooks/payment.hook";

type NotificationType = "success" | "info" | "warning" | "error";

interface IProps {
  clientName: string;
  address: string;
  clientPhoneNo: number;
  clientEmail: string;
  orderId: string;
  totalCost: number;
  quantity: number;
  date: string;
}

const UnpaidOrders = ({ orders }: { orders: IOrderProps[] }) => {
  const [api, contextHolder] = notification.useNotification();
  const {
    mutate: handleCreatePayment,
    isPending,
    isSuccess,
  } = useCreatePaymentUrl();

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

  const openNotificationWithIcon = (type: NotificationType) => {
    api[type]({
      message: "You will not able to pay",
      description: "After returning bike you will be able to pay",
    });
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
        title: "Date",
        dataIndex: "date",
        key: "date",
        render: (date: string) => new Date(date).toLocaleDateString(),
      },

      {
        title: "Action",
        key: "payment",
        render: (unpaidItem: any) =>
          unpaidItem.status === "unpaid" ? (
            <Button onClick={() => handlePayment(unpaidItem)}>Pay Now</Button>
          ) : (
            <>
              {contextHolder}
              <Button onClick={() => openNotificationWithIcon("error")}>
                Paid
              </Button>
            </>
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
