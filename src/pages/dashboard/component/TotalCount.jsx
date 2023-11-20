import React from "react";
import { IoSchoolSharp, IoVideocam } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export default function TotalCount() {
  const totalcount = [
    { title: "Courses", count: "15", icon: <IoSchoolSharp className="text-3xl"/> },
    { title: "Videos", count: "311", icon: <IoVideocam className="text-3xl"/> },
    { title: "Students", count: "1527", icon: <PiStudent className="text-3xl"/> },
    { title: "Earning", count: "$1500.00", icon: <FaMoneyBillTrendUp className="text-3xl"/> },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
      {totalcount.map((total, index) => {
        return (
          <div key={index} className="bg-white flex items-center gap-4 px-16 py-4  rounded-xl">
            <span className="p-2 bg-sky-300 rounded-full flex items-center">{total.icon}</span>
            <span>
              <h2 className="text-gray-500">{total.title}</h2>
              <h2 className="font-semibold text-2xl">{total.count}</h2>
            </span>
          </div>
        );
      })}
    </div>
  );
}
