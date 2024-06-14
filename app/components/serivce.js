'use client'
import React, { useState } from 'react'

export default function Serivce() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess('Thank you for your message! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          message: '',
          number: '',
        });
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      setError(error.message);
    }

    setIsSubmitting(false);
  };
  return (
    <section className="py-12 px-12 bg-customColor  grid md:grid-cols-2  ">
      <div className='p-2 '>
        <p className='text-3xl font-medium mb-5'> Contact Us </p>
        <h1 className='text-5xl font-black mb-5 '> Do you have any question?  </h1>
        <p className='text-gray-700 text-xl font-medium mb-5'  > We&apos;re known for our unbeatable customer service. Fee free to get in touch!  </p>
        <p className='text-xl font-medium font-serif text-white'>Laxmi Pipe Centre</p>
        <p className='text-xl font-medium font-serif mb-5 text-white'> Shop No.39, Nandan Complex, Dr Rajkumar Road, Yaraganahalli, Mysore - 570029 (Near Ganapathi Temple)</p>
        <div className='mb-3'>
          <p className='font-black text-white'>Email us on:</p>
          <a className='underline text-white' href='mailto:ghanshyamlal.10@gmail.com'>ghanshyamlal.10@gmail.com</a>
        </div>
        <div>
          <p className=' font-black text-white'> Contact us :</p>
          <a className='underline text-white' href='tel:9480641307'>9480641307</a>
        </div>
      </div>
      <div>
        <div className="h-full p-2">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full text-white border bg-transparent py-3 px-4  shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full text-white border bg-transparent py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile No</label>
              <input
                type="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="mt-1 block w-full border text-white bg-transparent py-3 px-4  shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="Your number"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border text-white bg-transparent py-3 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                rows="4"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition-transform transform hover:scale-105"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {success && <p className="text-green-500 mt-4">{success}</p>}
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
