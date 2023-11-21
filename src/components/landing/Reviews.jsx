import React from "react";

import Carousel from "./Carousel";

export default function Reviews() {
  
  return (
    <section className="w-10/12 m-auto">
      <div className="py-16">
        <div>
          <h2 className="text-5xl text-center text-orangeOp py-8">
            What Our Student Say?
          </h2>
        </div>
        <Carousel/>
      </div>
    </section>
  );
}
