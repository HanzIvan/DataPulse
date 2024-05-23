import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

const transactionData = [
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
  {
    orderId: "ORD011",
    customerName: "Ian Parker",
    product: "Monitor",
    amount: 400,
    date: "2024-05-11",
  },
  {
    orderId: "ORD012",
    customerName: "Grace Thompson",
    product: "Keyboard",
    amount: 150,
    date: "2024-05-12",
  },
  {
    orderId: "ORD013",
    customerName: "Andrew Collins",
    product: "Mouse",
    amount: 50,
    date: "2024-05-13",
  },
  {
    orderId: "ORD014",
    customerName: "Lily Walker",
    product: "Printer",
    amount: 250,
    date: "2024-05-14",
  },
  {
    orderId: "ORD015",
    customerName: "Lucas King",
    product: "Headphones",
    amount: 120,
    date: "2024-05-15",
  },
  {
    orderId: "ORD016",
    customerName: "Sophie Harris",
    product: "Webcam",
    amount: 180,
    date: "2024-05-16",
  },
  {
    orderId: "ORD017",
    customerName: "Maxwell Martinez",
    product: "Speakers",
    amount: 220,
    date: "2024-05-17",
  },
  {
    orderId: "ORD018",
    customerName: "Ella Lewis",
    product: "External Hard Drive",
    amount: 200,
    date: "2024-05-18",
  },
  {
    orderId: "ORD019",
    customerName: "Owen Clark",
    product: "Tablet",
    amount: 350,
    date: "2024-05-19",
  },
  {
    orderId: "ORD020",
    customerName: "Emma Moore",
    product: "Laptop",
    amount: 900,
    date: "2024-05-20",
  },
];

const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
const paginatorRight = <Button type="button" icon="pi pi-download" text />;

const AllTransaction = () => {
  return (
    <div className="w-full h-auto mt-4 bg-white rounded-lg shadow-md p-3">
      <h1 className="mt-3 pl-3 font-regular text-xl">Transactions</h1>
      <div className="mt-3 pl-3 w-full h-auto flex-1">
        <DataTable
          value={transactionData}
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 15, 20]}
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

export default AllTransaction;
