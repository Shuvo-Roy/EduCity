import React from 'react'
import teacher from '../teacher.json'
import LogoInfo from './component/LogoInfo'
import NavItem from './component/NavItem'
export default function TeacherDash() {
  return (
    <section className='grid grid-cols-12'>
      <div className='col-span-3'>
        <div>
          <LogoInfo teacher={teacher}/>
        </div>
        <div>
          <NavItem/>
        </div>
      </div>
      <div className='bg-sky-700 col-span-9'>r</div>
    </section>
  )
}
