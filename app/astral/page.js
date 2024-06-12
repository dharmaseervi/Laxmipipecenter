'use client'
import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function Astral() {
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
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetQuoteClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Your Trusted Astral Pipe Distributor</h1>
        <p className="text-lg mt-4">Quality pipes for all your plumbing and industrial needs</p>
        <button
          onClick={handleGetQuoteClick}
          className="mt-6 px-6 py-2 bg-yellow-400 text-black rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get a Quote
        </button>
      </div>

      {/* Product Showcase */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto px-20">
          <h2 className="text-3xl font-bold mb-6 text-black">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productCat.map((item) => (
              <Card key={item.id} className="mt-6 w-96 h-96 border">
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
      </section>

      {/* Quote Form Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full">
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-bold mb-2">Get a Quote</h2>
              <p className="text-gray-700">Fill out the form below and we'll get back to you.</p>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full border border-gray-300 py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  className="mt-1 block w-full border border-gray-300 py-2 px-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-3 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Send Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
