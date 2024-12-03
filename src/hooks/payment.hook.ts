import { createPaymentUrl } from "@/services/PaymentService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreatePayment = () => {
  return useMutation({
    mutationKey: ["CREATE_PAYMENT"],
    mutationFn: async (orderData: any) => await createPaymentUrl(orderData),
    onSuccess: (data) => {
      if (data.payment_url) {
        window.open(data.payment_url, "_blank");
      }
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
};
