import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

const ordersData = [
  {
    orderId: "ORD001",
    customerName: "John Doe",
    product: "GPU",
    amount: 500,
    date: "2024-05-01",
  },
  {
    orderId: "ORD002",
    customerName: "Jane Smith",
    product: "CPU",
    amount: 300,
    date: "2024-05-02",
  },
  {
    orderId: "ORD003",
    customerName: "Alice Johnson",
    product: "Motherboard",
    amount: 200,
    date: "2024-05-03",
  },
  {
    orderId: "ORD004",
    customerName: "Bob Brown",
    product: "RAM",
    amount: 150,
    date: "2024-05-04",
  },
  {
    orderId: "ORD005",
    customerName: "Charlie Davis",
    product: "Storage (SSD)",
    amount: 100,
    date: "2024-05-05",
  },
  {
    orderId: "ORD006",
    customerName: "Diana Evans",
    product: "Power Supply",
    amount: 80,
    date: "2024-05-06",
  },
  {
    orderId: "ORD007",
    customerName: "Ethan Green",
    product: "Case",
    amount: 70,
    date: "2024-05-07",
  },
  {
    orderId: "ORD008",
    customerName: "Fiona Harris",
    product: "Cooling System",
    amount: 50,
    date: "2024-05-08",
  },
  {
    orderId: "ORD009",
    customerName: "George Innes",
    product: "GPU",
    amount: 500,
    date: "2024-05-09",
  },
  {
    orderId: "ORD010",
    customerName: "Helen Jackson",
    product: "CPU",
    amount: 300,
    date: "2024-05-10",
  },
];

const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
const paginatorRight = <Button type="button" icon="pi pi-download" text />;

const RecentOrders = () => {
  return (
    <div className="w-full h-auto mt-4 bg-white rounded-lg shadow-md p-3">
      <h1 className="mt-3 pl-3 font-regular text-xl">Recent Orders</h1>
      <div className="mt-3 pl-3 w-full h-auto flex-1">
        <DataTable
          value={ordersData}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
          tableStyle={{ minWidth: "50rem" }}
          paginatorTemplate="RowsPerPageDropdown  PrevPageLink CurrentPageReport NextPageLink customRowsPerPageTemplate "
          currentPageReportTemplate="{first} to {last} of {totalRecords}"
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
          className="space-y-6"
        >
          <Column
            field="orderId"
            header="Order ID"
            style={{
              width: "20%",
              padding: "10px",
              border: "1px solid black",
            }}
          ></Column>
          <Column
            field="customerName"
            header="Name"
            style={{
              width: "20%",
              padding: "10px",
              border: "1px solid black",
            }}
          ></Column>
          <Column
            field="product"
            header="Product"
            style={{
              width: "20%",
              padding: "10px",
              border: "1px solid black",
            }}
          ></Column>
          <Column
            field="amount"
            header="Amount"
            style={{
              width: "20%",
              padding: "10px",
              border: "1px solid black",
            }}
          ></Column>
          <Column
            field="date"
            header="Date"
            style={{
              width: "20%",
              padding: "10px",
              border: "1px solid black",
            }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default RecentOrders;
