import React from 'react';
import { motion } from 'framer-motion';

const AchievementCard = ({ title, description }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl text-white"
    whileHover={{ scale: 1.05 }}
  >
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

const AchievementsGUI = () => {
  const achievements = [
    { title: 'Completed 100 Projects', description: 'Created a variety of web apps' },
    { title: '500+ GitHub Stars', description: 'Received recognition for open-source work' },
    { title: '10,000+ Lines of Code', description: 'Written in multiple programming languages' },
  ];

  return (
    <div className="relative h-screen bg-gradient-to-br from-gray-900 to-gray-700 p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((achieve, idx) => (
          <AchievementCard key={idx} title={achieve.title} description={achieve.description} />
        ))}
      </div>
    </div>
  );
};

export default AchievementsGUI;
