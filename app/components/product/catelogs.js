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

export default function Catelogs() {

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


        <div className='flex justify-center items-start bg-white'>
            <div className='grid lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  py-4 gap-10 justify-center items-center bg-white '>
                {productCat.map((item) => (
                    <Card key={item.id} className="mt-6 xl:w-72 2xl:w-96 w-96 h-96 border border-black">
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
        </div>
    )
}
