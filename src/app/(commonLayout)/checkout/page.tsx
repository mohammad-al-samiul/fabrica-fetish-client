"use client";
import FFForm from "@/components/form/FFForm";
import FFInput from "@/components/form/FFInput";
import FFTextarea from "@/components/form/FFTextArea";
import Loading from "@/components/ui/Loading";
import { CartContext } from "@/context/cart.provider";
import { useUser } from "@/context/user.provider";
import { useCreateOrder } from "@/hooks/order.hook";
import orderValidationSchema from "@/schemas/order.schema";
import { IProduct } from "@/types";
import { calculateTotalAmount } from "@/utils/calculateAmount";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";

import React, { useContext, useEffect, useState } from "react";

interface IOrderInfo {
  products: IProduct[];
  user: Record<string, any>; // Adjust if you know the user structure
  totalAmount: number;
  date: string;
}

export default function Checkout() {
  const { user } = useUser();

  const [products, setProducts] = useState<IProduct[]>([]);

  const { mutate: handleCreateOrder, isPending, isSuccess } = useCreateOrder();
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("CartContext is not available!");
  }

  const { carts, setCarts } = cartContext;

  const total = JSON.parse(localStorage.getItem("total") ?? "0");
  useEffect(() => {
    const storedProducts = JSON.parse(
      localStorage.getItem("carts") ?? "[]"
    ) as IProduct[];

    // Map stored products to match the IProduct interface
    const formattedProducts = storedProducts.map((product) => ({
      productId: product._id, // Ensure productId is populated
      title: product.title,
      price: product.price,
      category: product.category,
      image: product.image,
      quantity: product.quantity,
    }));
    const total = calculateTotalAmount(formattedProducts);
    setProducts(formattedProducts);
  }, []);

  const handleRemoveAllProduct = () => {
    localStorage.removeItem("carts");
    setCarts([]);
  };

  const onSubmit = (data: any) => {
    const orderInfo: IOrderInfo = {
      products,
      user: {
        ...data,
      },
      totalAmount: Number(total.toFixed(2)),
      date: new Date().toISOString(),
    };
    //console.log(orderInfo);
    handleCreateOrder(orderInfo);
    handleRemoveAllProduct();
  };

  return (
    <>
      {isPending && !isSuccess && <Loading />}
      <div className="bg-default-100 p-4 lg:p-10 rounded-lg min-h-screen flex  justify-center">
        <div className="lg:w-[80%] mx-auto">
          <h1 className="text-center text-2xl font-bold text-default-800 my-5">
            Fill up the form to confirm your order
          </h1>
          <FFForm
            onSubmit={onSubmit}
            resolver={zodResolver(orderValidationSchema)}
            defaultValues={{
              name: user?.name,
              email: user?.email,
            }}
          >
            <div className="flex gap-2 mb-2">
              <FFInput name="name" type="text" label="Name" />
              <FFInput name="email" type="email" label="Email" />
            </div>
            <div className="flex gap-2 mb-2">
              <FFInput name="phone" type="number" label="Phone" />
              <FFInput name="postCode" type="text" label="Postal/ZIP Code" />
            </div>
            <div className="mb-2">
              <FFTextarea name="address" label="Address" />
            </div>

            <div>
              <Button
                className="my-3 w-full rounded-md bg-default-900 text-default-50"
                size="lg"
                type="submit"
              >
                Order
              </Button>
            </div>
          </FFForm>
        </div>
      </div>
    </>
  );
}
