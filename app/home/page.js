'use client'
import React from 'react'
import { CarouselDefault } from '../components/home/carosuel'
import Product from '../components/home/product'
import HeroSection from '../components/home/hero'
import ProductCategory from '../components/home/productCategory'
import Serivce from '../components/home/serivce'
import WorkingHourMap from '../components/home/WorkingHourMap'
import Whatsapp from '../components/home/whatsapp'


export default function HomePage() {
    return (
        <div className='bg-white'> 
            <CarouselDefault />
            <Product />
            <HeroSection />
            <ProductCategory />
            <Serivce />
            <WorkingHourMap />
            <Whatsapp />
        </div>
    )
}
