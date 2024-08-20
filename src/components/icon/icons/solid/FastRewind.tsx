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
      d="M2.5 12 11 6v12l-8.5-6ZM20 18l-8.5-6L20 6v12Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
