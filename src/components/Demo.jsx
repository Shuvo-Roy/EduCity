import React from "react";
import { HiSpeakerWave} from "react-icons/hi2";
import { HiOutlineStatusOnline,HiPlay } from "react-icons/hi";

export default function Demo() {
  return (
    <section className="bg-orangeOp bg-opacity-20">
      <div className="w-10/12 m-auto">
        <div className="flex flex-col gap-4 py-16">

          <div className="bg-white p-8 rounded-2xl">
            <div className="rounded-2xl overflow-hidden">
              <img src="/src/assets/teacher.jpg" className="rounded-2xl "/>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-6 bg-white rounded-xl p-8">
            <div className="p-4 bg-rose-100 rounded-xl">
                <HiSpeakerWave className="text-4xl text-red"/>
            </div>
                
                <h2 className="text-xl">Audio Class</h2>
            </div>
            <div className="flex items-center gap-6 bg-white rounded-xl p-8">
            <div className="p-4 bg-sky-100 rounded-xl">
                <HiOutlineStatusOnline className="text-4xl text-blue"/>
            </div>
                
                <h2 className="text-xl">Live Class</h2>
            </div>
            <div className="flex items-center gap-6 bg-white rounded-xl p-8">
            <div className="p-4 bg-green-100 rounded-xl">
                <HiPlay className="text-4xl text-green-600"/>
            </div>
                
                <h2 className="text-xl">Recorded Class</h2>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <h2 className="text-5xl m-2 p-2">Wanted to free trial?</h2>
            <button className="border border-orangeOp hover:bg-orangeOp py-4 px-8 rounded text-2xl font-semibold">Free Trial</button>
          </div>
        </div>
      </div>
    </section>
  );
}
