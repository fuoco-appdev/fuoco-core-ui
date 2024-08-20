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
      d="M10.6 5h2.8v14h-2.8V5ZM5 9.2h3V19H5V9.2ZM19 13h-2.8v6H19v-6Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Icon
