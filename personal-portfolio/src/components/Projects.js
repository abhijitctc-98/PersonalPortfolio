import React from 'react'
import { motion } from 'framer-motion'
import CodeTypingProjects from './ui/CodeTypingProjects'
import CodeTypingProjectsBackground from './ui/CodeTypingProjectsBackground'

// const projects = [
//   { id: 1, title: 'Project 1', description: 'Description of Project 1' },
//   { id: 2, title: 'Project 2', description: 'Description of Project 2' },
//   { id: 3, title: 'Project 3', description: 'Description of Project 3' },
// ]

export const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <CodeTypingProjectsBackground />
      <h2 className="text-4xl font-bold mb-6">My Projects</h2>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div> */}
      <CodeTypingProjects />
    </motion.div>
  )
}