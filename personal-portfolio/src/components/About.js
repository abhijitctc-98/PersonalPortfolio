import React from 'react';
import { motion } from 'framer-motion';
import ShootingStarsBackground from './ui/ShootingStarsBackground';

export const About = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Shooting Stars background */}
      <ShootingStarsBackground />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative z-10 container mx-auto px-4 py-8"
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="space-y-4"
          >
            <p>
              I'm a passionate [Your Profession] with [X] years of experience in [Your Field].
              I love creating [what you create] and solving complex problems.
            </p>
            <p>
              My expertise includes [List your key skills].
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            className="relative"
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FF0066"
                d="M47.7,-57.2C59.7,-47.3,66.3,-30.9,68.1,-14.3C69.9,2.3,67,19.2,58.8,32.8C50.6,46.4,37.1,56.7,21.8,62.3C6.5,67.9,-10.7,68.9,-25.4,63.3C-40.1,57.7,-52.3,45.6,-60.1,31.1C-67.9,16.6,-71.3,-0.3,-67.1,-15.3C-62.9,-30.3,-51,-43.3,-37.6,-52.9C-24.2,-62.5,-9.3,-68.7,4.4,-73.8C18.1,-78.8,35.7,-67.1,47.7,-57.2Z"
                transform="translate(100 100)"
              />
            </svg>
            <motion.img
              src={require("../assets/About_Img.jpg")}
              alt="Profile"
              className="absolute inset-0 m-auto rounded-full w-179 h-80 object-cover"
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
