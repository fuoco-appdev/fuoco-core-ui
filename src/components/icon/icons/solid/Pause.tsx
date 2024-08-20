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
      d="M10 19H6V5h4v14Zm4 0V5h4v14h-4Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
