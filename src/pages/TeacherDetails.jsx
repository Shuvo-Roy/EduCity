import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import teachers from "./teacher.json";
import programming from '../components/courses/programming.json'
import { FaLinkedin} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";


export default function TeacherDetails() {
  const { id } = useParams();
  const [teacher, setTeacher] = useState([]);
  const [course, setCourse] = useState([])

  // check id with teachers id and get the data
  useEffect(() => {
    const teacherDetails = () => {
      const details = teachers.find((teacher) => teacher.id === id);
      setTeacher(details);
      /** if we want to convert object to an aray
        setTeacher(details ? [details] : []); */
    };
    teacherDetails();
  }, []);



  //check courses with name

  useEffect(()=>{
    const courseData = ()=>{
        const data = programming.find((course) => course.teacher === teacher.name)
        setCourse(data)
    }
    courseData()
  },[])


  return (
    <section className="bg-bgBack">
      <div className="w-10/12 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-8 py-16">
          <div className="col-span-12 sm:col-auto md:col-span-4 lg:col-span-4 xl:col-span-4">
            {teacher && (
              <div className="bg-white p-8 rounded-xl">
                <div className="flex flex-col items-center justify-center gap-3">
                  <img src={teacher.image} className="h-52 w-52 rounded-full" />
                  <h2 className="text-xl">{teacher.name}</h2>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Total Courses</h2>
                    <span>{teacher.total_courses}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Ratings</h2>
                    <span>{teacher.average_rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Grauduated</h2>
                    <span>{teacher.graduate ? "Yes" : "No"}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Social</h2>
                    <span>
                    {teacher.social_link &&
                        (typeof teacher.social_link === 'object' ? (
                          <div className="flex gap-3">
                            {teacher.social_link.linkedin && (
                              <a href={teacher.social_link.linkedin} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl text-sky-700"/>
                              </a>
                            )}
                            {teacher.social_link.twitter && (
                              <a href={teacher.social_link.twitter} target="_blank" rel="noopener noreferrer">
                                <FaXTwitter className="text-2xl text-cyan"/>
                              </a>
                            )}
                            {teacher.social_link.website && (
                              <a href={teacher.social_link.website} target="_blank" rel="noopener noreferrer">
                              <CiGlobe className="text-2xl text-red"/>
                              </a>
                            )}
                          </div>
                        ) : null)}

                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-span-12 sm:col-auto md:col-span-8 lg:col-span-8 xl:col-span-8">
            {teacher && (
              <div className="bg-white p-8 rounded-xl">
                <div>
                  <h2 className="text-2xl font-semibold">
                    {" "}
                    About {teacher.name && teacher.name.split(" ")[1]}
                  </h2>
                  <p className="leading-7">{teacher.about}</p>
                  <h2 className="text-2xl font-semibold">Experience</h2>
                  <p className="leading-7">{teacher.experience}</p>
                </div>
              </div>
            )}
            {course && (
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl">
                    <div>
                        <img src={course.image}/>
                    </div>
                    <div>
                        <h2 className="font-semibold">{course.title}</h2>
                        <span className="flex gap-2 items-center">
                        <p>Category</p>
                        <p className="px-4 py-1 bg-orangeOp bg-opacity-20 rounded uppercase">{course.category}</p>
                        </span>
                        <span className="flex gap-4 items-center">
                            <p className="text-red">{course.latest_price}</p>
                            <p className="text-sm text-gray-400 line-through">{course.previous_price}</p>
                        </span>
                    </div>
                </div>
            )}
            
          </div>
          
        </div>
      </div>
    </section>
  );
}