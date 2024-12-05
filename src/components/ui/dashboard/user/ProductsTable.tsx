"use client";

import { IProduct } from "@/types";
import { EyeFilled } from "@ant-design/icons";
import {
  Button,
  Popconfirm,
  Space,
  Table,
  TableColumnsType,
  TableProps,
  Tooltip,
} from "antd";
import { useMemo, useState } from "react";

import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

type OnChange = NonNullable<TableProps<DataType>["onChange"]>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

interface DataType extends IProduct {
  key?: string;
}

export default function ProductsTable({ products }: { products: IProduct[] }) {
  const [filteredInfo, setFilteredInfo] = useState<Filters>({});
  const [sortedInfo, setSortedInfo] = useState<Sorts>({});

  const data: DataType[] = useMemo(() => {
    // Adjust product data based on the orders
    return products?.map((product: IProduct) => ({
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
        new Set(data?.map((product) => product?.category))
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
            <FaEdit
              className="text-yellow-500 text-2xl cursor-pointer"
              // onClick={() => updateShowModal(record._id!)} // Enable the edit functionality
            />
          </Tooltip>
          <Tooltip title="Delete Bike">
            <Popconfirm
              title="Delete the Bike"
              description="Are you sure to delete this bike?"
              // onConfirm={() => handleDelete(record._id!)}
              okText="Yes"
              cancelText="No"
            >
              <FaTrash className="text-red-500 text-2xl cursor-pointer" />
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

  return (
    <div>
      <h3 className="text-3xl font-bold mb-4">All Products</h3>
      <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:justify-start mb-4">
        <Button onClick={setPriceSort}>Sort Price</Button>
        <Button onClick={clearFilters}>Clear Filters</Button>
        <Button onClick={clearAll}>Clear Filters and Sorters</Button>
      </div>

      <div className="overflow-x-auto">
        <Table<DataType>
          columns={columns}
          dataSource={data}
          onChange={handleChange}
          scroll={{ x: 1000 }} // Adjust to fit column widths
        />
      </div>
    </div>
  );
}
