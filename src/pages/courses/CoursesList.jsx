import React from "react";

export default function CoursesList(courses) {
  console.log(courses)
  return (
    <section className="bg-bgBack">
      <div className="w-10/12 m-auto">
        <div>
        {/* {categories.map((category, index) => (
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
                <Link to={`/courses/${category}`} className="flex items-center gap-1">
                  <span>See more</span>
                  <AiOutlineRight />
                </Link>
              </div>
              <CourseList courses={getRandomCourses(category)} />
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}
