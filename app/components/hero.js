import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
  return (
    <section className=" px-10 py-12 pb-10 text-white bg-black">
      <div className=" lg:grid lg:grid-cols-2 gap-2 ">
        <div className='cols-span-1 '>
          <img
            src="/jaq1.png"
            alt="Plumbing Products"
            className="mx-auto obeject-cover  shadow-lg w-full h-full"
          />
        </div>
        <div className='cols-span-2 '>
          <div className='mb-2'>
            <img
              src="/herosection.jpeg"
              alt="Plumbing Products"
              className="mx-auto obeject-cover  shadow-lg w-full h-full"
            />
          </div>
          <div className='flex gap-2 '>
            <img
              src="/astral-pipe.png"
              alt="Plumbing Products"
              className=" obeject-cover  shadow-lg w-full h-full overflow-hidden"
            />
            <img
              src="/jaq2.png"
              alt="Plumbing Products"
              className=" obeject-cover  shadow-lg w-full overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
