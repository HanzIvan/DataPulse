import React from "react";
import { SiDatabricks } from "react-icons/si";
import SidebarItem from "./SidebarItem";

// Icons
import {
  MdOutlineDashboard,
  MdPeopleOutline,
  MdOutlineAccountBalance,
  MdOutlinePersonAddAlt,
  MdAttachMoney,
} from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className="md:w-64 w-16 h-screen mr-1">
      <nav className="h-full flex flex-col bg-[#EEF7FF] shadow-sm  ">
        <div className="flex items-center gap-2 m-3 p-3 rounded-lg bg-[#4D869C]">
          <SiDatabricks fontSize={24} color="#EEF7FF" />
          <h1 className="text-white font-bold text-2xl hidden md:block">
            DataPulse
          </h1>
        </div>

        <div className="flex-1 px-3 mt-10">
          <ul className="">
            <SidebarItem
              key="key"
              label="Dashboard"
              icon={<MdOutlineDashboard />}
              path="/"
            />
            <SidebarItem
              key="key"
              label="Manage Team"
              icon={<MdPeopleOutline />}
              path="/team"
            />
            <SidebarItem
              key="key"
              label="Invoice Balance"
              icon={<MdOutlineAccountBalance />}
              path="/invoice"
            />
            <SidebarItem
              key="key"
              label="Transactions"
              icon={<MdAttachMoney />}
              path="/transactions"
            />
            <SidebarItem
              key="key"
              label="Profile Form"
              icon={<MdOutlinePersonAddAlt />}
              path="/profileform"
            />
          </ul>
        </div>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?name=Elon+Musk/?background=random"
            alt="avatar"
            className="w-10 h-10 rounded-md"
          />
          <div className="flex justify-between items-center w-52 ml-3">
            <div className="leading-4">
              <h1 className="font-semibold hidden md:block">Elon Musk</h1>
              <span className="text-xs text-gray-600 hidden md:block">
                elonmusk@gmail.com
              </span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
