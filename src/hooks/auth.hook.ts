import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import { useRouter } from "next/navigation";

import {
  getAllUser,
  getUserProfile,
  loginUser,
  registerUser,
  updateProfile,
} from "../services/AuthService";

export const useUserRegistration = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData: FormData) => {
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

export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ["GET_PROFILE"],
    queryFn: async () => await getUserProfile(),
  });
};
export const useGetAllUser = () => {
  return useQuery({
    queryKey: ["GET_ALL_USER"],
    queryFn: async () => await getAllUser(),
  });
};

export const useUserUpdateProfile = () => {
  const queryClient = useQueryClient(); // Access the query client to invalidate queries

  return useMutation({
    mutationKey: ["USER_UPDATE"],
    mutationFn: async (userData: FormData) => {
      await updateProfile(userData); // Your mutation logic to update the profile
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["GET_PROFILE"] });
      toast.success("User update successful");
    },
    onError: (error: any) => {
      toast.error(error.message); // Handle mutation error
    },
  });
};
