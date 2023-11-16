import React from "react";
import teachers from './teacher.json'
import { Link } from "react-router-dom";

export default function Teachers() {
  return (
    <section className="bg-bgBack">
      <div className="w-10/12 m-auto">
        <div className="flex flex-col gap-8 py-8">
            <div className="flex items-center justify-center">
                <h2 className="text-4xl">Professional Instructors at EduCity</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
            {teachers.map((teacher,index)=>{
                return(
                    <Link to={`/teacher/${teacher.tid}`} key={index} className="bg-white p-4 rounded-xl flex flex-col gap-4">
                        <div>
                            <img src={teacher.image} alt={teacher.name}/>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold">{teacher.name}</h2>
                            <span className="flex gap-2 items-center">
                                <h2>Total Courses :</h2>
                                <p className="font-semibold text-red">{teacher.total_courses}</p>
                            </span>
                            <span className="flex gap-2 items-center">
                                <h2>Ratings :</h2>
                                <p className="font-semibold text-red">{teacher.average_rating}</p>
                            </span>
                            <p className="leading-7">{teacher.experience}</p>
                        </div>
                    </Link>
                )
            })}
            </div>
        </div>
      </div>
    </section>
  );
}
