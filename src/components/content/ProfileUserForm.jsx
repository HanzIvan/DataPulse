import React from "react";

const ProfileUserForm = () => {
  return (
    <div className="h-full w-full flex">
      <div className="relative bg-white p-10 shadow-md rounded-lg flex-1 justify-center m-10 flex flex-col">
        <h1 className="font-semibold text-3xl">Create User</h1>
        <div className="mt-2">
          <span className="text-base">Create a New User Profile</span>
        </div>
        <div className="h-96 mt-16 lg:mt-0 flex flex-col  gap-10 justify-center ">
          <div name="1" className="flex flex-col lg:flex-row justify-between">
            <div>
              <h1>Name: </h1>
              <input
                type="text"
                placeholder="Full name"
                className="p-3 w-80 bg-gray-200 rounded-lg"
              />
            </div>
            <div>
              <h1>Email: </h1>
              <input
                type="text"
                placeholder="Enter your email address"
                className="p-3 w-80 bg-gray-200 rounded-lg"
              />
            </div>
            <div>
              <h1>Contact Number: </h1>
              <input
                type="text"
                placeholder="(+63) xxx-xxx-xxxx"
                className="p-3 w-80 bg-gray-200 rounded-lg"
              />
            </div>
          </div>

          <div name="2" className="flex flex-col lg:flex-row  justify-between">
            <div>
              <h1>Role: </h1>
              <input
                type="text"
                placeholder="Enter your role"
                className="p-3 w-80 bg-gray-200 rounded-lg"
              />
            </div>
            <div>
              <h1>Address 1: </h1>
              <input
                type="text"
                placeholder="Enter your street address"
                className="p-3 w-80 bg-gray-200 rounded-lg"
              />
            </div>
            <div>
              <h1>Address 2: </h1>
              <input
                type="text"
                placeholder="Enter your apartment, suite, unit, or building (optional)"
                className="p-3 w-80 bg-gray-200 rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-16 lg:mt-0">
          <div className="text-center bg-[#4D869C] w-36 p-2 rounded-lg shadow-md hover:scale-105 transition-all active:scale-100 active:bg-[#47798d]">
            <button className="text-white">Create New User</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserForm;
