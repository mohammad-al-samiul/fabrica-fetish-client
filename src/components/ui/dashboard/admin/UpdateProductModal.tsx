"use client";
import { useGetSingleProduct, useUpdateProduct } from "@/hooks/product.hook";
import { Modal } from "antd";
import React, { useEffect, useMemo } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import Loading from "../../Loading";
import FFForm from "@/components/form/FFForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProductValidationSchema } from "@/schemas/product.schema";
import FFInput from "@/components/form/FFInput";
import FFTextarea from "@/components/form/FFTextArea";
import FFInputFile from "@/components/form/FFInputFile";
import { Button } from "@nextui-org/react";

type TUpdateProductModalProps = {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  selectedProductId?: any;
};
export default function UpdateProductModal({
  isModalOpen,
  handleOk,
  handleCancel,
  selectedProductId,
}: TUpdateProductModalProps) {
  const {
    mutate: handleUpdateProduct,
    isPending,
    isSuccess,
  } = useUpdateProduct();

  const { data: productData, isLoading } =
    useGetSingleProduct(selectedProductId);

  const product = productData?.data;

  const defaultValues = useMemo(
    () => ({
      title: product?.title || "",
      category: product?.category || "",
      quantity: product?.quantity || 0,
      price: product?.price || 0,
      rate: product?.rating?.rate || 0,
      count: product?.rating?.count || 0,
      description: product?.description || "",
    }),
    [product]
  );

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { rate, count, image, ...restData } = data;

    const rating = {
      rate: Number(rate),
      count: Number(count),
    };

    // Combine restData and rating into productData
    const productData = {
      ...restData,
      rating,
    };

    const formData = new FormData();
    formData.append("data", JSON.stringify(productData));
    formData.append("image", image);

    handleUpdateProduct(
      { id: selectedProductId, productData: formData },
      {
        onSuccess: () => {
          handleOk(); // Close modal on success
        },
      }
    );
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {isPending && !isSuccess && <Loading />}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
        footer={null}
      >
        <h1 className="text-2xl font-bold text-center my-3">Update Product</h1>
        <div className="w-full">
          <FFForm
            onSubmit={onSubmit}
            defaultValues={defaultValues}
            resolver={zodResolver(updateProductValidationSchema)}
          >
            <div className="flex flex-col flg:flex lg:flex-row gap-3 mb-3">
              <FFInput type="text" name="title" label="Title" />
              <FFInput type="text" name="category" label="Category" />
            </div>
            <div className="flex flex-col flg:flex lg:flex-row gap-3 mb-3">
              <FFInput type="number" name="quantity" label="Quantity" />
              <FFInput type="number" name="price" label="Price" />
            </div>
            <div className="flex flex-col flg:flex lg:flex-row gap-3 mb-3">
              <FFInput type="number" name="rate" label="Rating" />
              <FFInput type="number" name="count" label="Rating Count" />
            </div>
            <div className="flex flex-col flg:flex lg:flex-row  gap-3 mb-3">
              <FFTextarea name="description" label="Description" />
            </div>
            <div className="flex flex-col flg:flex lg:flex-row gap-3 mb-3">
              <FFInputFile
                required={false}
                name="image"
                label="Product Image"
              />
            </div>
            <div className="mt-3">
              <Button
                className="my-3 w-full rounded-md bg-default-800 font-semibold text-default-50"
                size="lg"
                type="submit"
              >
                Update Product
              </Button>
            </div>
          </FFForm>
        </div>
      </Modal>
    </>
  );
}
