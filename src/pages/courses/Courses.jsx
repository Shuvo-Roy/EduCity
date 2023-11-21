import React, { useEffect, useState } from "react";
import Items from "../../components/courses/Items";
import CourseList from "../../components/courses/CourseList";
import programming from "../../components/courses/programming.json";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

export default function Courses() {
  const [title, setTitle] = useState("Educity");
  useEffect(() => {
    setTitle((document.title = "Courses"));
    return () => {
      // Reset the title when the component unmounts
      document.title = "Educity";
    };
  }, []);

  const getRandomCourses = (category) => {
    const categoryCourses = programming.filter(
      (course) => course.category === category
    );
    const randomCourses = categoryCourses
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);
    return randomCourses;
  };

  const categories = ["web", "ai", "database", "cybersecurity"];

  return (
    <section className="bg-bgBack">
      <div className="w-10/12 m-auto">
        <div className="py-4 flex items-center gap-1">
          <h2 className="text-sm text-gray-400">Home</h2>
          <span>|</span>
          <h2 className="text-lg text-gray-950">{title}</h2>
        </div>

        <div>
          <div className="bg-orangeOp bg-opacity-10 flex p-16 items-center justify-between rounded-2xl">
            <div className="">
              <h2 className="md:text-4xl lg:text-5xl text-3xl py-4">
                EduCity offers you a 27% discount this season
              </h2>
              <p className="text-xl text-gray-500 py-4">
                Promotion valid from May 1, 2023 - June 30, 2023
              </p>
              <button className="bg-orangeOp px-8 py-4 rounded-lg text-xl font-semibold">
                Sign In
              </button>
            </div>
            <div className="">
              <img src="/src/assets/object.png" className="w-full h-96" />
            </div>
          </div>
          <Items />

          {categories.map((category, index) => (
            <div className="py-6" key={index}>
              <div className="flex justify-between py-4">
                <h2 className="text-2xl font-semibold">
                  {category === "web"
                    ? "Web Development"
                    : category === "ai"
                    ? "Artificial Intelligence"
                    : category === "database"
                    ? "Database"
                    : category === "cybersecurity"
                    ? "Cyber Security"
                    : ""}
                </h2>
                <Link
                  to={`/courses/${category}`}
                  className="flex items-center gap-1"
                  courses={getRandomCourses(category)}
                >
                  <span>See more</span>
                  <AiOutlineRight />
                </Link>
              </div>
              <CourseList courses={getRandomCourses(category)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
