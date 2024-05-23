import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputSwitch } from "primereact/inputswitch";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Button } from "primereact/button";

const invoicesData = [
  {
    invoiceId: "INV001",
    customerName: "John Doe",
    amount: "₱150.00",
    date: "2024-03-15",
  },
  {
    invoiceId: "INV002",
    customerName: "Jane Smith",
    amount: "₱200.00",
    date: "2024-01-22",
  },
  {
    invoiceId: "INV003",
    customerName: "Alice Johnson",
    amount: "₱75.00",
    date: "2024-02-12",
  },
  {
    invoiceId: "INV004",
    customerName: "Bob Brown",
    amount: "₱340.00",
    date: "2024-04-05",
  },
  {
    invoiceId: "INV005",
    customerName: "Charlie Davis",
    amount: "₱125.00",
    date: "2024-05-11",
  },
  {
    invoiceId: "INV006",
    customerName: "Diana Evans",
    amount: "₱180.00",
    date: "2024-03-09",
  },
  {
    invoiceId: "INV007",
    customerName: "Ethan Green",
    amount: "₱220.00",
    date: "2024-02-27",
  },
  {
    invoiceId: "INV008",
    customerName: "Fiona Harris",
    amount: "₱50.00",
    date: "2024-04-18",
  },
  {
    invoiceId: "INV009",
    customerName: "George Innes",
    amount: "₱90.00",
    date: "2024-01-30",
  },
  {
    invoiceId: "INV010",
    customerName: "Helen Jackson",
    amount: "₱300.00",
    date: "2024-05-21",
  },
  {
    invoiceId: "INV011",
    customerName: "Ian King",
    amount: "₱45.00",
    date: "2024-02-05",
  },
  {
    invoiceId: "INV012",
    customerName: "Jackie Lewis",
    amount: "₱160.00",
    date: "2024-04-14",
  },
  {
    invoiceId: "INV013",
    customerName: "Kevin Martin",
    amount: "₱210.00",
    date: "2024-03-28",
  },
  {
    invoiceId: "INV014",
    customerName: "Laura Nelson",
    amount: "₱135.00",
    date: "2024-01-18",
  },
  {
    invoiceId: "INV015",
    customerName: "Mike O'Connor",
    amount: "₱260.00",
    date: "2024-05-02",
  },
  {
    invoiceId: "INV016",
    customerName: "Nina Parker",
    amount: "₱175.00",
    date: "2024-03-07",
  },
  {
    invoiceId: "INV017",
    customerName: "Oliver Quinn",
    amount: "₱195.00",
    date: "2024-04-19",
  },
  {
    invoiceId: "INV018",
    customerName: "Paula Roberts",
    amount: "₱290.00",
    date: "2024-02-21",
  },
  {
    invoiceId: "INV019",
    customerName: "Quincy Smith",
    amount: "₱80.00",
    date: "2024-01-25",
  },
  {
    invoiceId: "INV020",
    customerName: "Rachel Turner",
    amount: "₱145.00",
    date: "2024-05-13",
  },
];

const paginatorLeft = <Button type="button" icon="pi pi-refresh" text />;
const paginatorRight = <Button type="button" icon="pi pi-download" text />;

const InvoicesBal = () => {
  const [rowClick, setRowClick] = useState(true);

  return (
    <div className="w-full h-auto mt-4 bg-white rounded-lg shadow-md p-3">
      <h1 className="mt-3 pl-3 font-regular text-xl">Invoice Balance</h1>
      <div className="mt-10">
        <DataTable
          value={invoicesData}
          selectionMode={rowClick ? null : "checkbox"}
          dataKey="invoiceId"
          paginator
          rows={10}
          rowsPerPageOptions={[5, 10, 15, 20]}
          tableStyle={{ minWidth: "50rem" }}
          paginatorTemplate="RowsPerPageDropdown  PrevPageLink CurrentPageReport NextPageLink customRowsPerPageTemplate "
          currentPageReportTemplate="{first} to {last} of {totalRecords}"
          paginatorLeft={paginatorLeft}
          paginatorRight={paginatorRight}
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "3rem" }}
          ></Column>
          <Column field="invoiceId" header="Invoice ID"></Column>
          <Column field="customerName" header="Name"></Column>
          <Column field="amount" header="Amount"></Column>
          <Column field="date" header="Date"></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default InvoicesBal;
