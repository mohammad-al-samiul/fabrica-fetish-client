import { createOrder, getAllOrder } from "@/services/OrderService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

export const useCreateOrder = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["CREATE_ORDER"],
    mutationFn: async (orderData: any) => await createOrder(orderData),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_ORDERS"] });
      toast.success("Ordered Successfull");
      router.push("/user/my-orders");
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
