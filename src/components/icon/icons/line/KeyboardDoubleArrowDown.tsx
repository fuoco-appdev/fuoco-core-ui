import * as React from 'react'

const Icon = ({ size = 46, color = 'currentColor', ...props }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6 6-6Z" />
    <path d="m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6 6-6Z" />
  </svg>
)

export default Icon
