import React from "react";
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineUser } from "react-icons/hi";

// Messages & Notification
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";

// avatar
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-[#4D869C] h-24 md:h-16 px-8 rounded-t-[30px] border-b shadow-sm ">
      <div className="mt-3 md:mt-0">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 w-64 border-[1px] rounded-lg"
        />
      </div>

      <div className="flex items-center gap-5 py-1 md:py-0 ">
        <Popover className="relative z-10">
          <PopoverButton className="flex items-center active:bg-gray-300 focus:outline-none p-1">
            <HiOutlineChatAlt fontSize={24} color="white" />
          </PopoverButton>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel className="absolute right-0 z-10 bg-white w-80 border-[1px] mt-2 rounded-lg shadow-lg">
              <div className="p-2 border-b w-auto shadow-sm">
                <h1 className="font-bold">Messages</h1>
              </div>

              <div className="mt-1 p-2">
                <p>No new messages</p>
              </div>
            </PopoverPanel>
          </Transition>
        </Popover>

        {/* notification */}

        <Popover className="relative ">
          <PopoverButton className="flex items-center active:bg-gray-300 focus:outline-none p-1">
            <HiOutlineBell fontSize={24} color="white" />
          </PopoverButton>
          <Transition
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <PopoverPanel className="absolute right-0 z-10 bg-white w-80 border-[1px] mt-2 rounded-lg shadow-lg">
              <div className="p-2 border-b w-auto shadow-sm">
                <h1 className="font-bold">Notifications</h1>
              </div>

              <div className="mt-1 p-2">
                <p>No new notifciation</p>
              </div>
            </PopoverPanel>
          </Transition>
        </Popover>

        {/* Profile */}
        <Menu>
          <MenuButton className="inline-flex items-center ">
            <HiOutlineUser fontSize={24} color="white" />
          </MenuButton>
          <Transition
            enter="transition ease-out duration-75"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <MenuItems
              anchor="bottom end"
              className="absolute right-0 z-10 bg-white w-32 border-[1px] mt-3 rounded-lg shadow-lg "
            >
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 hover:bg-gray-200">
                Profile
              </button>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 hover:bg-gray-200">
                Settings
              </button>
              <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 hover:bg-gray-200">
                Logout
              </button>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
