import { createOrder, getAllOrder } from "@/services/OrderService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

export const useCreateOrder = () => {
  return useMutation({
    mutationKey: ["CREATE_ORDER"],
    mutationFn: async (orderData: SubmitHandler<FieldValues>) =>
      await createOrder(orderData),

    onSuccess: () => {
      toast.success("Ordered Successfull");
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
};
export const useGetAllOrders = () => {
  return useQuery({
    queryKey: ["GET_ORDERS"],
    queryFn: async () => await getAllOrder(),
  });
};
