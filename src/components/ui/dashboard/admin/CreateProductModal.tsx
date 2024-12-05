"use client";
import FFForm from "@/components/form/FFForm";
import FFInput from "@/components/form/FFInput";
import FFInputFile from "@/components/form/FFInputFile";
import FFTextarea from "@/components/form/FFTextArea";
import { useCreateProduct } from "@/hooks/product.hook";
import createProductValidationSchema from "@/schemas/product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/react";
import { Modal } from "antd";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

export type TCreateBikeModalProps = {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};

export default function CreateProductModal({
  isModalOpen,
  handleOk,
  handleCancel,
}: TCreateBikeModalProps) {
  const {
    mutate: handleProductCreate,
    isPending,
    isSuccess,
  } = useCreateProduct();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };
  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width={800}
      footer=""
    >
      <h1 className="text-2xl font-bold text-center my-3">Create Bike</h1>
      <div className="w-full">
        <FFForm
          onSubmit={onSubmit}
          resolver={zodResolver(createProductValidationSchema)}
        >
          <div className="lg:flex gap-3 mb-3">
            <FFInput type="text" name="title" label="Title" />
            <FFInput type="text" name="category" label="Category" />
          </div>
          <div className="lg:flex gap-3 mb-3">
            <FFInput type="number" name="quantity" label="Quantity" />
            <FFInput type="number" name="price" label="Price " />
          </div>
          <div className="lg:flex gap-3 mb-3">
            <FFInput type="number" name="rate" label="Rating" />
            <FFInput type="number" name="count" label="Rating Count" />
          </div>

          <div className="lg:flex flex-col gap-3 mb-3">
            <FFTextarea name="description" label="Description" />
          </div>
          <div className="lg:flex gap-3 mb-3">
            <FFInputFile name="image" label="Product Image" />
          </div>
          <div className="mt-3">
            <Button
              className="my-3 w-full rounded-md bg-default-800 font-semibold text-default-50"
              size="lg"
              type="submit"
            >
              Create Product
            </Button>
          </div>
        </FFForm>
      </div>
    </Modal>
  );
}
