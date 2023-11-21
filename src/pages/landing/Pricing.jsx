import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaAngleRight, FaXmark } from "react-icons/fa6";

import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <section className="bg-bgBack">
      <div className="w-9/12 m-auto">
        <h2 className="text-5xl font-semibold text-center py-16 text-orangeOp">
          Affordable pricing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          <div className="flex flex-col bg-white p-6 rounded-xl gap-2">
            <h2 className="text-orangeOp text-xl">Like a Starter</h2>
            <div className="flex items-baseline gap-2">
              <h2 className="text-3xl text-sky-500">Free</h2>
              <span>/</span>
              <p className="text-base">Forever</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="">
                  <IoCheckmarkOutline className="text-xl rounded-full text-sky-600" />
                </span>
                <h2 className="text-lg">
                  Access all courses within the learning program
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="">
                  <FaXmark className="text-xl rounded-full text-red" />
                </span>
                <h2 className="text-lg">Earn a certificate upon completion</h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="">
                  <FaXmark className="text-xl rounded-full text-red" />
                </span>
                <h2 className="text-lg">Instructor Support</h2>
              </div>
            </div>
            <button className="bg-orangeOp hover:bg-Orange py-2 rounded">
              <Link to="/singin" className="text-xl font-semibold">
                Get Start !
              </Link>
            </button>
          </div>

          <div className="flex flex-col bg-white p-6 rounded-xl gap-2 relative overflow-hidden border border-orangeOp">
            <span className="absolute top-0 right-0 px-4 py-1 bg-orangeOp font-semibold">
              Most popular
            </span>
            <h2 className="text-orangeOp text-xl">Individual Plus</h2>
            <p className="text-base text-gray-500">
              Complete multiple courses and earn credentials in the short term
            </p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-3xl text-sky-500">$14</h2>
              <span>/</span>
              <p className="text-base">month</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="">
                  <IoCheckmarkOutline className="text-xl rounded-full text-sky-600" />
                </span>
                <h2 className="text-lg">
                  Access 7,000+ courses and Specializations from 170+ leading
                  companies and universities
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="">
                  <IoCheckmarkOutline className="text-xl rounded-full text-sky-600" />
                </span>
                <h2 className="text-lg">Earn unlimited certificates</h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="">
                  <IoCheckmarkOutline className="text-xl rounded-full text-sky-600" />
                </span>
                <h2 className="text-lg">
                  Learn job-relevant skills and tools with 1,000+ applied
                  projects and hands-on labs from industry experts
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="">
                  <IoCheckmarkOutline className="text-xl rounded-full text-sky-600" />
                </span>
                <h2 className="text-lg">
                  Choose from more than 15 Professional Certificate programs
                  from industry leaders like Google, Facebook, and more
                </h2>
              </div>
            </div>
            <button className="bg-orangeOp hover:bg-Orange py-2 rounded">
              <Link to="/singin" className="text-xl font-semibold">
                Get Start !
              </Link>
            </button>
          </div>

          <div className="flex flex-col bg-white p-6 rounded-xl gap-2">
            <h2 className="text-orangeOp text-xl">Corporate Plus</h2>
            <p className="text-base text-gray-500">
              Combine flexibility and savings with long-term learning goals
            </p>
            <div className="flex items-baseline gap-2">
              <h2 className="text-3xl text-sky-500">$299</h2>
              <span>/</span>
              <p className="text-base">year</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="">
                  <IoCheckmarkOutline className="text-xl rounded-full text-sky-600" />
                </span>
                <h2 className="text-lg">
                  Enjoy maximum flexibility to achieve work/life balance and
                  learn at your own pace
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="">
                  <IoCheckmarkOutline className="text-xl rounded-full text-sky-600" />
                </span>
                <h2 className="text-lg">Gear up your employe</h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="">
                  <IoCheckmarkOutline className="text-xl rounded-full text-sky-600" />
                </span>
                <h2 className="text-lg">
                  Save when you pay up front for the year
                </h2>
              </div>
            </div>
            <button className="bg-orangeOp hover:bg-Orange py-2 rounded">
              <Link to="/singin" className="text-xl font-semibold">
                Get Start !
              </Link>
            </button>
          </div>
        </div>

        <div className="py-6">
          <h2 className="text-5xl font-semibold text-center py-8 text-orangeOp">
            Frequently asked questions
          </h2>
          <div className="flex flex-col gap-2 border">
            <details className="border border-orangeOp py-2 px-2">
              <summary class="flex items-center gap-2 rounded-lg">
                <FaAngleRight className="text-orangeOp"/>
                <h2 className="text-slate-900 text-lg">Lorem ipsum dolor sit amet</h2>
              </summary>

              <span className="text-base leading-7 text-gray-600 px-4">
                Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit nostrud pariatur culpa magna in aute.
              </span>
            </details>
            <details className="border border-orangeOp py-2 px-2">
              <summary class="flex items-center gap-2 rounded-lg">
                <FaAngleRight className="text-orangeOp"/>
                <h2 className="text-slate-900 text-lg">Lorem ipsum dolor sit amet</h2>
              </summary>

              <span className="text-base leading-7 text-gray-600 px-4">
                Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                nostrud pariatur culpa magna in aute.
              </span>
            </details>
            <details className="border border-orangeOp py-2 px-2">
              <summary class="flex items-center gap-2 rounded-lg">
                <FaAngleRight className="text-orangeOp"/>
                <h2 className="text-slate-900 text-lg">Lorem ipsum dolor sit amet</h2>
              </summary>

              <span className="text-base leading-7 text-gray-600 px-4">
                Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                nostrud pariatur culpa magna in aute.
              </span>
            </details>
            <details className="border border-orangeOp py-2 px-2">
              <summary class="flex items-center gap-2 rounded-lg">
                <FaAngleRight className="text-orangeOp"/>
                <h2 className="text-slate-900 text-lg">Lorem ipsum dolor sit amet</h2>
              </summary>

              <span className="text-base leading-7 text-gray-600 px-4">
                Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore
                ex aute deserunt esse ipsum elit aliqua. Aute quis minim velit
                nostrud pariatur culpa magna in aute.
              </span>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}
