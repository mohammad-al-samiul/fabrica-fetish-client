import {
  getAllProducts,
  getRecentProducts,
  getSingleProduct,
} from "@/services/ProductService";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["GET_ALL_PRODUCTS"],
    queryFn: async () => await getAllProducts(),
  });
};
export const useGetRecentProducts = () => {
  return useQuery({
    queryKey: ["GET_RECENT_PRODUCTS"],
    queryFn: async () => await getRecentProducts(),
  });
};
export const useGetSingleProduct = (id: string) => {
  return useQuery({
    queryKey: ["GET_PRODUCT", id],
    queryFn: async () => await getSingleProduct(id),
  });
};
