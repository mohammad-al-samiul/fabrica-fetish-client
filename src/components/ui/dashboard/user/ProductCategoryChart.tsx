"use client";
import React from "react";
import Chart from "react-apexcharts";
import * as ApexCharts from "apexcharts"; // Import the correct ApexCharts namespace

interface ProductBrandChartProps {
  products: Array<{
    productId: string;
    title: string;
    price: number;
    category: string;
    image: string;
    quantity: number;
    brand: string;
  }>;
  title: string;
}

const ProductBrandChart: React.FC<ProductBrandChartProps> = ({
  products = [],
  title,
}) => {
  // Calculate the count of products by brand
  const brandCounts = products?.reduce((acc: any, product) => {
    acc[product?.category] = (acc[product?.category] || 0) + product?.quantity;
    return acc;
  }, {});

  const brandData = {
    series: Object.values(brandCounts), // Extract values (quantities) for the pie chart
    labels: Object.keys(brandCounts), // Extract brand names for the pie chart
  };

  const brandOptions = {
    chart: {
      type: "pie",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 100,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 400,
        },
      },
    },
    labels: brandData.labels,
    title: {
      text: title,
      align: "center",
    },
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val.toFixed(1)}%`,
    },
  };

  return (
    <div>
      <Chart
        options={brandOptions as ApexCharts.ApexOptions}
        series={brandData.series}
        type="pie"
      />
    </div>
  );
};

export default ProductBrandChart;
