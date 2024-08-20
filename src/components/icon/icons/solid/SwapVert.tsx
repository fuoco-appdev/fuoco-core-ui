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
    <path
      fillRule="evenodd"
      d="M5 6.99 9 3l4 3.99h-3V14H8V6.99H5ZM16 10v7.01h3L15 21l-4-3.99h3V10h2Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
