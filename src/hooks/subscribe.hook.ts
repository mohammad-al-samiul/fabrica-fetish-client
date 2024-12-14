import { doSubscribe } from "@/services/SubscribeService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useSubscribeMutation = () => {
  return useMutation({
    mutationKey: ["SUBSCRIBE"],
    mutationFn: async (email: string) => await doSubscribe(email),
  });
};
