import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="border text-dark w-full text-xl p-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo Section */}
        <motion.div
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img
            src="/images/newheart.jpg"
            alt="New Heart Studios"
            className="h-24 w-24 object-contain"
          />
        </motion.div>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          {['Shop', 'Collections', 'Contact', 'Tracking'].map((item, index) => (
            <motion.li
              key={index}
              className="cursor-pointer"
              onClick={() => console.log(`${item} clicked`)} // Replace with navigation logic
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="flex gap-6">
          {/* Example Social Media Icons */}
          <motion.img
            src="/icons/facebook.svg" // Replace with your social icon paths
            alt="Facebook"
            className="h-8 w-8 object-contain cursor-pointer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => window.open('https://facebook.com', '_blank')}
          />
          <motion.img
            src="/icons/instagram.svg" // Replace with your social icon paths
            alt="Instagram"
            className="h-8 w-8 object-contain cursor-pointer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => window.open('https://instagram.com', '_blank')}
          />
          <motion.img
            src="/icons/twitter.svg" // Replace with your social icon paths
            alt="Twitter"
            className="h-8 w-8 object-contain cursor-pointer"
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => window.open('https://twitter.com', '_blank')}
          />
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center mt-6 text-gray-600">
        © {new Date().getFullYear()} New Heart Studios. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
