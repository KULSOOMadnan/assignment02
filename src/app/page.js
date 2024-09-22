import Image from "next/image";
import Link from "next/link";
import Navbar from "./@components/Navbar";
import Footer from "./@components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <main className="font-satisfy flex flex-col h-screen">
        <div className="relative h-screen">
          {/* Background Image */}
          <Image
            src="https://image.slidesdocs.com/responsive-images/background/pink-flowers-watercolor-nature-simple-floral-powerpoint-background_58c487484c__960_540.jpg"
            alt="Background"
            layout="fill"
            className=" w-screen bg-cover md:bg-cover "
          />

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-emerald-900 text-center">
            <h1 className="text-4xl md:text-6xl font-bold">
              Welcome to Our Wedding Services
            </h1>
            <p className="text-lg md:text-2xl mt-4">
              Making your special day unforgettable
            </p>
            <Link
              href="/contact"
              className="mt-8 bg-emerald-900 text-white px-6 py-2 rounded-lg font-bold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
