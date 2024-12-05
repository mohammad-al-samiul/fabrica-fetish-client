"use client";
import Loading from "@/components/ui/Loading";
import {
  useDeleteProduct,
  useGetAllProducts,
  useUpdateProduct,
} from "@/hooks/product.hook";
import { IProduct } from "@/types";
import { QuestionCircleOutlined } from "@ant-design/icons";
import {
  Button,
  ConfigProvider,
  Popconfirm,
  Space,
  Table,
  TableColumnsType,
  TableProps,
  Tooltip,
} from "antd";
import React, { useMemo, useState } from "react";
import { Edit, Trash } from "lucide-react";
import CreateProductModal from "@/components/ui/dashboard/admin/CreateProductModal";

type OnChange = NonNullable<TableProps<DataType>["onChange"]>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

interface DataType extends IProduct {
  key?: string;
}

export default function ProductManangement() {
  const [filteredInfo, setFilteredInfo] = useState<Filters>({});
  const [sortedInfo, setSortedInfo] = useState<Sorts>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  const { data: products, isLoading } = useGetAllProducts();
  const { mutate: deleteProductMutation } = useDeleteProduct();
  const { mutate: updateProductMutation } = useUpdateProduct();

  const handleDelete = (productId: string) => {
    deleteProductMutation(productId);
  };

  // Handling update modal open

  const data: DataType[] = useMemo(() => {
    return products?.data?.map((product: IProduct) => ({
      key: product?._id,
      _id: product?._id,
      title: product?.title,
      description: product?.description,
      category: product?.category,
      quantity: product?.quantity,
      image: product?.image,
      price: product?.price,
    }));
  }, [products]);

  const columns: TableColumnsType<DataType> = [
    {
      title: "Image",
      render: ({ image }: { image: string }) => (
        <img className="w-[60px]" src={image} alt="Product" />
      ),
      key: "image",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      ellipsis: true,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      filters: Array.from(
        new Set(data?.map((product: any) => product?.category))
      ).map((category: any) => ({
        text: category,
        value: category,
      })),
      filteredValue: filteredInfo.category || null,
      onFilter: (value, record) => record.category!.includes(value as string),
      sorter: (a, b) => a.category!.length - b.category!.length,
      sortOrder: sortedInfo.columnKey === "category" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
      sortOrder: sortedInfo.columnKey === "price" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      sorter: (a, b) => a.quantity! - b.quantity!,
      sortOrder: sortedInfo.columnKey === "quantity" ? sortedInfo.order : null,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Edit Bike">
            <Edit
              onClick={() => updateShowModal(record._id!)}
              className="text-yellow-500 cursor-pointer"
            />
          </Tooltip>
          <Tooltip title="Delete Bike">
            <Popconfirm
              title="Delete the Bike"
              description="Are you sure to delete this bike?"
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              onConfirm={() => handleDelete(record._id!)}
              okText="Yes"
              cancelText="No"
            >
              <Trash className="text-red-500 cursor-pointer" />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];

  const handleChange: OnChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter as Sorts);
  };

  const clearFilters = () => {
    setFilteredInfo({});
  };

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };

  const setPriceSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "pricePerHour",
    });
  };

  const createShowModal = () => setIsModalOpen(true);
  const updateShowModal = (productId: string) => {
    setSelectedProductId(productId);
    setIsUpdateModalOpen(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-2 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <h1 className="text-3xl font-bold m-2">All Products</h1>
        <ConfigProvider>
          <Button className="mb-2" onClick={createShowModal}>
            Create Bike
          </Button>
        </ConfigProvider>
      </div>

      <Space style={{ marginBottom: 16 }} wrap>
        <Button onClick={setPriceSort}>Sort Price</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>

      <Table<DataType>
        columns={columns}
        dataSource={data}
        onChange={handleChange}
        scroll={{ x: "max-content" }}
      />

      <CreateProductModal
        handleCancel={() => setIsModalOpen(false)}
        handleOk={() => setIsModalOpen(false)}
        isModalOpen={isModalOpen}
      />

      {/* <UpdateProductModal
        productId={selectedProductId}
        handleCancel={() => setIsUpdateModalOpen(false)}
        handleOk={() => setIsUpdateModalOpen(false)}
        isModalOpen={isUpdateModalOpen}
      /> */}
    </div>
  );
}
