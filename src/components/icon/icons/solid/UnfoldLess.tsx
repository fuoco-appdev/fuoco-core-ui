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
      d="m15.17 4 1.42 1.41L12 10 7.41 5.41 8.83 4 12 7.17 15.17 4ZM8.83 20l-1.42-1.41L12 14l4.58 4.59L15.17 20 12 16.83 8.83 20Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
