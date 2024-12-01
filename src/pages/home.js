import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { motion } from "framer-motion";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Home() {
  const text = "NEW HEART STUDIOS";
  const text2 = "Fashion Made in HIS Image."
  const waveAnimation = {
    initial: { opacity: 0 }, // Start with 0 opacity
    animate: { opacity: 1 }, // Transition to full opacity
  };
  return (
    <div className="bg-white min-h-screen ">
      
      {/* Existing Sections */}
      <div className="flex flex-col m-auto md:flex-row items-center h-screen">
      {/* Title and Text */}
        <div className="md:w-1/2 text-center ">
        <h1 className="text-8xl font-bold text-gray-900 mb-4 ">
          {/* Map through each letter */}
          {text.split("").map((letter, index) => (
            <motion.span
            key={index}
            className="inline-block"
            initial="initial"
            animate="animate"
            variants={waveAnimation}
            transition={{
              duration: 0.4, // Duration for each letter
              ease: "easeInOut",
              delay: index * 0.07, // Stagger effect
            }}
          >
            {letter === " " ? "\u00A0" : letter} {/* Preserve spaces */}
          </motion.span>
          ))}
        </h1>
          <p className="text-5xl text-gray-700">{text2.split("").map((letter, index) => (
            <motion.span
            key={index}
            className="inline-block"
            initial="initial"
            animate="animate"
            variants={waveAnimation}
            transition={{
              duration: 0.4, // Duration for each letter
              ease: "easeInOut",
              delay: index * 0.05, // Stagger effect
            }}
          >
            {letter === " " ? "\u00A0" : letter} {/* Preserve spaces */}
          </motion.span>
          ))}</p>
        </div>
        
        {/* Hoverable Image for Front and Back */}
        <div className="md:w-1/2 relative w-full h-auto rounded-lg overflow-hidden group">
          {/* Front Image */}
          <img
            src="/images/file1.png"
            alt="Front Side"
            className="w-full h-auto block transition-opacity duration-500"
          />
          {/* Back Image */}
          <img
            src="/images/file2.png"
            alt="Back Side"
            className="w-full h-auto absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="mt-28 mb-8 m-auto w-3/4 flex flex-col md:flex-row items-center">
  <div className="md:w-2/3">
    <img
      src="/images/yari.jpg"
      alt="photo"
      className="w-full h-auto block "
    />
  </div>
  
  <div className="md:w-2/3">
    <img
      src="/images/yez.jpg"
      alt="photo"
      className="w-full h-auto block "
    />
  </div>
  
  
</div>
<div className="w-1/2 mb-48 m-auto justify-center items-center">
    <h2 className="text-5xl font-semibold text-gray-900 pb-5 text-center">
      Our Story
    </h2>

    <p className="text-3xl text-center text-gray-700">
      At New Heart Studios, we are passionate about creating unique and inspiring art pieces. Our team of talented artists and designers work collaboratively to bring your visions to life.
    </p>
  </div>



      {/* Featured Items Section with Swiper */}
      <div className="mt-28 mb-48 m-auto w-3/4">
        <h2 className="text-5xl font-semibold text-gray-900 mb-8 text-center">Best Sellers</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            768: {
              slidesPerView: 3, // Show 3 slides on md (768px) and above
            },
          }}
          className="mySwiper "
        >
          {/* Featured Item 1 */}
          <div className="flex flex-col md:flex-row">
          <SwiperSlide>
            <div className=" overflow-hidden">
              {/* Added 'group' class here */}
              <div className="relative w-full h-0 pb-[100%] group">
                {/* Front Image */}
                <img
                  src="/images/file1.png"
                  alt="Featured Item 1 Front"
                  className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500"
                />
                {/* Back Image */}
                <img
                  src="/images/file2.png"
                  alt="Featured Item 1 Back"
                  className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">DON'T Be Yourself</h3>
                <p className="text-xl text-gray-700">$34.99</p>
                <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors">Add to Cart</button>
              </div>
            </div>
          </SwiperSlide>

          {/* Featured Item 2 */}
          <SwiperSlide>
            <div className=" overflow-hidden">
              {/* Added 'group' class here */}
              <div className="relative w-full h-0 pb-[100%] group">
                {/* Front Image */}
                <img
                  src="/images/file1.png"
                  alt="Featured Item 2 Front"
                  className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500"
                />
                {/* Back Image */}
                <img
                  src="/images/file2.png"
                  alt="Featured Item 2 Back"
                  className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Featured Item 2</h3>
                <p className="text-xl text-gray-700">A brief description of this item.</p>
                <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors">Add to Cart</button>
              </div>
            </div>
          </SwiperSlide>

          {/* Featured Item 3 */}
          <SwiperSlide>
            <div className=" overflow-hidden">
              {/* Added 'group' class here */}
              <div className="relative w-full h-0 pb-[100%] group">
                {/* Front Image */}
                <img
                  src="/images/file1.png"
                  alt="Featured Item 3 Front"
                  className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500"
                />
                {/* Back Image */}
                <img
                  src="/images/file2.png"
                  alt="Featured Item 3 Back"
                  className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Featured Item 3</h3>
                <p className="text-xl text-gray-700">A brief description of this item.</p>
                <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors">Add to Cart</button>
              </div>
            </div>
          </SwiperSlide>

          {/* Featured Item 4 */}
          <SwiperSlide>
            <div className=" overflow-hidden">
              {/* Added 'group' class here */}
              <div className="relative w-full h-0 pb-[100%] group">
                {/* Front Image */}
                <img
                  src="/images/file1.png"
                  alt="Featured Item 4 Front"
                  className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-500"
                />
                {/* Back Image */}
                <img
                  src="/images/file2.png"
                  alt="Featured Item 4 Back"
                  className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Featured Item 4</h3>
                <p className="text-xl text-gray-700">A brief description of this item.</p>
                <button className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors">Add to Cart</button>
              </div>
            </div>
          </SwiperSlide>
          </div>
        </Swiper>
      </div>
      <div className="mt-28 mb-48 m-auto w-2/3 text-center">
        <h2 className="text-5xl font-semibold text-gray-900 mb-8">Want to see more?</h2>
        <a href="/shop" className="inline-block px-8 py-3 text-xl bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
          View All Clothes
        </a>
      </div>

    </div>
  );
}

export default Home;
