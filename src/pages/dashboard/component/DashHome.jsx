import React from 'react'
import DashNav from './DashNav'

export default function DashHome({teacher}) {
  return (
    <section className='bg-sky-100 bg-opacity-30'>
        <div className='flex flex-col gap-4'>
            <div>
                <DashNav teacher={teacher}/>
            </div>
            <div>
                
            </div>
        </div>
    </section>
  )
}
