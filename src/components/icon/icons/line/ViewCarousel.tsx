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
    <path d="M2 7h4v10H2V7Zm5 12h10V5H7v14ZM9 7h6v10H9V7Zm9 0h4v10h-4V7Z" />
  </svg>
)

export default Icon
