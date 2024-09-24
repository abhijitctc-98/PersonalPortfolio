import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Snowfall from 'react-snowfall'
import { PDFViewer } from './utils/PDFViewer'

import TenthImg from '../assets/TenthLogo.png'
import TwelthImg from '../assets/TwelthLogo.png'
import UniversityImg from '../assets/universityLogo.png'

import tenthPdf from '../assets/Tenth.pdf';
import twelfthPdf from '../assets/Twelth.pdf';
import universityPdf from '../assets/B-TECH.pdf';

const academicData = [
  {
    level: '10th',
    image: TenthImg,
    details: 'Completed 10th grade with distinction...',
    pdfUrl: tenthPdf
  },
  {
    level: '12th',
    image: TwelthImg,
    details: 'Finished 12th grade with honors...',
    pdfUrl: twelfthPdf
  },
  {
    level: 'B-Tech',
    image: UniversityImg,
    details: 'Graduated from university with a degree in...',
    pdfUrl: universityPdf
  }
]

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5,
      yoyo: Infinity,
      repeatDelay: 0.5
    }
  }
}

export function Academics() {
  const [currentLevel, setCurrentLevel] = useState(0)
  const [isPdfOpen, setIsPdfOpen] = useState(false)

  const handleSliderChange = (event) => {
    setCurrentLevel(Number(event.target.value))
  }

  const openPdf = () => {
    setIsPdfOpen(true)
  }

  const closePdf = () => {
    setIsPdfOpen(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen flex flex-col items-center justify-center p-8"
    >
      <Snowfall 
        color="white"
        snowflakeCount={200}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      />
      
      <h1 className="text-4xl font-bold mb-8">Academic Journey</h1>
      
      <div className="w-full max-w-3xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl">
        <motion.img
          key={currentLevel}
          src={academicData[currentLevel].image}
          alt={academicData[currentLevel].level}
          className="w-64 h-64 mx-auto mb-8 rounded-full object-cover"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />
        
        <h2 className="text-2xl font-semibold mb-4">{academicData[currentLevel].level}</h2>
        <p className="mb-4">{academicData[currentLevel].details}</p>
        
        <button 
          onClick={openPdf} 
          className="mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          View Certificate
        </button>
        
        <input
          type="range"
          min="0"
          max="2"
          step="1"
          value={currentLevel}
          onChange={handleSliderChange}
          className="w-full mb-4"
        />
        
        <div className="flex justify-between mt-2">
          <span>10th</span>
          <span>12th</span>
          <span>University</span>
        </div>
      </div>

      {isPdfOpen && (
        <PDFViewer 
          pdfUrl={academicData[currentLevel].pdfUrl} 
          onClose={closePdf}
          name={academicData[currentLevel].level} 
        />
      )}
    </motion.div>
  )
}