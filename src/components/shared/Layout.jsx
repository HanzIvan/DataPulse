import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="flex flex-row bg-[#EEF7FF] h-screen w-screen overflow-hidden">
      <Sidebar />

      <div className=" flex-1 bg-[#F5F7F8] rounded-[30px] m-3 shadow-lg overflow-y-auto">
        <div className="sticky z-10">
          <Header />
        </div>

        <div>{<Outlet />}</div>
      </div>
    </div>
  );
}
