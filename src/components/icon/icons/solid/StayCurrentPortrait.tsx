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
      d="m7 1 10 .01c1.1 0 2 .89 2 1.99v18c0 1.1-.9 2-2 2H7c-1.1 0-1.99-.9-1.99-2V3c0-1.1.89-2 1.99-2Zm0 18h10V5H7v14Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
