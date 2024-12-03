"use client";
import React, { forwardRef, useState } from "react";
import { IProduct } from "@/types";
import { EyeFilled } from "@ant-design/icons";
import {
  Button,
  Space,
  Table,
  TableColumnsType,
  TableProps,
  Tooltip,
} from "antd";
import NextLink from "next/link";

type OnChange = NonNullable<TableProps<DataType>["onChange"]>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

interface DataType extends IProduct {
  key?: string;
}

// Fix the typing here with forwardRef
const ProductsTable = forwardRef<HTMLDivElement, { products: IProduct[] }>(
  ({ products }, ref) => {
    const [filteredInfo, setFilteredInfo] = useState<Filters>({});
    const [sortedInfo, setSortedInfo] = useState<Sorts>({});

    const data: DataType[] = products?.map((product: IProduct) => ({
      key: product?._id,
      _id: product?._id,
      title: product?.title,
      description: product?.description,
      category: product?.category,
      quantity: product?.quantity,
      image: product?.image,
      price: product?.price,
    }));

    const columns: TableColumnsType<DataType> = [
      {
        title: "Image",
        render: ({ image }: { image: string }) => (
          <img className="w-[80px]" src={image} alt="Product" />
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
        sortOrder:
          sortedInfo.columnKey === "category" ? sortedInfo.order : null,
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
        sortOrder:
          sortedInfo.columnKey === "quantity" ? sortedInfo.order : null,
      },
      {
        title: "Action",
        key: "action",
        render: (_, record) => (
          <Space size="middle">
            <NextLink href={`/products/${record?._id}`}>
              <Tooltip title="Details">
                <EyeFilled className="text-2xl" />
              </Tooltip>
            </NextLink>
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
      <div ref={ref}>
        <h3>All Products</h3>
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
);

export default ProductsTable;
