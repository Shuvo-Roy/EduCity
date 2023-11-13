import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className='w-10/12 m-auto py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-8 justify-around'>

        <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                    <img src='/src/assets/logo.gif' className='w-20 h-20'/>
                    <span className='font-semibold text-lg text-orangeOp '>EduCity</span>
                </div>
                <div className='flex items-center gap-4'>
                    <FaFacebookF className='text-3xl text-sky-600'/>
                    <FaLinkedinIn className='text-3xl text-sky-700'/>
                    <FaGithub className='text-3xl'/>
                </div>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-lg'>2023 EduCity</h2>
                <h2 className='text-lg'>EduCity is a registered Trademark</h2>
            </div>
        </div>

        <div className='flex flex-col gap-1'>
            <h2 className='text-3xl py-2'>Courses</h2>
            <a href='#' className='hover:text-orangeOp leading-7'>Classroom Courses</a>
            <a href='#' className='hover:text-orangeOp leading-7'>Virtual classroom Courses</a>
            <a href='#' className='hover:text-orangeOp leading-7'>E-learning Courses</a>
            <a href='#' className='hover:text-orangeOp leading-7'>Video Courses</a>
            <a href='#' className='hover:text-orangeOp leading-7'>Offline Courses</a>
        </div>

        <div className='flex flex-col gap-1'>
            <h2 className='text-3xl py-2'>Community</h2>
            <a href='#' className='hover:text-orangeOp leading-7'>Learners</a>
            <a href='#' className='hover:text-orangeOp leading-7'>Developers</a>
            <a href='#' className='hover:text-orangeOp leading-7'>Transactions</a>
            <a href='#' className='hover:text-orangeOp leading-7'>Blog</a>
            <a href='#' className='hover:text-orangeOp leading-7'>Teaching Center</a>
        </div>

        <div className='flex flex-col gap-1'>
            <h2 className='text-3xl py-2'>Quick Links</h2>
            <a href='#' className='hover:text-orangeOp leading-7'>Home</a>
            <a href='#' className='hover:text-orangeOp leading-7'>Professional Educations</a>
            <a href='#' className='hover:text-orangeOp leading-7'>Admission</a>
            <a href='#' className='hover:text-orangeOp leading-7'>Testimonial</a>
            <a href='#' className='hover:text-orangeOp leading-7'>Program</a>
        </div>

        <div className='flex flex-col gap-1'>
            <h2 className='text-3xl py-2'>More</h2>
            <a href='#' className='hover:text-orangeOp leading-7'>Press</a>
            <a href='#' className='hover:text-orangeOp leading-7'>Investors</a>
            <a href='#' className='hover:text-orangeOp leading-7'>Terms</a>
            <a href='#' className='hover:text-orangeOp leading-7'>Help</a>
            <a href='#' className='hover:text-orangeOp leading-7'>Contact</a>
        </div>
        


        </div>
    </footer>
  )
}
