"use server";
import axiosInstance from "@/config/axios.config";

export const createPaymentUrl = async (paymentData: any) => {
  try {
    const { data } = await axiosInstance.post("/create-payment", paymentData);

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
