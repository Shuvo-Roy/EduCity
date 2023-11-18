import React from "react";
import { BiSearch } from "react-icons/bi";

export default function DashNav({ teacher }) {
  return (
    <header>
      <nav className="flex items-center justify-between py-4 px-4">
        <div>
          <span className="flex flex-col">
            <h2 className="text-2xl font-semibold">
              Hello {teacher[1].name && teacher[1].name.split(" ")[1]}
            </h2>
            <p className="text-md text-gray-500">
              Let's create something new today!
            </p>
          </span>
        </div>
        <div>
          <div className="relative text-gray-600 focus-within:text-gray-400 border rounded-xl overflow-hidden">
            <input
              type="search"
              name="q"
              className="py-3 px-8 text-lg text-white rounded-md focus:outline-none focus:bg-white focus:text-gray-900 w-full"
              placeholder="Search here"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-2">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <BiSearch className="text-3xl text-dbgMain"/>
              </button>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}
