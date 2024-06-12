import React from 'react'

export default function Serivce() {
  return (
    <section className="py-12 px-12 bg-customColor  grid grid-cols-2 ">
      <div className=' p-2 '>
        <p className='text-3xl font-medium mb-5'> Contact Us </p>
        <h1 className='text-5xl font-black mb-5 '> Do you have any question?  </h1>
        <p className='text-gray-700 text-xl font-medium mb-5'  > We&apos;re known for our unbeatable customer service. Fee free to get in touch!  </p>
        <p className='text-xl font-medium font-serif'>Laxmi Pipe Centre</p>
        <p className='text-xl font-medium font-serif mb-5'> Shop No.39, Nandan Complex, Dr Rajkumar Road, Yaraganahalli, Mysore - 570029 (Near Ganapathi Temple)</p>
        <div className='mb-3'>
          <p className=' font-black'> Email us on:</p>
          <p className='underline'>ghanshyamlal.10@gmail.com</p>
        </div>
        <div>
          <p className=' font-black'> Contact us :</p>
          <p className=' underline'>9480641307</p>
        </div>
      </div>
      <div>
        <div className="  h-full p-2">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="mt-1 block w-full border border-gray-800 py-3 shadow-sm bg-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full border border-gray-800 py-3 shadow-sm bg-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea className="mt-1 block w-full border border-gray-800 py-3 shadow-sm bg-transparent"></textarea>
            </div>
            <button type="submit" className="px-6 py-4 bg-black border text-white rounded-md ">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
