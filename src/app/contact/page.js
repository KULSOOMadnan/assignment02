'use client'

import Navbar from '../@components/Navbar'
import Footer from '../@components/Footer'
import { useState } from 'react';
import Image from 'next/image';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.name);
    alert('Message sent!');
    // You can add form handling logic here
  };

  return (
    <>
      <Navbar />
      <div className='relative h-screen font-satisfy'>
        <Image
          src="https://img.freepik.com/free-vector/beautiful-blooming-flower-leaves-background_44538-2060.jpg?t=st=1727015752~exp=1727019352~hmac=314f1733e6ad6d633d9071b3b26ccee3e6a4286c35751fc5f9094a43c33584dd&w=1060" // Replace with actual URL
          alt="Contact Floral Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 lg:max-h-full">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 md:mb-4 text-pink-900 text-center">Contact Us</h1>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white shadow-md rounded-lg p-8 md:p-5 space-y-6"
          >
            {/* Name Field */}
            <div className="mb-6">
              <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg text-slate-900 focus:outline-none focus:border-slate-500"
                type="text"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg text-slate-900 focus:outline-none focus:border-slate-500"
                type="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label className="block text-slate-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg text-slate-900 focus:outline-none focus:border-slate-500"
                id="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                className="bg-pink-800 hover:bg-pink-300 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline w-full sm:w-auto"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;

// export default contact

