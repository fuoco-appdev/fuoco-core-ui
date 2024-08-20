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
      d="M8 6H6v12h2V6Zm10 12-8.5-6L18 6v12Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
