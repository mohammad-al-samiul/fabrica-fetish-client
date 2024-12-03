import { createOrder, getAllOrder } from "@/services/OrderService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["CREATE_ORDER"],
    mutationFn: async (orderData: any) => await createOrder(orderData),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_ORDERS"] });
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
