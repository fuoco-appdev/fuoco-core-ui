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
    <path d="m22 7.175-1.41-1.41-2.85 3.21c-2.06-2.32-4.91-3.72-8.13-3.72-2.89 0-5.54 1.16-7.61 3l1.42 1.42c1.7-1.49 3.85-2.42 6.19-2.42 2.74 0 5.09 1.26 6.77 3.24l-2.88 3.24-4-4-7.5 7.51 1.5 1.5 6-6.01 4 4 4.05-4.55c.75 1.35 1.25 2.9 1.44 4.55H21c-.22-2.3-.95-4.39-2.04-6.14L22 7.175Z" />
  </svg>
)

export default Icon
