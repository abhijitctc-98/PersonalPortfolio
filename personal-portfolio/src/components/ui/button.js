import React from 'react'

export const Button = ({ children, ...props }) => (
  <button
    className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
    {...props}
  >
    {children}
  </button>
)