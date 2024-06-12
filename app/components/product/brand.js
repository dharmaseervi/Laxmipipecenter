import Link from 'next/link'
import React from 'react'

export default function Brand() {

    const brand = [
        {
            id: 1,
            image: '/brand3.jpeg'
        },
        {
            id: 2,
            image: '/brand2.svg'
        },
        {
            id: 3,
            image: '/astrallogo.png'
        },
        {
            id: 4,
            image: '/brand5.png'
        },

    ]
    return (
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-4 px-4 py-4 bg-white  pt-10 " >
                {brand.map((brand, index) => (
                    <Link key={index} loading="lazy" className="shadow-md bg-white border-black justify-center items-center rounded-lg p-8  max-w-lg  gap-4 flex border bg-slate-400 hover:bg-slate-300" href={'/'} >
                        <div className='w-44 h-24 flex justify-center items-center '>
                            <img className='object-cover ' src={brand.image} alt={brand.id} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    )
}
