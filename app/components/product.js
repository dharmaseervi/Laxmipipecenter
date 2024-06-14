'use client'
import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function Product() {

    const productCat = [
        {
            id: 1,
            title: 'CPVC PRO',
            subtitle: ' Hot & Cold Water Plumbing System',
            image: '/pro1.png'
        },
        {
            id: 2,
            title: 'Pex-A PRO',
            subtitle: 'Cross-linked PE – Hot & Cold Water Plumbing System',
            image: '/pro2.png'
        },
        {
            id: 3,
            title: 'MultiPex',
            subtitle: 'PEX-AL-PEX 3 Layer Composite Piping System',
            image: '/pro3.png'
        },
        {
            id: 4,
            title: 'Aquarius',
            subtitle: 'Lead-Free uPVC Piping for Potable Water',
            image: '/pro4.png'
        },
        {
            id: 5,
            title: 'ECO PRO',
            subtitle: 'Lead-Free uPVC Piping for Reclaimed Water',
            image: '/pro5.jpg'
        },
        {
            id: 6,
            title: 'Silencio',
            subtitle: 'High-Density Low Noise PP Drainage System',
            image: '/pro6.png'
        },
        {
            id: 7,
            title: 'Drain Pro',
            subtitle: 'Advanced PP SWR System With 3 Layer Technology',
            image: '/pro7.png'
        },
        {
            id: 8,
            title: 'Drainmaster',
            subtitle: 'Superior PVC SWR Drainage System',
            image: '/pro8.png'
        },
        {
            id: 9,
            title: 'Underground',
            subtitle: 'PVC Underground Drainage System',
            image: '/pro9.jpeg'
        },
        {
            id: 10,
            title: 'Aquasafe',
            subtitle: 'Lead-Free uPVC Pressure Piping System for Agriculture',
            image: '/pro10.png'
        },
    ]

    return (
        <div className='bg-white  2xl:min-h-screen flex 2xl:px-10 justify-center items-center '>
            <div className='bg-gradient-to-r from-red-500 to-indigo-600 px-10 py-10 2xl:rounded-xl 2xl:relative 2xl:top-20 flex flex-col justify-center items-center '>
                <div className='grid  lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4  justify-center  2xl:rounded-xl  2xl:relative 2xl:bottom-20 gap-10 '>
                    {productCat.slice(0, 4).map((item) => (
                        <Card key={item.id} className="mt-6 w-80 h-96 border">
                            <CardHeader color="blue-gray" className="relative h-56">
                                <img
                                    src={item.image}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {item.title}
                                </Typography>
                                <Typography>
                                    {item.subtitle}
                                </Typography>
                            </CardBody>
                        </Card>
                    ))}
                </div>
                <div className='flex justify-center items-center flex-col gap-2 mb-10 p-8'>
                    <h1 className='text-4xl font-medium'>
                        Astral Pipes
                    </h1>
                    <p className='text-gray-400'>
                        Astral stands for innovation and setting new trends in the piping industry. Bringing newer piping technologies and continuous innovation in existing as well as new products has been the focal point at Astral. This special emphasis helps the brand set the bar higher and lead amongst others by example.
                    </p>
                </div>
            </div>
        </div>
    )
}
