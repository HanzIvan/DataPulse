import React from "react";

const DashboardStats = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 w-full ">
      <div className="bg-white p-4 flex-1 rounded-lg border shadow-sm">
        <div>
          <span className="font-semibold text-xl">Total Sales</span>
          <div>
            <span className="font-regular">&#8369;125000</span>
            <span className="bg-green-500 ml-2 p-1 text-white text-sm shadow-md rounded-lg text-center">
              +238
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 flex-1 rounded-lg border shadow-sm">
        <div>
          <span className="font-semibold text-xl">Total Expenses</span>
          <div>
            <span className="font-regular">&#8369;35000</span>
            <span className="bg-green-500 ml-2 p-1 text-white text-sm shadow-md rounded-lg text-center">
              +691
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 flex-1 rounded-lg border shadow-sm">
        <div>
          <span className="font-semibold text-xl">Total Customers</span>
          <div>
            <span className="font-regular">500</span>
            <span className="bg-green-500 ml-2 p-1 text-white text-sm shadow-md rounded-lg text-center">
              +403
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 flex-1 rounded-lg border shadow-sm">
        <div>
          <span className="font-semibold text-xl">Total Orders</span>
          <div>
            <span className="font-regular">&#8369;750</span>
            <span className="bg-green-500 ml-2 p-1 text-white text-sm shadow-md rounded-lg text-center">
              +135
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
