import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Slider } from './ui/slider'
import { Button } from './ui/button'
import { Progress } from './ui/progress'


export const Home = () => {
  const [energy, setEnergy] = useState(50)
  const [experience, setExperience] = useState(47)

  const gainExperience = () => {
    setExperience(prev => Math.min(prev + 10, 100))
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white"
    >
      <motion.h1
        className="text-6xl font-bold mb-4 bg-clip-text bg-gradient-to-r from-primary to-secondary"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        className="text-xl mb-8 text-gray-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Hi, I'm [Your Name]. I'm a [Your Profession].
      </motion.p>
      <motion.div
        className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-secondary mb-8 relative"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <motion.div
          className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img
            src={require('../assets/Home_IMG.jpg')}
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
      <div className="w-full max-w-md space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-sm font-medium mb-2 text-gray-300">Energy Level</label>
          <Slider
            value={[energy]}
            onValueChange={(value) => setEnergy(value[0])}
            max={100}
            step={1}
          />
          <div className="mt-2 text-right text-primary font-bold">{energy}%</div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <label className="block text-sm font-medium mb-2 text-gray-300">Experience</label>
          <Progress value={experience} className="w-full" showPercentage />
          <div className="mt-2 text-right text-primary font-bold">{experience}%</div>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button onClick={gainExperience} className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary-dark transition-all duration-300">
            Gain Experience
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="mt-8 flex justify-center space-x-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {['GitHub', 'LinkedIn', 'Twitter'].map((platform, index) => (
          <motion.a
            key={platform}
            href="#"
            className="text-gray-400 hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, delay: index * 0.2, repeat: Infinity, ease: "linear" }}
            >
              {platform[0]}
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  )
}