import React, { useState } from 'react'
import{ AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
export default function Carousel() {
    const reviews = [
        {
          id: 1,
          name: "John Doe",
          img: "/src/assets/people (1).jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          review: 5,
        },
        {
          id: 2,
          name: "John Doe",
          img: "/src/assets/people (2).jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          review: 5,
        },
        {
          id: 3,
          name: "John Doe",
          img: "/src/assets/people (3).jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          review: 5,
        },
        {
          id: 4,
          name: "John Doe",
          img: "/src/assets/people (4).jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          review: 5,
        },
        {
          id: 5,
          name: "John Doe",
          img: "/src/assets/people (1).jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          review: 5,
        },
        {
          id: 6,
          name: "John Doe",
          img: "/src/assets/people (3).jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          review: 5,
        },
      ];
    
      const reviewsPerPage = 3;
      const [currentSlide, setCurrentSlide] = useState(0);
    
      const prevSlide = () => {
        setCurrentSlide(
          (currentSlide - 1 + Math.ceil(reviews.length / reviewsPerPage)) %
            Math.ceil(reviews.length / reviewsPerPage)
        );
      };
    
      const nextSlide = () => {
        setCurrentSlide(
          (currentSlide + 1) % Math.ceil(reviews.length / reviewsPerPage)
        );
      };
    
      const startIndex = currentSlide * reviewsPerPage;
      const endIndex = startIndex + reviewsPerPage;
      
      const totalSlides = Math.ceil(reviews.length / reviewsPerPage);
  return (
    <div className=''>
        <div className="overflow-hidden relative w-full">
          <div
            className="grid grid-flow-col gap-2 ease-out duration-500"
            style={{
            transform: `translateX(-${(currentSlide * 100)/(reviews.length/reviewsPerPage)}%)`
          }}
          >
            {reviews.slice(startIndex, endIndex).map((review,index) => {
                return (
              <div
                key={index}
                className="bg-slate-100 p-4 flex flex-col items-center gap-4 rounded-2xl"
              >
                <div>
                  <img
                    src={review.img}
                    alt={review.name}
                    className="h-16 w-16 object-cover rounded-full"
                  />
                </div>
                <div>
                  <p className="text-xl">{review.name}</p>
                  <span>{review.review}</span>
                  <p className="text-sm text-gray-500">{review.text}</p>
                </div>
              </div>
                )
            })}
          </div>
          <div className="absolute flex justify-between top-2/4 right-0 left-0 items-center">
          <button onClick={prevSlide} className="bg-orangeOp bg-opacity-10 p-2 rounded-full">
            <AiOutlineLeft className="text-xl text-orangeOp"/>
          </button>
          <button onClick={nextSlide} className="bg-orangeOp bg-opacity-10 p-2 rounded-full">
            <AiOutlineRight className="text-xl text-orangeOp"/>
          </button>
        </div>
        </div>
    </div>
  )
}
