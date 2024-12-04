"use client";
import React from "react";
import Chart from "react-apexcharts";
import * as ApexCharts from "apexcharts"; // Import the correct ApexCharts namespace

interface TOrder {
  user: {
    name: string;
  };
  products: any[];
  totalAmount: number;
  status: string;
  date: string;
}

interface ExpenseChartProps {
  orderData: TOrder[];
}

const ExpenseChart: React.FC<ExpenseChartProps> = ({ orderData }) => {
  // Calculate the expenses (totalAmount) for each order
  const expenses = orderData
    ?.filter((order) => order.status === "paid") // Filter only paid orders
    ?.slice(Math.max(orderData.length - 10, 0)) // Get the last 10 orders
    ?.map((order) => {
      const orderDate = new Date(order.date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      return {
        date: orderDate, // formatted date
        cost: order.totalAmount,
      };
    });

  // Prepare chart data
  const chartData = {
    series: [
      {
        name: "Expenses",
        data: expenses?.map((expense) => expense.cost) || [],
      },
    ],
    categories: expenses?.map((expense) => expense.date) || [],
  };

  // Chart options with improved styling
  const chartOptions = {
    chart: {
      type: "bar",
      height: 350,
      background: "#f4f4f4", // Background color for the chart
      toolbar: {
        show: false, // Hide the toolbar
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 8, // Rounded corners on the bars
        horizontal: false, // Vertical bars
        columnWidth: "60%", // Width of the bars
      },
    },
    xaxis: {
      categories: chartData.categories,
      title: {
        text: "Date", // Updated label
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          color: "#555",
        },
      },
      labels: {
        style: {
          colors: "#333", // Color for the axis labels
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      title: {
        text: "Amount ($)",
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          color: "#555",
        },
      },
      labels: {
        style: {
          colors: "#333", // Color for the y-axis labels
          fontSize: "12px",
        },
      },
    },
    title: {
      text: "Expenses Over the Last 10 Orders",
      align: "center",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#333",
      },
    },
    colors: ["#60A5FA"], // Primary color for the bars
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `$${val.toFixed(2)}`,
      style: {
        colors: ["#fff"], // Color of the data labels inside the bars
        fontSize: "12px",
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => `$${val.toFixed(2)}`,
      },
      theme: "dark", // Dark theme for tooltips
    },
    grid: {
      borderColor: "#e0e0e0", // Light grid lines
      strokeDashArray: 5, // Dotted grid lines
    },
    fill: {
      type: "gradient", // Gradient fill for the bars
      gradient: {
        type: "vertical", // Gradient direction
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          chart: {
            height: 300,
          },
        },
      },
    ],
  };

  return (
    <div>
      <Chart
        options={chartOptions as ApexCharts.ApexOptions} // Corrected to ApexCharts.ApexOptions
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ExpenseChart;
