// import Navbar from '../@components/Navbar';
// import Footer from '../@components/Footer';
// import Image from 'next/image';

// export default function Services() {
//   return (
//     <>
//       <Navbar />
//       <div className="relative h-screen font-satisfy">
//         {/* Background Image */}
//         <Image
//           src="https://img.freepik.com/free-vector/hand-painted-watercolor-floral-wallpaper_52683-67104.jpg?t=st=1727013454~exp=1727017054~hmac=a63522268a5b83674f1117117146b52c156ae774083949d07d331c0156c40d79&w=900"
//           alt="Services Floral Background"
//           layout="fill"
          
//           className="z-0 bg-contain md:bg-cover "
//         />
//         {/* Main Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-rose-700 text-center">
//           <h1 className="text-5xl md:text-8xl font-bold text-emerald-900">Our Services</h1>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
//             <div className="bg-white p-6 shadow-lg rounded-lg">
//               <h2 className="text-2xl font-bold mb-4  text-emerald-900">Venue Decoration</h2>
//               <p>We offer beautiful floral and lighting decorations to make your venue shine.</p>
//             </div>
//             <div className="bg-white p-6 shadow-lg rounded-lg">
//               <h2 className="text-2xl font-bold mb-4  text-emerald-900">Catering</h2>
//               <p>Our catering service provides a range of menu options for all tastes.</p>
//             </div>
//             <div className="bg-white p-6 shadow-lg rounded-lg">
//               <h2 className="text-2xl font-bold mb-4  text-emerald-900">Entertainment</h2>
//               <p>We arrange live music, DJs, and other entertainment options to create the perfect atmosphere.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
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
          className="z-0 bg-contain md:bg-cover"
        />
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-rose-700 text-center">
          <h1 className="text-5xl md:text-8xl font-bold text-emerald-900">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            
            {/* Existing Services */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-emerald-900">Venue Decoration</h2>
              <p>We offer beautiful floral and lighting decorations to make your venue shine.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-emerald-900">Catering</h2>
              <p>Our catering service provides a range of menu options for all tastes.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-emerald-900">Entertainment</h2>
              <p>We arrange live music, DJs, and other entertainment options to create the perfect atmosphere.</p>
            </div>

            {/* New Services */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-emerald-900">Photography & Videography</h2>
              <p>Capture every precious moment with our professional photography and videography services.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-emerald-900">Event Planning & Coordination</h2>
              <p>Our expert planners help organize and manage every detail for a stress-free event.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-emerald-900">Invitation Design & Printing</h2>
              <p>Create beautiful, customized invitations and printed materials for your guests.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-emerald-900">Transportation & Logistics</h2>
              <p>We provide reliable transport options and logistic support to ensure smooth guest arrival and departure.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-emerald-900">Themed Decor & Props</h2>
              <p>Enhance your event with unique themed decor, custom props, and visual effects.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-emerald-900">Custom Cake & Desserts</h2>
              <p>Delight your guests with personalized cakes and dessert tables that match your theme.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-emerald-900">On-site Event Support</h2>
              <p>Our team provides on-site support to address any needs and keep the event running smoothly.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-emerald-900">Audio & Visual Equipment Rental</h2>
              <p>We offer high-quality AV equipment rental to ensure clear sound and stunning visuals.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-emerald-900">Luxury Guest Accommodation</h2>
              <p>Ensure your guests enjoy a luxurious stay with our premium accommodation and booking assistance.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
