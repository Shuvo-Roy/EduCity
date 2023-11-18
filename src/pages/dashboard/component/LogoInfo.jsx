import React from 'react'

export default function LogoInfo({teacher}) {
  return (
    <div className='flex items-center justify-center gap-4 py-4'>
        <img src={teacher[1].image} className='w-14 h-14 object-cover rounded-full'/>
        <span>
            <h2 className='text-3xl font-semibold text-dbgMain'>Instructor</h2>
            <p>{teacher[1].name}</p>
        </span>
    </div>
  )
}
