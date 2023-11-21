import React from "react";
import { CiCalculator2 } from "react-icons/ci";
import { BsCodeSlash } from "react-icons/bs";
import { HiLanguage } from "react-icons/hi2";
import { MdComputer } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="w-full bg-bgBack">
      {/**hero up */}
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row items-center justify-center w-10/12 m-auto py-16">
        <div className="flex flex-wrap gap-4">
          <h2 className="text-4xl">Knowledge Connection</h2>
          <h2 className="text-4xl font-semibold text-orangeOp">
            Open the Door to the Future
          </h2>
          <p className="leading-7">
            Giving every student the opportunity to access the best education
            and open the door to the world of knowledge. Start your learning
            journey today with Edudu to become an outstanding student in our
            learning community.
          </p>
          <button className="px-8 py-4 border border-orangeOp rounded-md font-semibold hover:bg-orangeOp duration-300">
            Get Started !
          </button>
        </div>
        <div className="">
          <img src="/src/assets/object.png" />
        </div>
      </div>

      {/**hero down */}
      <div className="w-10/12 m-auto">
        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-center py-16">
            <h1 className="text-5xl font-semibold text-slate-800 py-4">
              Lessons revolve around 4 areas
            </h1>
            <p className="text-center text-xl py-4">
              Diverse lessons around 4 subjects: Math, literature, English,
              drawing help children improve their comprehensive knowledge
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 lg:gap-24 gap-2">

            <div className="bg-white rounded-xl md:my-8">
              <div className=" flex items-center lg:gap-12 gap-4 m-8">
                <span className="rounded-xl bg-blue bg-opacity-20 p-4">
                  <CiCalculator2 className="text-3xl text-blue" />
                </span>
                <h2 className="text-xl">Artificial Intelligence</h2>
              </div>
            </div>
            <div className="bg-white rounded-xl md:my-8">
              <div className=" flex items-center lg:gap-12 gap-4 m-8">
                <span className="rounded-xl bg-orangeOp bg-opacity-20 p-4">
                  <MdComputer className="text-3xl text-orangeOp" />
                </span>
                <h2 className="text-xl">Cloud</h2>
              </div>
            </div>
            <div className="bg-white rounded-xl md:my-8">
              <div className=" flex items-center lg:gap-12 gap-4 m-8">
                <span className="rounded-xl bg-red bg-opacity-20 p-4">
                  <FaDatabase className="text-3xl text-red" />
                </span>
                <h2 className="text-xl">Data Base</h2>
              </div>
            </div>
            <div className="bg-white rounded-xl md:my-8">
              <div className=" flex items-center lg:gap-12 gap-4 m-8">
                <span className="rounded-xl bg-cyan bg-opacity-20 p-4">
                  <BsCodeSlash className="text-3xl text-cyan" />
                </span>
                <h2 className="text-xl">Web Development</h2>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
