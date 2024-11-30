"use client";

import FFForm from "@/components/form/FFForm";
import FFInput from "@/components/form/FFInput";
import FFTextarea from "@/components/form/FFTextArea";
import Loading from "@/components/ui/Loading";
import { useUser } from "@/context/user.provider";
import orderValidationSchema from "@/schemas/order.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import React from "react";
import { FieldValues } from "react-hook-form";

export default function Checkout() {
  const { user, isLoading } = useUser();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
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
            <FFInput name="postalCode" type="text" label="Postal/ZIP Code" />
          </div>
          <div className="mb-2">
            <FFTextarea name="address" label="Address" />
          </div>
          <div>
            <Button
              type="submit"
              className="w-full bg-default-800 text-default-50 h-12"
            >
              Order
            </Button>
          </div>
        </FFForm>
      </div>
    </div>
  );
}
