import React from 'react'

export default function Why() {
  return (
    <section className='bg-bgBack'>
        <div className='w-10/12 m-auto py-16'>
        <h2 className='text-5xl text-orangeOp text-center p-16'>Why should you choose EduCity?</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-20'>

                <div className='shadow rounded-xl overflow-hidden p-8 bg-white flex flex-col items-center justify-center'>
                    <div>
                        <img src='/src/assets/lesson.gif' className='h-36 w-36'/>
                    </div>
                    <div>
                        <h2 className="text-2xl text-slate-800 text-center p-4">Experienced Teacher</h2>
                        <p className="text-base text-gray-400 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className='shadow rounded-xl overflow-hidden p-8 bg-white flex flex-col items-center justify-center'>
                    <div>
                        <img src='/src/assets/math.gif' className='h-36 w-36'/>
                    </div>
                    <div>
                        <h2 className="text-2xl text-slate-800 text-center p-4">Creative Program</h2>
                        <p className="text-base text-gray-400 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className='shadow rounded-xl overflow-hidden p-8 bg-white flex flex-col items-center justify-center'>
                    <div>
                        <img src='/src/assets/save-money.gif' className='h-36 w-36'/>
                    </div>
                    <div>
                        <h2 className="text-2xl text-slate-800 text-center p-4">Lower Cost</h2>
                        <p className="text-base text-gray-400 leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
