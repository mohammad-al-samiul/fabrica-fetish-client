"use server";
import axiosInstance from "@/config/axios.config";

export const doSubscribe = async (email: string) => {
  try {
    const { data } = await axiosInstance.post("/subscriptions/subscribe", {
      email,
    });

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
