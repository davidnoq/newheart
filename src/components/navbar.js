import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="border-b-2 bg-transparent backdrop-blur-md text-dark  h-28 w-full sticky top-0 z-10 text-3xl ">
      <ul className="flex justify-center items-center ">
        {/* Left Navigation Links */}
        <div className="flex gap-5">
          {['Shop', 'Collections'].map((item, index) => (
            <motion.li
              key={index}
              className="cursor-pointer"
              onClick={() => navigate(`/${item.toLowerCase()}`)}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {item}
            </motion.li>
          ))}
        </div>

        {/* Center Logo */}
        <li>
          <motion.img
            src="/images/newheart.jpg" // Replace with the correct path to your image
            alt="New Heart Studios"
            className="h-36 w-36 object-contain cursor-pointer"
            onClick={() => navigate('/')}
          />
        </li>

        {/* Right Navigation Links */}
        <div className="flex items-center gap-5">
          {['Contact', 'Tracking'].map((item, index) => (
            <motion.li
              key={index}
              className="cursor-pointer"
              onClick={() => navigate(`/${item.toLowerCase()}`)}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {item}
            </motion.li>
          ))}
        </div>
      </ul>

      {/* Icons on the Top-Right */}
      <div className="absolute top-14 right-8 flex gap-4">
        {/* Bag Icon */}
        <motion.div
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => navigate('/cart')} // Navigate to cart page
        >
          <img
            src="/icons/bag.svg"
            alt="Cart"
            className="h-8 w-8 object-contain"
          />
        </motion.div>

        {/* Person Icon */}
        <motion.div
          className="cursor-pointer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => navigate('/account')} // Navigate to account page
        >
          <img
            src="/icons/person.svg"
            alt="Account"
            className="h-8 w-8 object-contain"
          />
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
