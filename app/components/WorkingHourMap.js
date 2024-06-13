import React from 'react';

export default function WorkingHourMap() {
  return (
    <div className="mx-auto p-10 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Working Hours</h2>
          <table className="min-w-full  bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Day</th>
                <th className="py-3 px-4 uppercase font-semibold text-sm">Hours</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[
                { day: 'Monday', hours: '8:45 AM to 08:00 PM' },
                { day: 'Tuesday', hours: '8:45 AM to 08:00 PM' },
                { day: 'Wednesday', hours: '8:45 AM to 08:00 PM' },
                { day: 'Thursday', hours: '8:45 AM to 08:00 PM' },
                { day: 'Friday', hours: '8:45 AM to 08:00 PM' },
                { day: 'Saturday', hours: '8:45 AM to 08:00 PM' },
                { day: 'Sunday', hours: '8:45 AM to 08:00 PM' },
              ].map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4">{item.day}</td>
                  <td className="py-3 px-4">{item.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.650191651413!2d76.67883048547988!3d12.30583606479418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7030fffffff9%3A0xebf9857263eb5089!2sLaxmi%20Pipe%20Centre!5e0!3m2!1sen!2sin!4v1718278190654!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
