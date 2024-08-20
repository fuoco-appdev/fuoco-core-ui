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
      d="M3 4h18c1.1 0 2 .9 2 2l-.01 12c0 1.1-.89 2-1.99 2H3c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Zm2 14h14V6H5v12Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
