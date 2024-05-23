import React from "react";
import DashboardStats from "../content/DashboardStats";
import PiechartSales from "../content/PiechartSales";
import RecentOrders from "../content/RecentOrders";
import TransactionChart from "../content/TransactionChart";

const Dashboard = () => {
  return (
    <div className="relative p-3">
      <div className="flex flex-col ">
        <DashboardStats />
        <div className="flex flex-col md:flex-row ">
          <TransactionChart />
          <PiechartSales />
        </div>
        <div className="flex">
          <RecentOrders />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
