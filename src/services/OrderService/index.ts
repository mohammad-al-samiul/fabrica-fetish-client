"use server";
import axiosInstance from "@/config/axios.config";
import { revalidateTag } from "next/cache";

export const createOrder = async (orderData: any) => {
  try {
    const { data } = await axiosInstance.post("/orders", orderData);
    revalidateTag("products");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAllOrder = async () => {
  try {
    const { data } = await axiosInstance.get("/orders");
    revalidateTag("products");
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
