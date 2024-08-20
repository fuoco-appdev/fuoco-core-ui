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
      d="M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2l.01-14c0-1.1.89-2 1.99-2Zm9 11h4v-4h-4V6h-4v4H6v4h4v4h4v-4Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
