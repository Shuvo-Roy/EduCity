import React from 'react'
import DashNav from './DashNav'
import TotalCount from './TotalCount'
import TopCourse from './TopCourse'

export default function DashHome({teacher}) {
  return (
    <section className='bg-sky-100 bg-opacity-30'>
        <div className='flex flex-col gap-4'>
            <div>
                <DashNav teacher={teacher}/>
            </div>
            <div className='p-4'>
                <TotalCount/>
            </div>
            <div>
              <TopCourse teacher={teacher}/>
            </div>
        </div>
    </section>
  )
}
