import React from 'react'
import { motion } from 'framer-motion'

import AchievementsGUIBackground from './ui/AchievementsGUIBackground'
import AchievementsGUI from './ui/AchievementsGUI'

// const achievements = [
//   { id: 1, title: 'Achievement 1', description: 'Description of Achievement 1' },
//   { id: 2, title: 'Achievement 2', description: 'Description of Achievement 2' },
//   { id: 3, title: 'Achievement 3', description: 'Description of Achievement 3' },
// ]

export const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      
      <h2 className="text-4xl font-bold mb-6">My Achievements</h2>
      {/* <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
            <p>{achievement.description}</p>
          </motion.div>
        ))}
      </div> */}
      <AchievementsGUI />
      <AchievementsGUIBackground />
    </motion.div>
  )
}