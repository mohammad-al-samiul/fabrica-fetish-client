import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";

import { loginUser, registerUser } from "../services/AuthService";

export const useUserRegistration = () => {
  const router = useRouter();

  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => {
      const user = await registerUser(userData);

      if (user) {
        router.push("/login");
      }
    },
    onSuccess: () => {
      toast.success("User Registration Successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => {
      await loginUser(userData);
    },
    onSuccess: () => {
      toast.success("User Login Successfull");
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
};
