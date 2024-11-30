import { IProduct } from "@/types";

export const calculateTotalAmount = (carts: IProduct[]) => {
  const total = carts.reduce((acc: any, item: IProduct) => {
    return acc + item?.price * item?.quantity!;
  }, 0);

  return total;
};
