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
    <path d="M15 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V9l-6-6ZM5 19V5h9v5h5v9H5ZM9 8c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm0 4c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm0 4c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Z" />
  </svg>
)

export default Icon
