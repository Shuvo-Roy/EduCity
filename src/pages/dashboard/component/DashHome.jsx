import React from 'react'
import DashNav from './DashNav'
import TotalCount from './TotalCount'
import TopCourse from './TopCourse'
import Chart from './Chart'
import Recent from './Recent'

export default function DashHome({teacher}) {
  return (
    <section className='bg-sky-100 bg-opacity-30 h-full'>
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
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
              <Chart/>
              <Recent teacher={teacher}/>
            </div>
        </div>
    </section>
  )
}
