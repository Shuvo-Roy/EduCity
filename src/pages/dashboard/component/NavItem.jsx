import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaRectangleList, FaMoneyCheck } from "react-icons/fa6";
import { PiStudent } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";

export default function NavItem() {
  const dashItems = [
    {
      link: "Dashborad",
      path: "/teacher/dash",
      icon: <MdDashboard className="text-3xl text-gray-700" />,
    },
    {
      link: "Add Course",
      path: "/teacher/dash/courses",
      icon: <FaRectangleList className="text-3xl text-gray-700" />,
    },
    {
      link: "Students",
      path: "/students",
      icon: <PiStudent className="text-3xl text-gray-700" />,
    },
    {
      link: "Transaction",
      path: "/transaction",
      icon: <FaMoneyCheck className="text-3xl text-gray-700" />,
    },
    {
      link: "Setting",
      path: "/setting",
      icon: <IoSettings className="text-3xl text-gray-700" />,
    },
  ];
  return (
    <div className="flex flex-col h-full items-center py-8">
      <ul className="flex flex-col gap-4 h-5/6">
        {dashItems.map((item, index) => {
          return (
            <li key={index} className="">
              <Link
                to={item.path}
                onClick={item.onClick}
                className="text-xl text-gray-700 flex items-center gap-4  px-4 py-2 active:bg-dbgMain rounded cursor-pointer"
              >
                <span>{item.icon}</span>
                <span>{item.link}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
