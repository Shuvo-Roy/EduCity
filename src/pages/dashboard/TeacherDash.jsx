import React from "react";
import teacher from "../teacher.json";
import LogoInfo from "./component/LogoInfo";
import NavItem from "./component/NavItem";
import DashHome from "./component/DashHome";
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

      {/** Dash board left sidebar */}
      <div className="col-span-9">
        <div>
          <DashHome teacher={teacher}/>
        </div>
      </div>
    </section>
  );
}
