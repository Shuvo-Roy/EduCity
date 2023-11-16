import React, { useEffect, useState } from "react";
import { CiLock } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import programming from "../components/courses/programming.json";
export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const courseDetails = () => {
      const details = programming.find((course) => course.id === id);
      setCourse(details);
    };
    courseDetails();
  }, [id]);
console.log(course)
  if (!course) {
    // You might want to add a loading state or error handling here
    return <div>Loading...</div>;
  }

  return (
    <section className=" bg-bgBack">
      <div className="w-10/12 m-auto">
        <div>
          {/**course section */}
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row p-6 bg-white rounded-lg gap-4 md:gap-16 lg:gap-16 xl:gap-16">
            <div className="">
              <img
                src={course.image}
                className="h-96 w-full md:w-96 lg:w-full"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-xl md:text-3xl lg:text-3xl xl:text-3xl">
                {course.title}
              </h2>
              <span className="flex items-center gap-1">
                <p className="text-xl">Number of Lessons :</p>
                <p className="font-semibold text-xl">
                  {course.lessons.length} Lessons
                </p>
              </span>
              <span className="flex items-center gap-1">
                <p className="text-xl">Completion time :</p>
                <p className="font-semibold text-xl">{course.duration}</p>
              </span>
              <span className="flex items-center gap-1">
                <p className="text-xl">Instructor :</p>
                <Link to={`/teacher/${course.tid}`} className="font-semibold text-cyan text-xl">
                  {course.teacher}
                </Link>
              </span>
              <span className="flex items-center gap-1">
                <p className="text-xl">Enrolled :</p>
                <p className="font-semibold text-xl">
                  {course.enrolled_students} + Studens
                </p>
              </span>
              <span className="flex items-center gap-1">
                <p className="text-xl">Reviews</p>
              </span>
              <span className="flex items-center gap-1">
                <p className="text-xl">Price :</p>
                <p className="font-semibold text-red text-xl">
                  {course.latest_price} $
                </p>
              </span>
              <span className="flex items-center justify-between">
                <button className="px-8 py-3 bg-orangeOp rounded-xl font-semibold text-lg">
                  Add to cart
                </button>
                <button className="px-8 py-3 bg-slate-800 rounded-xl text-white font-semibold text-lg">
                  free Trial
                </button>
              </span>
            </div>
          </div>

          {/**other informations */}

          <div className="py-8">
            <h2 className="text-2xl">Course Details</h2>
            <p className="text-lg leading-7">{course.description}</p>
          </div>
          <div className="py-2">
            <h2 className="text-2xl py-2">Lessons</h2>
            <div className="bg-white p-6 rounded-xl">
              {course.lessons.map((lesson, index) => {
              return (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="">
                    <h2 className="text-xl">{lesson.title}</h2>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-md">{lesson.duration}</span>
                    <CiLock className="text-red text-2xl" />
                  </div>
                </div>
              );
            })}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
