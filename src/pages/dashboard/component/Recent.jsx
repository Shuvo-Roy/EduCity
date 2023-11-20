import React from "react";

export default function Recent({ teacher }) {
    const getTeacher = (teacher) => {
        const randomTeacher = teacher
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);
        return randomTeacher;
      };
    const teacherRandom = getTeacher(teacher)
    console.log(teacherRandom)
  return (
    <div className="px-4">
      <div className="p-4 bg-white rounded-xl flex flex-col gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Recent Enrolled</h2>
        </div>
        <div className="flex flex-col gap-4">
          {teacherRandom.map((teacher, index) => {
            return (
              <div key={index} className="flex items-center gap-8">
                <span>
                  <img src={teacher.image} className="rounded-full h-16 w-16" />
                </span>
                <span>
                  <h2>{teacher.name}</h2>
                  <p>{teacher.teaching_field}</p>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
