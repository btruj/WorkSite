import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 overflow-hidden h-[92vh]'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 bg-[#223]/30 rounded-3xl'>
        <div className='mb-4'>
          <div className='mb-6 max-w-3xl text-xl text-gray-600 dark:text-slate-400'>
            <h2 className='font-heading mb-4 font-bold tracking-tight gray-primary-color text-3xl sm:text-5xl'>
              Let's connect
            </h2>
            <p className='mx-auto mt-4 max-w-3xl text-xl text-gray 600 dark:text-slate-400'>
              and start working on amazing things
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact