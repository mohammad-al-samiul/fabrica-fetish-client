"use server";
import axiosInstance from "@/config/axios.config";

export const createOrder = async (orderData: any) => {
  try {
    const { data } = await axiosInstance.post("/orders", orderData);

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getAllOrder = async () => {
  try {
    const { data } = await axiosInstance.get("/orders");

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
