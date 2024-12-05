import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getRecentProducts,
  getSingleProduct,
  updateProduct,
} from "@/services/ProductService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateProduct = () => {
  const queryClient = useQueryClient(); // Query client to invalidate cache

  return useMutation<any, Error, FormData>({
    mutationKey: ["CREATE_PRODUCT"], // Unique key for the mutation
    mutationFn: async (productData) => {
      return createProduct(productData); // Call the createProduct function from service
    },
    onSuccess: () => {
      toast.success("Product created successfully!");
      // Invalidate the product list query to refresh after product creation
      queryClient.invalidateQueries({ queryKey: ["GET_ALL_PRODUCTS"] });
    },
    onError: (error: any) => {
      toast.error("Error creating product: " + error.message);
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["UPDATE_PRODUCT"], // Changed key to be more specific
    mutationFn: (params: { id: string; productData: FormData }) =>
      updateProduct(params.id, params.productData),
    onSuccess: (data) => {
      toast.success("Product updated successfully!");
      // Invalidate the 'getProducts' query after the mutation is successful
      queryClient.invalidateQueries({ queryKey: ["GET_ALL_PRODUCTS"] });
    },
    onError: (error) => {
      toast.error("Error updating product: " + error.message);
    },
  });
};

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

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["DELETE_PRODUCT"],
    mutationFn: (id: string) => deleteProduct(id),
    onSuccess: () => {
      toast.success("Product deleted successfully!");
      // You can invalidate the product query to refresh the list
      queryClient.invalidateQueries({ queryKey: ["GET_ALL_PRODUCTS"] });
    },
    onError: (error) => {
      toast.error("Error deleting product: " + error.message);
    },
  });
};
