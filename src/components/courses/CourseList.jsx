import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight, AiOutlineShoppingCart } from "react-icons/ai";


export default function CourseList({courses}) {
    console.log(courses)
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">
        {courses.map((course, index) => (
          <div key={index} className="bg-white p-4 rounded-xl">
            <div className="py-2 overflow-hidden relative">
              <img src={course.image} className="h-60 w-full rounded-xl" />
              <span className="bg-white flex items-center justify-center overflow-hidden absolute bottom-0 p-2 right-0">
                <p className="font-semibold">{course.enrolled_students} + Enrolled</p>
              </span>
            </div>
            <div>
              <h2 className="text-lg font-semibold">{course.title}</h2>
              <p className="text-base text-gray-500 leading-6">
                Instructor : {course.teacher}
              </p>
            </div>

            <div className="flex justify-between items-center py-2">
              <span className="flex items-center gap-2">
                <p className="text-red font-semibold text-xl">
                  {course.latest_price}
                </p>
                <p className="text-sm text-gray-400 line-through">
                  {course.previous_price}
                </p>
              </span>
              <span className="bg-orangeOp bg-opacity-10 p-2 rounded-full">
                <AiOutlineShoppingCart className="text-2xl text-orangeOp" />
              </span>
            </div>
          </div>
        ))}
      </div>
  );
}
