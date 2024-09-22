import Navbar from '../@components/Navbar';
import Footer from '../@components/Footer';
import Image from 'next/image';

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="relative h-screen font-satisfy">
        {/* Background Image */}
        <Image
          src="https://img.freepik.com/free-vector/hand-painted-watercolor-floral-wallpaper_52683-67104.jpg?t=st=1727013454~exp=1727017054~hmac=a63522268a5b83674f1117117146b52c156ae774083949d07d331c0156c40d79&w=900"
          alt="Services Floral Background"
          layout="fill"
          
          className="z-0 bg-contain md:bg-cover "
        />
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-rose-700 text-center">
          <h1 className="text-5xl md:text-8xl font-bold text-emerald-900">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4  text-emerald-900">Venue Decoration</h2>
              <p>We offer beautiful floral and lighting decorations to make your venue shine.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4  text-emerald-900">Catering</h2>
              <p>Our catering service provides a range of menu options for all tastes.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4  text-emerald-900">Entertainment</h2>
              <p>We arrange live music, DJs, and other entertainment options to create the perfect atmosphere.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
