import Link from 'next/link';
import React from 'react'

export default function ProductCategory() {
    return (

        <section className="py-20  flex justify-center items-center">
            <div className="container mx-auto p-5 ">
                <h2 className="text-3xl font-bold mb-6 text-black">Product Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Category Cards */}
                    <CategoryCard
                        title="Astral Pipes"
                        image="/astral.png"
                        description="High-quality plumbing solutions for residential and commercial applications."
                       
                    />
                    <CategoryCard
                        title="Jaquar Bath"
                        image="/jaquar.webp"
                        description="Elegant and durable bathroom fittings from Jaquar."
                       
                    />
                    <CategoryCard
                        title="Parryware Faucets"
                        image="/parryware.jpeg"
                        description="Innovative and stylish faucets from Parryware."
                       
                    />
                    <CategoryCard
                        title="Onida Taps"
                        image="/onida.webp"
                        description="Reliable and high-performance taps from Onida."
                       
                    />
                </div>
            </div>
        </section>
    )
}
function CategoryCard({ title, image, description, link }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src={image} alt={title} className="h-40 w-full object-cover rounded-md" />
            <h3 className="text-xl font-bold mt-4">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    );
}
