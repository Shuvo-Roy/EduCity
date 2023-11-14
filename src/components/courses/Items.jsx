import React from "react";
import {BiSearch} from 'react-icons/bi'

export default function Items() {
  const courses = [
    {
      id: 1,
      name: "Programming",
    },
    {
      id: 2,
      name: "Web Development",
    },
    {
      id: 3,
      name: "Database",
    },
    {
      id: 3,
      name: "AI",
    },
  ];
  return (
    <div className="flex flex-col py-16">
      <div className="py-4">
        <ul className="flex items-center justify-between">
          {courses.map((course) => (
            <li
              key={course.id}
              className="bg-white px-8 py-4 rounded-xl text-lg font-semibold"
            >
              {course.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center py-4 gap-4">
        <div class="relative text-gray-600 focus-within:text-gray-400 w-2/4">
          
          <input
            type="search"
            name="q"
            class="py-4 px-8 text-sm text-white rounded-md focus:outline-none focus:bg-white focus:text-gray-900 w-full"
            placeholder="Search Courses, Teacher name"
            autocomplete="off"
          />
          <span class="absolute inset-y-0 right-0 flex items-center pr-2">
            <button
              type="submit"
              class="p-1 focus:outline-none focus:shadow-outline"
            >
              <BiSearch/>
            </button>
          </span>
        </div>
        <div className="">
            <span className="flex items-center bg-white py-4 px-8 rounded-xl">
            <p className="text-lg">Sort by :</p>
            <select className="data-te-select-init">
            {courses.map((course) => (
            <option value={course.name}
              key={course.id}
              className="outline-none focus:outline-none focus:bg-white focus:text-gray-900"
            >
              {course.name}
            </option>
          ))}
            </select>
            </span>
        </div>
      </div>
    </div>
  );
}
