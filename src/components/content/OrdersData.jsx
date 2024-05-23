import React from "react";
import RecentOrders from "./RecentOrders";

const OrdersData = () => {
  return (
    <div>
      <h2>Recent Orders</h2>
      <RecentOrders data={orders} />
    </div>
  );
};

export default OrdersData;
