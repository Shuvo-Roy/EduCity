import React from 'react'

export default function Subscribe() {
  return (
    <section className='bg-orangeOp bg-opacity-20'>
    <div className='w-10/12 m-auto py-16'>
    <div className='bg-orangeOp rounded-xl p-8 flex flex-col items-center justify-center'>
        <div className='py-4 w-3/4'>
            <h2 className='text-center text-4xl text-slate-950'>Do You Still have any Questions?</h2>
            <p className='text-center leading-7 text-slate-600'>Don't hesitate to leave us your phone number.We will contact you to discuss any questions you may have</p>
        </div>
        <div className='p-4 flex flex-col md:flex-row lg:flex-row'>
            <input type='email' placeholder='Email or Phone number' className='md:px-8 lg:px-8 px-4 md:py-4 lg:py-4 py-4 appearance-none  focus:outline-none focus:shadow-outline text-xl bg-white md:rounded-l-lg lg:rounded-l-lg xl:rounded-l-lg' id='email'/>
            <button className='md:px-8 px-4 lg:px-8 md:py-4 lg:py-4 py-4 bg-slate-950 text-white text-xl font-semibold md:rounded-r-lg lg:rounded-r-lg xl:rounded-r-lg'>Subscribe</button>
        </div>
    </div>
    </div>
    </section>
  )
}
