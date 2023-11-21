import React from "react";
import { GoDeviceDesktop } from "react-icons/go";
import { PiCertificateLight, PiExamFill } from "react-icons/pi";

export default function Skills() {
  return (
    <section className="w-10/12 m-auto">
      <div className="bg-orangeOp bg-opacity-90 rounded-xl my-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 p-8 gap-4">
          <div className="flex items-center justify-center gap-4">
          <div className="p-4 bg-white bg-opacity-20 rounded-3xl">
            <GoDeviceDesktop className="text-6xl text-red"/>
          </div>
            
            <div className="leading-7">
              <h1 className="text-xl">Learn The Latest Skills</h1>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a BC, making it over 2000 years old.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
          <div className="p-4 bg-white bg-opacity-20 rounded-3xl">
            <PiExamFill className="text-6xl text-blue"/>
          </div>
            
            <div className="leading-7">
              <h1 className="text-xl">Get Ready For a Career</h1>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a BC, making it over 2000 years old.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
          <div className="p-4 bg-white bg-opacity-20 rounded-3xl">
            <PiCertificateLight className="text-6xl text-green-600"/>
          </div>
            
            <div className="leading-7">
              <h1 className="text-xl">Earn a Certificate</h1>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a BC, making it over 2000 years old.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}
