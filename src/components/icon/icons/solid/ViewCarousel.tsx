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
      d="M7 19h10V4H7v15Zm-5-2h4V6H2v11Zm16 0V6h4v11h-4Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
