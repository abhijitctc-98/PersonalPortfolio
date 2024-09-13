// import React from 'react'

// export const Progress = ({ value, className }) => {
//   return (
//     <div className={`w-full bg-gray-200 rounded-full h-2.5 ${className}`}>
//       <div
//         className="bg-primary h-2.5 rounded-full"
//         style={{ width: `${value}%` }}
//       ></div>
//     </div>
//   )
// }

import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

export const Progress = ({ value, className = '', showPercentage = false }) => {
  return (
    <div className="relative">
      <div className={`w-full bg-gray-700 rounded-full h-2.5 ${className}`}>
        <motion.div
          className="bg-blue-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
      {showPercentage && (
        <motion.span
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-xs text-gray-300"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {value}%
        </motion.span>
      )}
    </div>
  )
}

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  className: PropTypes.string,
  showPercentage: PropTypes.bool
}