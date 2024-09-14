import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

import emailjs from 'emailjs-com';

import ChatsContactsBackground from './ui/ChatsContactsBackground'

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formData,
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    )
    .then(() => {
      alert('Message sent successfully!');
    })
    .catch((err) => {
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative container mx-auto px-4 py-8"
    >
      {/* Background component positioned absolutely */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ChatsContactsBackground />
      </div>

      {/* Form content positioned relatively and above the background */}
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <form onSubmit={sendEmail} className="max-w-md mx-auto space-y-4">
          <Input name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="text-black w-full mb-4 rounded-lg p-2 hover:bg-gray-200 transition-all" />
          <Input name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="text-black w-full mb-4 rounded-lg p-2 hover:bg-gray-200 transition-all" />
          <Textarea name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            className="text-black w-full mb-4 rounded-lg p-2 hover:bg-gray-200 transition-all" />
          <Button type="submit" className="w-full">Send Message</Button>
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
      </div>
    </motion.div>
  )
}
