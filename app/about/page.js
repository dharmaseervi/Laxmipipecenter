'use client';
import React from 'react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <>
      <div className="bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <section className="mb-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 rounded-lg shadow-lg">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Welcome to <span className="text-yellow-300">Laxmi Pipe Center</span>
            </h1>
            <p className="mt-4 text-lg">
              Your trusted distributor of high-quality plumbing solutions and piping systems.
            </p>
          </section>

          {/* Our Journey */}
          <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-last lg:order-first">
              <img src="/mathji.jpeg" alt="Our Journey" className="rounded-xl shadow-lg object-cover h-80 w-full" />
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800">Our Journey</h2>
              <p className="text-gray-600 mt-4">
                Founded over 10 years ago, Laxmi Pipe Center began with a mission to provide top-notch plumbing and piping solutions to our community. Our commitment to quality and customer satisfaction has driven us to become a leading distributor in the region. Today, we are proud to supply products to more than 50 retail dealers across Karnataka.
              </p>
            </div>
          </section>

          {/* Our Products */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Astral Pipes', subtitle: 'Expertly crafted plumbing solutions', image: '/astral-pipe.png' },
                { title: 'Jaquar Bath Fittings', subtitle: 'Premium quality faucets', image: '/jaquar.webp' },
                { title: 'Parryware Sanitaryware', subtitle: 'Stylish bathroom solutions', image: '/parryware.jpeg' },
                { title: 'Onida Taps', subtitle: 'Innovative tap systems', image: '/onida.webp' },
              ].map((product, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-transform hover:scale-105">
                  <img src={product.image} alt={product.title} className="rounded-xl mb-4 h-40 w-full object-cover" />
                  <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
                  <p className="text-gray-600">{product.subtitle}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <img src="/whyus.jpeg" alt="Why Choose Us" className="rounded-xl shadow-lg object-cover h-80 w-full order-last lg:order-first" />
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
              <ul className="list-disc list-inside text-gray-600 mt-4">
                <li>Experience and Expertise: Over 10 years of industry knowledge.</li>
                <li>Quality Assurance: Products from reputable brands.</li>
                <li>Extensive Network: Serving over 50 retail dealers.</li>
                <li>Customer-Centric Approach: Tailored solutions for your needs.</li>
              </ul>
            </div>
          </section>

          {/* Our Vision */}
          <section className="mb-16 text-center bg-gradient-to-r from-green-500 to-teal-500 text-white py-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Our vision is to continue to grow and expand our reach while maintaining our commitment to quality and customer satisfaction. We aim to be the go-to source for plumbing and piping solutions in Karnataka and beyond.
            </p>
          </section>

        </div>

      </div>
      {/* Contact Us */}
      <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-16 px-6 sm:px-12 lg:px-24 text-white w-full ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Information Section */}
          <div className="space-y-8">
            <p className="text-4xl font-semibold">Contact Us</p>
            <h1 className="text-5xl font-extrabold leading-tight">Do you have any questions?</h1>
            <p className="text-xl font-light">
              We're known for our unbeatable customer service. Feel free to get in touch!
            </p>
            <div className="space-y-4">
              <p className="text-xl font-medium">Laxmi Pipe Centre</p>
              <p className="text-lg">
                 Shop No.39, Nandan Complex, Dr Rajkumar Road, Yaraganahalli, Mysore - 570029 (Near Ganapathi Temple)
              </p>
            </div>
            <div>
              <p className="font-semibold"> Email us on:</p>
              <p className="underline text-lg">ghanshyamlal.10@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold"> Contact us:</p>
              <p className="underline text-lg">9480641307</p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-10 rounded-2xl shadow-2xl text-gray-800 transform transition-transform hover:scale-105">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 py-3 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full border border-gray-300 py-3 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  className="mt-1 block w-full border border-gray-300 py-3 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  rows="4"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
