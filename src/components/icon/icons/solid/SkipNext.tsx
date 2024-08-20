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
      d="M14.5 12 6 18V6l8.5 6Zm3.5 6h-2V6h2v12Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
