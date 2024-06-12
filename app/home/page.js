'use client'
import React from 'react'
import { CarouselDefault } from '../components/carosuel'
import Product from '../components/product'
import HeroSection from '../components/hero'
import ProductCategory from '../components/productCategory'
import Serivce from '../components/serivce'


export default function HomePage() {
    return (
        <div className='bg-white'> 
            <CarouselDefault />
            <Product />
            <HeroSection />
            <ProductCategory />
            <Serivce />
        </div>
    )
}