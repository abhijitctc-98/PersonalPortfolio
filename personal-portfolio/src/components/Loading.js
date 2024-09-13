import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        const newProgress = oldProgress + 1;
        return newProgress;
      });
    }, 20);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      
      <div className="flex items-center mb-8">
        <motion.div
          className="text-4xl font-bold text-primary"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Loading
        </motion.div>
        
        <div className="flex ml-4">
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              className="w-4 h-4 bg-blue-500 rounded-full mx-1"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: index * 0.1,
              }}
            />
          ))}
        </div>
      </div>

      <div className="w-64 h-4 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <motion.p
        className="mt-4 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {progress}% Complete
      </motion.p>
    </div>
  );
};
