import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getHomeProducts,
  getRecentProducts,
  getSingleProduct,
  updateProduct,
} from "@/services/ProductService";
import { FetchProductsParams } from "@/types";
import {
  QueryKey,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
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
interface UpdateProductParams {
  id: string;
  productData: FormData;
}
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["UPDATE_PRODUCT"], // Changed key to be more specific
    mutationFn: ({ id, productData }: UpdateProductParams) =>
      updateProduct(id, productData),
    onSuccess: () => {
      toast.success("Product updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["GET_ALL_PRODUCTS"] });
    },
    onError: (error) => {
      toast.error("Error updating product: " + error.message);
    },
  });
};

export const useGetAllProducts = (params: FetchProductsParams) => {
  return useQuery({
    queryKey: ["GET_ALL_PRODUCTS", params],
    queryFn: () => getAllProducts(params),
    keepPreviousData: true,
  });
};

export const useGetRecentProducts = () => {
  return useQuery({
    queryKey: ["GET_RECENT_PRODUCTS"],
    queryFn: async () => await getRecentProducts(),
  });
};
export const useGetHomeProducts = () => {
  return useQuery({
    queryKey: ["GET_HOME_PRODUCTS"],
    queryFn: async () => await getHomeProducts(),
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
