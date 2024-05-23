import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";

const team = [
  {
    name: "Sophia Williams",
    role: "Project Manager",
    email: "sophia.williams@example.com",
    phone: "(123) 456-7890",
    status: "Active",
  },
  {
    name: "Liam Johnson",
    role: "Lead Developer",
    email: "liam.johnson@example.com",
    phone: "(123) 555-7890",
    status: "Active",
  },
  {
    name: "Olivia Brown",
    role: "UX Designer",
    email: "olivia.brown@example.com",
    phone: "(123) 555-1234",
    status: "Inactive",
  },
  {
    name: "Noah Jones",
    role: "Frontend Developer",
    email: "noah.jones@example.com",
    phone: "(123) 456-5555",
    status: "Active",
  },
  {
    name: "Emma Garcia",
    role: "Backend Developer",
    email: "emma.garcia@example.com",
    phone: "(123) 456-7890",
    status: "Active",
  },
  {
    name: "Mason Martinez",
    role: "QA Engineer",
    email: "mason.martinez@example.com",
    phone: "(123) 789-1234",
    status: "Inactive",
  },
  {
    name: "Ava Davis",
    role: "DevOps Engineer",
    email: "ava.davis@example.com",
    phone: "(123) 555-7890",
    status: "Active",
  },
  {
    name: "Elijah Wilson",
    role: "Product Owner",
    email: "elijah.wilson@example.com",
    phone: "(123) 123-7890",
    status: "Active",
  },
  {
    name: "Isabella Moore",
    role: "Scrum Master",
    email: "isabella.moore@example.com",
    phone: "(123) 123-4567",
    status: "Active",
  },
  {
    name: "James Anderson",
    role: "Business Analyst",
    email: "james.anderson@example.com",
    phone: "(123) 987-6543",
    status: "Inactive",
  },
];

const TeamData = () => {
  const statusBodyTemplate = (rowData) => {
    return (
      <span
        className={`px-2 py-1 rounded ${
          rowData.status === "Active"
            ? "bg-green-200 text-green-800"
            : "bg-red-200 text-red-800"
        }`}
      >
        {rowData.status}
      </span>
    );
  };
  return (
    <div className="flex-1 mt-4 bg-white rounded-lg shadow-md p-3 ">
      <div>
        <h1 className="mt-3 pl-3 font-regular text-xl">Manage Team</h1>
      </div>
      <DataTable
        value={team}
        tableStyle={{ minWidth: "50rem" }}
        className="p-5"
      >
        <Column
          field="name"
          header="Name"
          sortable
          style={{ width: "25%" }}
        ></Column>
        <Column field="role" header="Role" style={{ width: "25%" }}></Column>
        <Column field="email" header="Email" style={{ width: "25%" }}></Column>
        <Column field="phone" header="Phone" style={{ width: "25%" }}></Column>
        <Column
          field="status"
          header="Status"
          sortable
          body={statusBodyTemplate}
          style={{ width: "25%" }}
        ></Column>
      </DataTable>
    </div>
  );
};

export default TeamData;
