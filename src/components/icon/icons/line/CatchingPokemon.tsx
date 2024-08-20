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
    <path d="M14.5 12a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0Zm7.5 0c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Zm-2 0h-4c0-2.21-1.79-4-4-4s-4 1.79-4 4H4c0 4.41 3.59 8 8 8s8-3.59 8-8Z" />
  </svg>
)

export default Icon
