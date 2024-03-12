import React from 'react'
import mobile from '../assets/mobileR.png'

const About = () => {
  return (
    <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16'>
        <div className='py-16 mb-6 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16 relative bg-black/40 max-w-[1300px] mx-auto rounded-xl'>
          <div className='p-7 mx-auto'>
            <div>
              <h2 className='text-3xl font-bold leading-tight gray-primary-color sm:text-4xl lg:text-5xl'>Hello, I am <span className='italic'>Bryan</span></h2>
              <p className='max-w-lg mt-3 text-xl leading-relaxed text-gray-400 md:mt-8'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id autem in veritatis maxime ipsa similique labore minus, voluptatem sed, tempore quos quaerat eum molestias, distinctio qui. Nisi deleniti, laboriosam accusamus vel incidunt quis aliquid quod commodi atque. Eligendi aliquid voluptates rem fugit at maxime tenetur laboriosam quaerat fuga iusto consequatur beatae sit quis consectetur!
              </p>
            </div>
            <img className='flex md:absolute mx-auto bottom-[-30%] right-[20%] w-[240px] md:w-[400px] h-auto' src={mobile} alt="" />
          </div>
        </div>

        <div className='bg-black/40 max-w-[1300px] mx-auto rounded-xl overflow-hidden'>
           <div className='px-6 py-10'>
            <div className='mx-auto max-w-5xl text-center'>
                <h2 className='block w-full gray-primary-color text-3xl sm:text-4xl'>
                    Optimize your website
                </h2>
                <p className='mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400'>
                    Redesign your website
                </p>
            </div>

            <div className='mx-auto max-w-7xl z-20 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3 '>
                <div className='rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow'>
                <h3 className='text-xl italic text-gray-200'>Customizable</h3>
                <p className='my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nemo, similique voluptatem laborum omnis incidunt?
                </p>
            </div>

            <div className='rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow'>
                <h3 className='text-xl italic text-gray-200'>
                    Fast Performance
                </h3>
                <p className='mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quibusdam nostrum laudantium illo maiores voluptates praesentium vel blanditiis fuga consequatur.
                </p>
              </div>

              <div className='rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow'>
                <h3 className='text-xl italic text-gray-200'>
                    Fully Featured
                </h3>
                <p className='mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quibusdam nostrum laudantium illo maiores voluptates praesentium vel blanditiis fuga consequatur.
                </p>
              </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default About