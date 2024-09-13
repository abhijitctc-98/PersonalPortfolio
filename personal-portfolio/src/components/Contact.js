import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <form className="max-w-md mx-auto space-y-4">
        <Input placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <Textarea placeholder="Your Message" />
        <Button className="w-full">Send Message</Button>
      </form>
      <motion.div
        className="mt-8 flex justify-center space-x-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {['GitHub', 'LinkedIn', 'Twitter'].map((platform) => (
          <motion.a
            key={platform}
            href="#"
            className="text-white hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {platform}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  )
}