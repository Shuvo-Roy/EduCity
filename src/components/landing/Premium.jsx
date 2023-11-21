import React from "react";

export default function Premium() {
  return (
    <section className="w-10/12 m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-16">
        <div className="flex items-center justify-center">
          <img src="/src/assets/pic (1).jpg" className="h-96 w-96" />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-5xl text-Orange">
              Premium Learning Experience
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center ">
              <img src="/src/assets/easy.gif" className="h-20 w-20" />
              <div>
                <h2 className="text-lg text-slate-800 font-semibold">Easily Accessible</h2>
                <p className="text-base text-gray-400">Learn what you want</p>
              </div>
              
            </div>
            <div className="flex gap-4 items-center ">
              <img src="/src/assets/learning.gif" className="h-20 w-20" />
              <div>
                <h2 className="text-lg text-slate-800 font-semibold">Learn with Fun</h2>
                <p className="text-base text-gray-400">Learn what you want</p>
              </div>
              
            </div>
            <div className="flex gap-4 items-center ">
              <img src="/src/assets/graduate.gif" className="h-20 w-20" />
              <div>
                <h2 className="text-lg text-slate-800 font-semibold">Master Program</h2>
                <p className="text-base text-gray-400">Learn what you want</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
