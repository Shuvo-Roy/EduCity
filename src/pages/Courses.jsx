import React from 'react'
import Items from '../components/courses/Items'

export default function Courses() {
  return (
    <section className='bg-bgBack'>
    <div className='w-10/12 m-auto'>
        <div>
            <div className='bg-orangeOp bg-opacity-10 flex p-16 items-center justify-between rounded-2xl'>
            <div className=''>
                <h2 className='md:text-4xl lg:text-5xl text-3xl py-4'>EduCity offers you a 27% discount this season</h2>
                <p className='text-xl text-gray-500 py-4'>Promotion valid from May 1, 2023 - June 30, 2023</p>
                <button className='bg-orangeOp px-8 py-4 rounded-lg text-xl font-semibold'>Sign In</button>
            </div>
            <div className=''>
                <img src='/src/assets/object.png' className='w-full h-96'/>
            </div>
                
            </div>
            <Items/>
            <div></div>
            <div></div>
        </div>
    </div>
        
    </section>
  )
}
