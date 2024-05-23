import classNames from "classnames";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const linkClasses =
  "flex items-center gap-2 mb-3 p-3 rounded-lg hover:bg-[#CDE8E5] hover:text-white active:bg-[#4D869C] font-semibold ";

const labelStyle = "hidden md:block";

const SidebarItem = ({ key, label, path, icon }) => {
  const { pathname } = useLocation();

  return (
    <li key={key}>
      <Link
        to={path}
        className={classNames(
          pathname === path ? "bg-[#4D869C] text-white" : "text-black",
          linkClasses
        )}
      >
        <span>{icon}</span>
        <span className="hidden md:block">{label}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
