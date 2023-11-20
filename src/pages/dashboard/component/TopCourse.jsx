import React from "react";
import { FaArrowRight, FaBookmark } from "react-icons/fa6";

export default function TopCourse({ teacher }) {
  return (
    <div className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 px-4">
        <div className="bg-white p-4 rounded-xl">
          <div>
            <h2 className="text-xl font-semibold">Top Course</h2>
          </div>
          <div className="py-4 flex flex-col gap-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-4">
                <span className="p-2 bg-sky-200 bg-opacity-30 rounded-full">
                  <FaBookmark className="text-red text-2xl" />
                </span>

                <span>
                  <h2 className="font-semibold">Cyber Security</h2>
                  <p className="text-sm text-gray-400">2125426565</p>
                </span>
              </div>
              <span>
                <h2 className="font-semibold text-dbgMain">6536546</h2>
                <p className="text-sm text-gray-400">212 Students</p>
              </span>
            </div>
            <div className="flex gap-2 justify-end text-dbgMain ">
              <span className="flex items-center justify-center cursor-pointer gap-4">
                <h2>View more</h2>
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl">
          <div>
            <h2 className="text-xl font-semibold">Top Comment</h2>
          </div>
          <div className="py-4 flex flex-col gap-4">
            <div className="">
              <div className="flex items-center gap-4">
                <span className="rounded-full">
                  <img
                    src={teacher[2].image}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </span>
                <span>
                  <h2 className="font-semibold">Lorem ipsum doler sit amet.</h2>
                  <p className="text-sm text-gray-400">{teacher[2].name}</p>
                </span>
              </div>
            </div>
            <div className="flex gap-2 justify-end text-dbgMain ">
              <span className="flex items-center justify-center cursor-pointer gap-4">
                <h2>View more</h2>
                <FaArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
