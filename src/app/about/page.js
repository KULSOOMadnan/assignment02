import React from "react";
import Navbar from "../@components/Navbar";
import Footer from "../@components/Footer";
import Image from "next/image";
import Link from "next/link";
function about() {
  return (
    <>
      <Navbar />
      <div className="relative h-screen font-satisfy">
        {/* Background Image */}
        <Image
          src="https://img.freepik.com/premium-vector/hand-drawn-floral-background_23-2149032851.jpg?w=900"
          alt="About Floral Background"
          layout="fill"
          className=" w-screen bg-cover md:bg-cover "
        />
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-emerald-900 text-center px-6">
          <h1 className="text-6xl md:text-6xl font-bold mb-6">About Us</h1>

          <p className="text-lg md:text-2xl mb-4 max-w-3xl text-justify ">
            We are passionate about creating unforgettable experiences. With a
            decade of expertise, we specialize in event planning, offering
            personalized services to make every celebration unique and
            memorable.
          </p>

          <p className="text-md md:text-2xl leading-relaxed max-w-3xl text-justify">
            From elegant weddings to intimate gatherings, we focus on details
            that reflect your style. Our team is dedicated to making your event
            flawless, so you can enjoy every moment.
          </p>
          <Link
              href="/services"
              className="mt-8 bg-emerald-900 text-white px-6 py-2 rounded-lg font-bold"
            >
              Our Services
            </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default about;
