import React from "react";
import teacher from "../teacher/teacher.json";
import LogoInfo from "./component/LogoInfo";
import NavItem from "./component/NavItem";
import DashHome from "./component/DashHome";
import { Route,Routes } from "react-router-dom";
import TeacherCourses from "./TeacherCourses";

export default function TeacherDash() {
  return (
    <section className="grid grid-cols-12">
      {/** Dash board left sidebar */}
      <div className="col-span-3">
        <div>
          <LogoInfo teacher={teacher} />
        </div>
        <div>
          <NavItem />
        </div>
      </div>

      {/** Dash board right sidebar */}
      <div className="col-span-9">
        <div>
        <Routes>
          <Route path="/" element={<DashHome teacher={teacher} />}/>
          <Route path="courses" element={<TeacherCourses teacher={teacher} />}/>
        </Routes>
          
        </div>
      </div>
    </section>
  );
}
