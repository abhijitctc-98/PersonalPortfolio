import React from 'react'

export const Slider = ({ value, onValueChange, max, step }) => {
  return (
    <input
      type="range"
      min="0"
      max={max}
      step={step}
      value={value[0]}
      onChange={(e) => onValueChange([parseInt(e.target.value, 10)])}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
    />
  )
}